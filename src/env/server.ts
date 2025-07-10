import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_API_SECRET: z.string().min(1, "NEXT_API_SECRET must be set"),
    DATABASE_USER: z.string().min(1, "DATABASE_USER must be set"),
    DATABASE_PASSWORD: z.string().min(1, "DATABASE_PASSWORD must be set"),
    DATABASE_HOST: z.string().min(1, "DATABASE_HOST must be set"),
    DATABASE_NAME: z.string().min(1, "DATABASE_NAME must be set"),
    DATABASE_PORT: z.string().min(1, "DATABASE_PORT must be set"),
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
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    DB_MIGRATING: process.env.DB_MIGRATING,
  },
  emptyStringAsUndefined: true,
});
