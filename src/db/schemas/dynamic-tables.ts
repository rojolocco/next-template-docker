import { sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// This is a utility function to create dynamic table schemas
export function createDynamicTableSchema(
  tableName: string,
  columns: Array<{
    name: string;
    type:
      | "TEXT"
      | "INTEGER"
      | "BOOLEAN"
      | "TIMESTAMP"
      | "VARCHAR(255)"
      | "DECIMAL(10,2)";
    nullable: boolean;
    primaryKey: boolean;
  }>
) {
  const tableColumns: Record<string, any> = {};

  columns.forEach((col) => {
    let column;

    switch (col.type) {
      case "TEXT":
        column = text(col.name);
        break;
      case "INTEGER":
        column = integer(col.name);
        break;
      case "BOOLEAN":
        column = boolean(col.name);
        break;
      case "TIMESTAMP":
        column = timestamp(col.name);
        break;
      case "VARCHAR(255)":
        column = varchar(col.name, { length: 255 });
        break;
      case "DECIMAL(10,2)":
        column = decimal(col.name, { precision: 10, scale: 2 });
        break;
      default:
        column = text(col.name);
    }

    if (col.primaryKey) {
      column = column.primaryKey();
    } else if (!col.nullable) {
      column = column.notNull();
    }

    tableColumns[col.name] = column;
  });

  return pgTable(tableName, tableColumns);
}

// Example schema for reference - this won't be used directly but shows the pattern
const exampleTable = pgTable("example", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export default exampleTable;
