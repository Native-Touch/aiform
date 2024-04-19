import { type MessageAgents } from "@prisma/client";
import { cloudflareAxios } from "./axios";

type AIMessageInput = {
  role: MessageAgents;
  content: string;
};

type AIMessageResponse = {
  result: {
    response: string;
  },
  success: boolean;
}

export async function generateResponse(messages: AIMessageInput[]) {
  const res = await cloudflareAxios.post(
    `@hf/mistralai/mistral-7b-instruct-v0.2`,
    {
      messages: messages.map((message) => ({
        role: message.role.toLowerCase(),
        content: message.content,
      })),
    },
  );

  return res.data as unknown as AIMessageResponse;
}
