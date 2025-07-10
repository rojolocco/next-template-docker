import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

const users = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 320 }).notNull().unique()
});

export default users;
