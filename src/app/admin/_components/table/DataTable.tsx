import { db } from "@/db";
import { Users_Table } from "@/db/schema";
import { eq } from "drizzle-orm";
import InviteTable from "./InviteTable";

const DataTable = async () => {
	const data = await db
		.select({
			id: Users_Table.id,
			firstName: Users_Table.firstName,
			lastName: Users_Table.lastName,
			email: Users_Table.email,
			password: Users_Table.password,
		})
		.from(Users_Table)
		.where(eq(Users_Table.type, "account_user"));
	return <InviteTable data={data} />;
};

export default DataTable;
