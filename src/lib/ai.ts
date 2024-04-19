import { cloudflareAxios } from "./axios";

type AIConversation = {
  role: "system" | "user";
  content: string;
};

export async function generateResponse(messages: AIConversation[]) {
  const res = await cloudflareAxios.post(
    `@hf/mistralai/mistral-7b-instruct-v0.2`,
    {
      messages,
    },
  );

  return res;
}
