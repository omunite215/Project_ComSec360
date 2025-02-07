import CustomFormField from "@/components/CustomFormFields";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

import { z } from "zod";

const NameForm = () => {
	const NameSchema = z.object({ name: z.string().min(2, "Min. length must be 2.").trim() });
	
	const form = useForm<z.infer<typeof NameSchema>>({
		resolver: zodResolver(NameSchema),
		defaultValues: {
			name: "",
		},
	});
	function onSubmit(values: z.infer<typeof NameSchema>) {
		console.log(values);
        toast.success("Name Updated Successfully!!");
	}
	return (
			<Card>
				<CardHeader>
					<CardTitle>Name</CardTitle>
					<CardDescription>
						Make changes to your Name here. Click save when you're done.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<CustomFormField
								control={form.control}
								name="name"
								placeholder="XYZ"
								label="Name"
							/>
							<Button type="submit" variant="gooeyLeft">
								Save Changes
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
	);
};

export default NameForm;
