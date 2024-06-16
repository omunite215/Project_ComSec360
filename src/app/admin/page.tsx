import StatsCard from "@/components/StatsCard";
import { InviteTable, InviteForm } from "./_components";
import { StatsInfo } from "@/lib/constants";

const AdminPage = () => {
  return (
    <section className="py-6 container space-y-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {StatsInfo.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
      </div>
      <div className="flex justify-between gap-4 md:flex-row flex-col">
        <InviteTable />
        <InviteForm />
      </div>
    </section>
  );
};

export default AdminPage;
