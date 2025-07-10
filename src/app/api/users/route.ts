import { NextRequest, NextResponse } from "next/server";
import { getAllUsers, addUser } from "@/db/queries/users";
import { z } from "zod";

// Schema for validating user input
const createUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email format"),
});

// GET /api/users - Get all users
export async function GET() {
    try {
        const users = await getAllUsers();
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = createUserSchema.parse(body);

        // Create the user
        const newUser = await addUser(validatedData);

        return NextResponse.json(
            { message: "User created successfully", user: newUser },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation error", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error creating user:", error);
        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}