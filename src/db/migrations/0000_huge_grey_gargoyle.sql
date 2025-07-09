CREATE TABLE "example" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" varchar(255),
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
