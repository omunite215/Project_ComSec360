"use server";

import { AccountUserSchema } from "@/lib/validationSchemas";
import { db } from "@/db";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { Users_Table } from "@/db/schema";
import type { z } from "zod";
import { eq } from "drizzle-orm";

const saltRounds = genSaltSync(12);

export async function CreateNewAccountUser(
  request: z.infer<typeof AccountUserSchema>,
) {
  const result = AccountUserSchema.safeParse(request);
  if (result.success) {
    const type = "account_user" as "account_user" | "guest" | "admin";
    const hashedPassword = hashSync(result.data.password, saltRounds);
    const user = {
      ...result.data,
      type,
      password: hashedPassword,
    };

    await db.insert(Users_Table).values(user).execute();
    return { success: true, data: result.data };
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function UpdateAccountUser(
  request: z.infer<typeof AccountUserSchema>,
  id: string,
) {
  const result = AccountUserSchema.safeParse(request);
  if (result.success) {
    const type = "account_user" as "account_user" | "guest" | "admin";
    const hashedPassword = hashSync(result.data.password, saltRounds);
    const user = {
      ...result.data,
      type,
      password: hashedPassword,
    };

    await db.update(Users_Table).set(user).where(eq(Users_Table.id, id));
    return { success: true, data: result.data };
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function DELETE(id: string) {
  try{
    await db.delete(Users_Table).where(eq(Users_Table.id, id));
  }
  catch(error){
    
  }
}
