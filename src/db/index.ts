import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { Users_Table } from "./schema";
import postgres from "postgres";
import { eq } from "drizzle-orm";

config({ path: ".env" });

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

export async function fetchAllAccountUsers() {
  await db
    .select({
      id: Users_Table.id,
      firstName: Users_Table.firstName,
      lastName: Users_Table.lastName,
      email: Users_Table.email,
    })
    .from(Users_Table)
    .where(eq(Users_Table.type, "account_user"));
}
