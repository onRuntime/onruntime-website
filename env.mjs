import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    PORT: z.string().optional(),
    JOIN_API_KEY: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    JOIN_API_KEY: process.env.JOIN_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  skipValidation: !!process.env.CI,
  emptyStringAsUndefined: true,
});
