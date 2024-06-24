"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Users_Table } from "@/db/schema";
import { CreateNewAccountUser, UpdateAccountUser } from "@/lib/actions";
import { AccountUserSchema } from "@/lib/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { InferSelectModel } from "drizzle-orm";
import { Loader, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";

export function AccountUserForm({
	user,
}: { user?: InferSelectModel<typeof Users_Table> }) {
	const router = useRouter();

	const form = useForm<z.infer<typeof AccountUserSchema>>({
		resolver: zodResolver(AccountUserSchema),
		defaultValues: {
			firstName: user?.firstName ?? "",
			lastName: user?.lastName ?? "",
			email: user?.email ?? "",
			password: user?.password ?? "",
			confirmPassword: user?.password ?? "",
		},
	});

	const { isSubmitting } = form.formState;
	const onSubmit = async (values: z.infer<typeof AccountUserSchema>) => {
		const result = user
			? await UpdateAccountUser(values, user.id)
			: await CreateNewAccountUser(values);

		if (result?.success) {
			toast.success(
				`Account User ${user ? "Updated" : "Created"} Successfully!!`,
			);
		} else {
			toast.error(
				`Sorry ! Could not ${user ? "Update" : "Create"} Account User!!`,
			);
		}
		router.refresh();
	};

	return (
		<Form {...form}>
			<form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="James" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Bond" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="example@email.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="XXXXXXX" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="XXXXXXX" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				 <Button
                    type="submit"
                    variant="gooeyLeft"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <Loader className="mr-2 size-5 animate-spin" />
                    ) : (
                        <User2 className="mr-2 size-5 my-auto" />
                    )}
                    &nbsp; {isSubmitting ? (user ? "Saving" : "Creating") : (user ? "Save" : "Create")} Account User
                </Button>
			</form>
		</Form>
	);
}
