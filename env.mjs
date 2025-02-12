import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    PORT: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
  skipValidation: !!process.env.CI,
  emptyStringAsUndefined: true,
});
