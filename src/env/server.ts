import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"]),
        NEXT_API_SECRET: z.string().min(1, "NEXT_API_SECRET must be set"),
        DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_API_SECRET: process.env.NEXT_API_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
    },
    emptyStringAsUndefined: true,
});
