import StatsCard from "@/components/StatsCard";
import { InviteTable, InviteForm } from "./_components";
import { StatsInfo } from "@/lib/constants";
import { db } from "@/db";
import { Users_Table } from "@/db/schema";
import { eq } from "drizzle-orm";

const AdminPage = async () => {
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
    
  return (
    <section className="py-6 container space-y-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {StatsInfo.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="xl:col-span-2">
        <InviteTable data={data} />
        </div>
        <InviteForm />
      </div>
    </section>
  );
};

export default AdminPage;
