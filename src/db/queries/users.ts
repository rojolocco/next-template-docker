// src/db/queries/users.ts
import db from "../connection";
import users from "../schemas/users";

export const getAllUsers = async () => {
    return await db.select().from(users);
};
