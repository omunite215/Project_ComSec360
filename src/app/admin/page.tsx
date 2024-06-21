import StatsCard from "@/components/StatsCard";
import { InviteForm } from "./_components/forms/InviteForm";
import DataTable from "./_components/table/DataTable";
import { StatsInfo } from "@/lib/constants";

const AdminPage = () => {
	return (
		<section className="py-6 container space-y-6">
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				{StatsInfo.map((item) => (
					<StatsCard key={item.title} {...item} />
				))}
			</div>
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
				<div className="xl:col-span-2">
					<DataTable />
				</div>
				<InviteForm />
			</div>
		</section>
	);
};

export default AdminPage;
