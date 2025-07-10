import { NextRequest, NextResponse } from "next/server";

import { sql } from "drizzle-orm";
import { z } from "zod";

<<<<<<< HEAD
import { db } from "@/db";
=======
import { client, db } from "@/db";
>>>>>>> ec0ecf8 (format changes)
import { createDynamicTableSchema } from "@/db/schemas/dynamic-tables";

// Schema for validating the request body
const createTableSchema = z.object({
  tableName: z
    .string()
    .min(1, "Table name is required")
    .max(63, "Table name must be 63 characters or less")
    .regex(
      /^[a-zA-Z_][a-zA-Z0-9_]*$/,
      "Table name must start with a letter or underscore and contain only letters, numbers, and underscores"
    ),
  columns: z
    .array(
      z.object({
        name: z
          .string()
          .min(1, "Column name is required")
          .regex(
            /^[a-zA-Z_][a-zA-Z0-9_]*$/,
            "Column name must start with a letter or underscore"
          ),
        type: z.enum([
          "TEXT",
          "INTEGER",
          "BOOLEAN",
          "TIMESTAMP",
          "VARCHAR(255)",
          "DECIMAL(10,2)",
        ]),
        nullable: z.boolean().default(true),
        primaryKey: z.boolean().default(false),
      })
    )
    .min(1, "At least one column is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createTableSchema.parse(body);

    const { tableName, columns } = validatedData;

    // Check if table already exists using Drizzle
    const tableExists = await db.execute(sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = ${tableName}
      );
    `);

    if (tableExists[0]?.exists) {
      return NextResponse.json(
        {
          success: false,
          message: `Table '${tableName}' already exists`,
        },
        { status: 400 }
      );
    }

    // Create dynamic table schema using Drizzle
<<<<<<< HEAD
    createDynamicTableSchema(tableName, columns);
=======
    const dynamicTableSchema = createDynamicTableSchema(tableName, columns);
>>>>>>> ec0ecf8 (format changes)

    // Build CREATE TABLE query using Drizzle's SQL builder
    const columnDefinitions = columns
      .map((col) => {
        let definition = `${col.name} ${col.type}`;
        if (col.primaryKey) {
          definition += " PRIMARY KEY";
        } else if (!col.nullable) {
          definition += " NOT NULL";
        }
        return definition;
      })
      .join(", ");

    const createTableQuery = `CREATE TABLE ${tableName} (${columnDefinitions})`;

    // Execute the CREATE TABLE query using Drizzle
    await db.execute(sql.raw(createTableQuery));

    // Get table info to confirm creation using Drizzle
    const tableInfo = await db.execute(sql`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = ${tableName}
      ORDER BY ordinal_position;
    `);

    return NextResponse.json({
      success: true,
      message: `Table '${tableName}' created successfully using Drizzle ORM`,
      data: {
        tableName,
        columns: tableInfo,
        query: createTableQuery,
        schema: "Created using Drizzle dynamic schema",
      },
    });
  } catch (error) {
    console.error("Error creating table:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create table",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to list existing tables
export async function GET() {
  try {
    const tables = await db.execute(sql`
      SELECT table_name, table_schema
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);

    return NextResponse.json({
      success: true,
      message: "Tables retrieved successfully using Drizzle ORM",
      data: tables,
    });
  } catch (error) {
    console.error("Error fetching tables:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch tables",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
