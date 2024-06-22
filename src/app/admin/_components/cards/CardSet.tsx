import StatsCard from "@/components/StatsCard";
import { db } from "@/db";
import { Users_Table } from "@/db/schema";
import { StatsInfo } from "@/lib/constants";
import { count } from "drizzle-orm";

const CardSet = async () => {
	const totalAccountUsers = await db
		.select({ count: count(Users_Table.id) })
		.from(Users_Table);
	const result = [
		{ ...StatsInfo[0], stat: totalAccountUsers[0].count },
		{ ...StatsInfo[1] },
		{ ...StatsInfo[2] },
	];
	//Fetch All Users and Projects once finished Account User
	return (
		<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
			{result.map((item) => (
				<StatsCard key={item.title} {...item} />
			))}
		</div>
	);
};

export default CardSet;
