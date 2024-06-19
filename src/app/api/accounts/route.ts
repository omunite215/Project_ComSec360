import { type NextRequest, NextResponse } from "next/server";
import { AccountUserSchema } from "@/lib/validationSchemas";
import { db } from "@/db";
import { genSaltSync, hashSync} from "bcrypt-ts";
import { Users_Table } from "@/db/schema";

const saltRounds = genSaltSync(12);

export async function POST (request: NextRequest) {
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

    await db.insert(Users_Table).values(user).execute();
    return NextResponse.json(user, {status: 201});
}