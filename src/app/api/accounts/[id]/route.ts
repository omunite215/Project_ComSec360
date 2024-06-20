import { type NextRequest, NextResponse } from "next/server";
import { AccountUserSchema } from "@/lib/validationSchemas";
import { db } from "@/db";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { Users_Table } from "@/db/schema";
import { eq } from "drizzle-orm";

const saltRounds = genSaltSync(12);

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const validation = AccountUserSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const type = "account_user" as "account_user" | "guest" | "admin";
  const hashedPassword = hashSync(body.password, saltRounds);
  const user = {
    ...body,
    type,
    password: hashedPassword,
  };

  await db.update(Users_Table).set(user).where(eq(Users_Table.id, params.id));
  return NextResponse.json(user, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  await db.delete(Users_Table).where(eq(Users_Table.id, params.id));
  return NextResponse.json({ status: 200 });
}
