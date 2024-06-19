"use client";
import { db } from "@/db";
import { Users_Table } from "@/db/schema";
import { eq } from "drizzle-orm";
import { useState } from "react";
import toast from "react-hot-toast";

export async function useFetchAllAccountUsers() {
	const [loading, setLoading] = useState(true);
	try {
		const result = await db
			.select({
				id: Users_Table.id,
				firstName: Users_Table.firstName,
				lastName: Users_Table.lastName,
				email: Users_Table.email,
				password: Users_Table.password,
			})
			.from(Users_Table)
			.where(eq(Users_Table.type, "account_user"));
		setLoading(false);
		return { result, loading };
	} catch (err) {
		toast.error("Sorry!! Could'nt Fetch Data");
	}
}
