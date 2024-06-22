import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const TableSkeleton = () => {
	const count = [0, 1, 2, 3, 4, 5];
	return (
		<div className="w-full">
			<div className="flex items-center py-4 flex-wrap">
				<Skeleton className="w-64 h-8 max-w-sm rounded" />
				<Skeleton className="w-48 h-8 rounded" />
			</div>
			<div className="rounded-md border">
				<Table>
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
						{count.map((item) => (
							<TableRow key={item}>
								<TableCell>
									<Skeleton className="h-4 w-20 rounded-md" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20 rounded-md" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20 rounded-md" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20 rounded-md" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20 rounded-md" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="space-x-2">
					<Skeleton className="h-9 w-16 rounded-md" />
					<Skeleton className="h-9 w-16 rounded-md" />
				</div>
			</div>
		</div>
	);
};

export default TableSkeleton;
