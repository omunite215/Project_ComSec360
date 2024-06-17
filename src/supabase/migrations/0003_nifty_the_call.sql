ALTER TABLE "USERS" ADD COLUMN "firstName" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "USERS" ADD COLUMN "lastName" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "USERS" DROP COLUMN IF EXISTS "name";