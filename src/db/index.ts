import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env/server";
<<<<<<< HEAD

import * as schema from "./schemas/dynamic-tables";
=======
>>>>>>> dev2

export const client = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING ? 1 : undefined,
});

const db = drizzle(client);

export default db;
