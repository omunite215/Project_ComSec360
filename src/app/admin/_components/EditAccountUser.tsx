"use client";
import { Pencil } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import { AccountUserForm } from "./AccountUserForm";
import type { InferSelectModel } from "drizzle-orm";
import type { Users_Table } from "@/db/schema";
import { useMediaQuery } from "@/hooks/use-media-query";

const EditAccountUser = ({
	user,
}: { user: InferSelectModel<typeof Users_Table> }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
		return (
			<Dialog>
				<DialogTrigger
					className={buttonVariants({ variant: "outline", size: "icon" })}
				>
					<Pencil />
				</DialogTrigger>
				<DialogContent className="sm:max-w-lg max-w-md mx-3">
					<DialogHeader>
						<DialogTitle>Edit Account User Info ( id: {user.id} )</DialogTitle>
						<DialogDescription>
							Make changes to Account User Information. Click save when
							you&apos;re done.
						</DialogDescription>
					</DialogHeader>
					<AccountUserForm user={user} />
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline" size="icon">
					<Pencil />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Edit Account User Info ( id: {user.id} )</DrawerTitle>
					<DrawerDescription>
						Make changes to Account User Information. Click save when
						you&apos;re done.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<AccountUserForm user={user} />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default EditAccountUser;
