// src/db/queries/users.ts
import db from "../connection";
import users from "../schemas/users";
import { eq } from "drizzle-orm";

export const getAllUsers = async () => {
    return await db.select().from(users);
};

export const addUser = async (userData: {
    name?: string;
    email: string;
}) => {
    const [newUser] = await db.insert(users).values(userData).returning();
    return newUser;
};

export const getUserById = async (id: string) => {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
};

export const getUserByEmail = async (email: string) => {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
};
