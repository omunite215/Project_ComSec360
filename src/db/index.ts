import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { Users_Table } from './schema';
import postgres from 'postgres';

config({ path: '.env' });

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

const allUsers = await db.select().from(Users_Table);