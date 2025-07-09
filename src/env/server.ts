import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"]),
        NEXT_API_SECRET: z.string().min(1, "NEXT_API_SECRET must be set"),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_API_SECRET: process.env.NEXT_API_SECRET,
    },
    emptyStringAsUndefined: true,
});
