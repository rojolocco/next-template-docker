import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env/server";
<<<<<<< HEAD
<<<<<<< HEAD
=======

import * as schema from "./schemas/dynamic-tables";
>>>>>>> ec0ecf8 (format changes)
=======

import * as schema from "./schemas/dynamic-tables";
=======
>>>>>>> dev2
>>>>>>> 7da3108aa63704d412650c657c16daf24e7ba0bf

export const client = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING ? 1 : undefined,
});

const db = drizzle(client);

export default db;
