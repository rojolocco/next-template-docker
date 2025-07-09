import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { env } from "@/env/server";

expand(config());

export default defineConfig({
    schema: "./src/db/schemas/index.ts",
    dialect: "postgresql",
    out: "./src/db/migrations",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
