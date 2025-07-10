import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_API_SECRET: z.string().min(1, "NEXT_API_SECRET must be set"),
    DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
    SUPABASE_URL: z.string().url("SUPABASE_URL must be a valid URL"),
    SUPABASE_KEY: z.string().min(1, "SUPABASE_KEY must be set"),
    DB_MIGRATING: z
      .string()
      .refine((s) => s === "true" || s === "false")
      .transform((s) => s === "true")
      .optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_API_SECRET: process.env.NEXT_API_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    DB_MIGRATING: process.env.DB_MIGRATING,
  },
  emptyStringAsUndefined: true,
});
