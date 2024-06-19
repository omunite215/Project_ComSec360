import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { eq } from "drizzle-orm";
import { Users_Table } from "@/db/schema";
import EditAccountUser from "./EditAccountUser";
import DeleteAccountUser from "./DeleteAccountUser";
import { db } from "@/db";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const InviteTableSkeleton = () => {
	const count = [1, 2, 3, 4];
	return (
		<Table>
			<TableCaption>A list of Invites Sent to New Account Users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>First Name</TableHead>
					<TableHead>Last Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Update</TableHead>
					<TableHead>Delete</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{count.map((countItem) => (
					<TableRow key={countItem}>
						<TableCell>
							<Skeleton className=" h-4 w-24 rounded-lg" />
						</TableCell>
						<TableCell>
							<Skeleton className=" h-4 w-24 rounded-lg" />
						</TableCell>
						<TableCell>
							<Skeleton className=" h-4 w-24 rounded-lg" />
						</TableCell>
						<TableCell>
							<Skeleton className=" h-4 w-24 rounded-lg" />
						</TableCell>
						<TableCell>
							<Skeleton className=" h-4 w-24 rounded-lg" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

const InviteTable = async () => {
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

	return (
		<Suspense fallback={<InviteTableSkeleton />}>
			<Table>
				<TableCaption>
					A list of Invites Sent to New Account Users.
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>First Name</TableHead>
						<TableHead>Last Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Update</TableHead>
						<TableHead>Delete</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{result?.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.firstName}</TableCell>
							<TableCell>{item.lastName}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>
								<EditAccountUser user={item} />
							</TableCell>
							<TableCell>
								<DeleteAccountUser id={item.id} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Suspense>
	);
};

export default InviteTable;
