import { Suspense } from "react";
import CardSet from "./_components/cards/CardSet";
import { InviteForm } from "./_components/forms/InviteForm";
import DataTable from "./_components/table/DataTable";
import { CardSetSkeleton, TableSkeleton } from "./_components/skeletons";

const AdminPage = () => {
	return (
		<section className="py-6 container space-y-6">
			<Suspense fallback={<CardSetSkeleton />}>
				<CardSet />
			</Suspense>
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
				<div className="xl:col-span-2">
					<Suspense fallback={<TableSkeleton />}>
						<DataTable />
					</Suspense>
				</div>
				<InviteForm />
			</div>
		</section>
	);
};

export default AdminPage;
