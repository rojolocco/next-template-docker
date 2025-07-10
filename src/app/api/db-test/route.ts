import { NextResponse } from "next/server";

<<<<<<< HEAD
import { client } from "@/db";
=======
import db, { client } from "@/db";
>>>>>>> ec0ecf8 (format changes)

export async function GET() {
  try {
    // Test basic connection
    const result = await client`SELECT version()`;

    // Test with Drizzle (basic query)
    const testQuery =
      await client`SELECT NOW() as current_time, 'Connection successful!' as message`;

    return NextResponse.json({
      success: true,
      message: "Database connection successful!",
      data: {
        postgresVersion: result[0]?.version,
        currentTime: testQuery[0]?.current_time,
        connectionMessage: testQuery[0]?.message,
        databaseUrl: process.env.DATABASE_URL?.replace(/:[^:@]*@/, ":****@"), // Hide password in response
      },
    });
  } catch (error) {
    console.error("Database connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
        troubleshooting: {
          checkDocker: "Ensure PostgreSQL container is running: docker ps",
          checkPort:
            "Verify port 5432 is accessible: docker port <container_name>",
          checkEnv:
            "Verify DATABASE_URL in .env.local matches your Docker setup",
          commonIssues: [
            "Container not running",
            "Wrong port mapping",
            "Incorrect credentials",
            "Network connectivity issues",
          ],
        },
      },
      { status: 500 }
    );
  }
}
