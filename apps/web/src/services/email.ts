import { env } from "env.mjs";
import { Resend } from "resend";

let instance: Resend | null = null;

export const resend = new Proxy({} as Resend, {
  get(_, prop) {
    if (!instance) {
      const apiKey = env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY is not configured");
      }
      instance = new Resend(apiKey);
    }
    return instance[prop as keyof Resend];
  },
});
