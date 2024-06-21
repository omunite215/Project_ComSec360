"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
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
import { useMediaQuery } from "@/hooks/use-media-query";
import { deleteAccountUser } from "@/lib/actions";
import { Loader, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteAccountUser = ({ id }: { id: string }) => {
	const router = useRouter();
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [isSubmitting, setisSubmitting] = useState(false);
	const handleSubmit = () => {
		deleteAccountUser(id, setisSubmitting);
		router.refresh();
	};
	if (isDesktop) {
		return (
			<Dialog>
				<DialogTrigger
					className={buttonVariants({ variant: "destructive", size: "icon" })}
				>
					<Trash />
				</DialogTrigger>
				<DialogContent className=" max-w-md">
					<DialogHeader>
						<DialogTitle>Are You Sure ?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. Are you sure you want to permanently
							delete this Account User?
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="justify-end space-x-4">
						<DialogClose className={buttonVariants()}>Cancel</DialogClose>
						<DialogClose
							className={buttonVariants({ variant: "destructive" })}
							onClick={() => deleteAccountUser(id, setisSubmitting)}
						>
							{isSubmitting && <Loader className="mr-2 size-5 animate-spin" />}
							&nbsp;Delete
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="destructive" size="icon">
					<Trash />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Are You Sure ?</DrawerTitle>
					<DrawerDescription>
						This action cannot be undone. Are you sure you want to permanently
						delete this Account User?
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="space-y-6">
					<Button variant="destructive" type="button" onClick={handleSubmit}>
						{isSubmitting && <Loader className="mr-2 size-5 animate-spin" />}
						&nbsp;Delete
					</Button>
					<DrawerClose>
						<Button className="w-full">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DeleteAccountUser;
