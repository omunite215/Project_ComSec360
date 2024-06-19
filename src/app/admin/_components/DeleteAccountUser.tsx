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
import { Trash, Loader } from "lucide-react";
import { useState } from "react";

const DeleteAccountUser = ({ id }: { id: string }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [isSubmitting, setisSubmitting] = useState(false);
	const handleSubmit = () => {
		deleteAccountUser(id, setisSubmitting);
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
							delete this Account User(id: {id})?
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="justify-end space-x-4">
						<DialogClose>
							<Button>Cancel</Button>
						</DialogClose>
						<form action={handleSubmit}>
							<Button variant="destructive" type="submit">
								{isSubmitting && (
									<Loader className="mr-2 size-5 animate-spin" />
								)}
								&nbsp;Delete
							</Button>
						</form>
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
						delete this Account User(id: {id})?
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="space-y-6">
					<form action={handleSubmit}>
						<Button variant="destructive" type="submit">
							{isSubmitting && <Loader className="mr-2 size-5 animate-spin" />}
							&nbsp;Delete
						</Button>
					</form>
					<DrawerClose>
						<Button className="w-full">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DeleteAccountUser;
