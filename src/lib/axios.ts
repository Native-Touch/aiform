import axios from "axios";
import { env } from "~/env";

export const cloudflareAxios = axios.create({
  baseURL: `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/ai/run/`,
  headers: {
    Authorization: `Bearer ${env.CLOUDFLARE_AUTH_TOKEN}`,
    "Content-Type": "application/json",
  },
});
