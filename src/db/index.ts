import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env/server";
import * as schema from "./schemas/dynamic-tables";

export const client = postgres(env.DATABASE_URL);
const db = drizzle(client, { schema });

export default db;
export { db };
