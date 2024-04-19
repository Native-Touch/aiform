import { Conversation, Message, MessageAgents, Prisma } from "@prisma/client";
import { db } from "~/server/db";
import { generateResponse } from "../ai";
import { randomUUID } from "crypto";

export class MessageHelper {
  message: Message;
  constructor(message: Message) {
    this.message = message;
  }
}

export type StarterVarables = {
  industry: string;
};

export class ConversationHelper {
  conversation: Conversation;
  messages: Record<string, MessageHelper> = {};
  constructor(conversation: Conversation) {
    this.conversation = conversation;
    db.message
      .findMany({
        where: {
          conversationId: conversation.id,
        },
      })
      .then((messages) => {
        messages.forEach((message) => {
          this.messages[message.id] = new MessageHelper(message);
        });
      })
      .catch(() => {
        throw new Error("Failed to load messages.");
      });
  }
  async sendPrompt(message: Prisma.MessageCreateInput) {
    // Add a message to the conversation
    const createdMessage = await db.message.create({
      data: message,
    });
    if (!createdMessage) {
      throw new Error("Failed to add message.");
    }
    this.messages[createdMessage.id] = new MessageHelper(createdMessage);
    // Send a message in the conversation
    const res = await generateResponse(
      Object.values(this.messages).map((message) => ({
        content: message.message.content,
        role: message.message.agent,
      })),
    );
  }
}

export async function startConversation(
  conversation: Prisma.ConversationCreateInput,
  starterVariables: StarterVarables,
) {
  // Start a conversation
  const createdConversation = await db.conversation.create({
    data: {
      ...conversation,
      messages: {
        create: [
          {
            agent: MessageAgents.SYSTEM,
            content: `"Hello you are an expert at realizing data needs for forms. Consider the following prompts and generate a form in the following format.
             Provide a list of objects as response. These objects should follow the type: {
              label: string;
              type: FieldType;
              required: boolean;
              placeholder: string | null;
            }
             where FieldType is
             {
              TEXT
              TEXTAREA
              NUMBER
              EMAIL
              PASSWORD
              MULTIPLECHOICE
              CHECKBOX
              DROPDOWN
              DATE
              SCALE
            }

            For fields "multiple choice", "checkbox", and "dropdown", you should also provide a "options" field which is an array of strings.
            For field "scale", you should also provide a "min" and "max" field which are numbers.

             ONLY REPLY WITH A VALID JSON PARSABLE OBJECT NOTHING ELSE, ABSOLUTELY NOTHING ELSE"`,
            id: randomUUID(),
          },
        ],
      },
    },
  });
  if (!conversation) {
    throw new Error("Failed to start conversation.");
  }
  return new ConversationHelper(createdConversation);
}
