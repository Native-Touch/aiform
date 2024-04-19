import { MessageAgents } from "@prisma/client";
import { db } from "~/server/db";
import { ConversationHelper, startConversation } from "~/server/lib/models/conversation";

export const getFormsForUser = async () => {
  const id = "clv6ss57r0000so69n1b0tlij";
  const forms = await db.form.findMany({
    where: {
      ownerId: id,
    },
  });
  return forms;
};

export async function _startConversation() {
  return await startConversation({}, {industry: "ed"})
}

export async function _sendPrompt(conversation: ConversationHelper) {
  return await conversation.sendPrompt(
    {
      agent: MessageAgents.USER,
      content: "Feedback form"
    }
  )
}