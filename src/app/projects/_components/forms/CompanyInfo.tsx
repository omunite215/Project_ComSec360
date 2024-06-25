"use client";

import { CompanyInfoFormSchema } from "@/lib/validationSchemas";
import { Check, ChevronsUpDown } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { getCurrentDate } from "@/lib/utils";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	CompanyAddressHoverCard,
	CompanyNameHoverCard,
	CompanyPresentorHoverCard,
	CompanyTimeHoverCard,
	CompanyTypeHoverCard,
} from "@/components/hovercards";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NatureOfBusinessContent } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CompanyInfo = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [filteredContent, setFilteredContent] = useState(
		NatureOfBusinessContent,
	);

	const form = useForm<z.infer<typeof CompanyInfoFormSchema>>({
		resolver: zodResolver(CompanyInfoFormSchema),
		defaultValues: {
			name: "",
			chiname: "",
			code: "",
			nature: "",
			type: "private",
			house: "",
			building: "",
			street: "",
			district: "",
			country: "Hong Kong",
			email: "",
			companyTel: "",
			companyfax: "",
			time: "1 year",
			presentorName: "",
			presentorChiName: "",
			presentorAddress: "",
			presentorTel: "",
			presentorFax: "",
			presentorEmail: "",
			presentorReferance: "CompanyName-NNC1-06-03-2024",
			companyLogo: undefined,
		},
	});
	const LogoFileRef = form.register("companyLogo", { required: true });

	const onCommandInputChange = (event: string) => {
		const value = event.toLowerCase();
		const filtered = NatureOfBusinessContent.filter((item) =>
			item.value.toLowerCase().includes(value),
		);
		setFilteredContent(filtered);
	};
	// Submit Handler.
	function onSubmit(values: z.infer<typeof CompanyInfoFormSchema>) {
		console.log(values);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Company Info</CardTitle>
				<CardDescription>Enter information about your Company</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
							<FormField
								name="name"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel className="inline-flex items-center gap-2">
											<span>Company Name (English):</span>
											<CompanyNameHoverCard />
										</FormLabel>
										<FormControl>
											<Input placeholder="company name (English)" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="chiname"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company Name (Chinese):</FormLabel>
										<FormControl>
											<Input placeholder="company name (Chinese)" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
							<FormField
								name="type"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel className="inline-flex items-center gap-2">
											<span>Select Type of Company:</span>
											<CompanyTypeHoverCard />
										</FormLabel>
										<FormControl>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												className="flex justify-start items-center gap-10"
											>
												<FormItem className="flex items-end space-x-3">
													<FormControl>
														<RadioGroupItem value="private" />
													</FormControl>
													<FormLabel className="font-normal">Private</FormLabel>
												</FormItem>
												<FormItem className="flex items-end space-x-3">
													<FormControl>
														<RadioGroupItem value="public" disabled />
													</FormControl>
													<FormLabel className="font-normal text-muted-foreground">
														Public
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex gap-2 items-center">
								<FormField
									name="code"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Code:</FormLabel>
											<FormControl>
												<Input placeholder="XXX" {...field} readOnly />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="nature"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nature of Business</FormLabel>
											<Popover open={open} onOpenChange={setOpen}>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant="outline"
															role="combobox"
															className={cn(
																"md:w-[450px] w-auto h-auto justify-between text-pretty",
																!field.value && "text-muted-foreground",
															)}
														>
															{field.value
																? field.value
																: " Select Nature of Business"}
															<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="md:w-[450px] w-auto">
													<Command>
														<CommandInput
															placeholder="Search Nature of Business..."
															onValueChange={(currentValue) =>
																onCommandInputChange(currentValue)
															}
														/>
														<CommandList>
															<CommandEmpty>No results found.</CommandEmpty>
															<CommandGroup>
																{filteredContent.map((item) => (
																	<CommandItem
																		key={item.value}
																		value={item.value}
																		onSelect={(currentValue) => {
																			setValue(
																				currentValue === value
																					? ""
																					: currentValue,
																			);
																			form.setValue("nature", item.value);
																			form.setValue("code", item.code);
																			setOpen(false);
																		}}
																	>
																		<Check
																			className={cn(
																				"mr-2 h-4 w-4",
																				value === item.value
																					? "opacity-100"
																					: "opacity-0",
																			)}
																		/>
																		{item.value}
																	</CommandItem>
																))}
															</CommandGroup>
														</CommandList>
													</Command>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div className="space-y-3">
							<FormField
								name="house"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel className="inline-flex items-center gap-2">
											<span>Address: </span>
											<CompanyAddressHoverCard />
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Flat / Floor / Block"
												onChange={(e) => {
													form.setValue("house", e.target.value);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="building"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Building"
												onChange={(e) => {
													form.setValue("building", e.target.value);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="street"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Street"
												onChange={(e) => {
													form.setValue("street", e.target.value);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="district"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="District"
												{...field}
												onChange={(e) => {
													form.setValue("district", e.target.value);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="country"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder="HongKong" {...field} readOnly />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Company E-mail:</FormLabel>
									<FormControl>
										<Input
											placeholder="info@test1.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
							<FormField
								name="companyTel"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company Telephone:</FormLabel>
										<FormControl>
											<PhoneInput
												placeholder="Enter a phone number"
												defaultCountry="HK"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="companyfax"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company Fax No:</FormLabel>
										<FormControl>
											<PhoneInput
												placeholder="Enter a phone number"
												defaultCountry="HK"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							name="time"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel className=" inline-flex items-center gap-2">
										<span>
											Choose how long period of Business Registration Fee:
										</span>
										<CompanyTimeHoverCard />
									</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex justify-start items-center gap-10"
										>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="1 year" />
												</FormControl>
												<FormLabel className="font-normal">1 Year</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="3 years" />
												</FormControl>
												<FormLabel className="font-normal">3 Years</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="companyLogo"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Company Logo:</FormLabel>
									<FormControl>
										<Input
											type="File"
											placeholder="Upload a Copy"
											{...LogoFileRef}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Card>
							<CardHeader>
								<CardTitle className="inline-flex items-center gap-2">
									<span>Presentor&lsquo;s Referance</span>
									<CompanyPresentorHoverCard />
								</CardTitle>
								<CardDescription>
									Please enter info on Presentor&lsquo;s Referance
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-8">
								<div className="grid grid-cols-2 gap-3">
									<FormField
										name="presentorName"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name (English):</FormLabel>
												<FormControl>
													<Input placeholder="James Bond" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="presentorChiName"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name (Chinese):</FormLabel>
												<FormControl>
													<Input placeholder="Name (Chinese)" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									name="presentorAddress"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address:</FormLabel>
											<FormControl>
												<Input
													placeholder="Eg: 16, Taichi Street..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="grid grid-cols-2 gap-3">
									<FormField
										name="presentorTel"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Telephone:</FormLabel>
												<FormControl>
													<PhoneInput
														placeholder="Enter a phone number"
														defaultCountry="HK"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="presentorFax"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Fax No:</FormLabel>
												<FormControl>
													<PhoneInput
														placeholder="Enter a phone number"
														defaultCountry="HK"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									name="presentorEmail"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>E-mail:</FormLabel>
											<FormControl>
												<Input
													placeholder="info@test1.com"
													type="email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="presentorReferance"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Presentor&lsquo;s Referance:</FormLabel>
											<FormControl>
												<Input
													placeholder="Eg: CompanyName-NNC1-06-03-2024"
													{...field}
													value={`${form.getValues("name")}-NNC1-${getCurrentDate()}`}
													readOnly
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>
						<div className="flex justify-end items-center">
							<Button type="submit" variant="destructive">
								Save & Next
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default CompanyInfo;
