"use client";

import CustomFormField from "@/components/CustomFormFields";
import Tooltip from "@/components/Tooltip";
import { AddressInfoHoverCard } from "@/components/hovercards";
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
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CompanySecretaryFormSchema } from "@/lib/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const CompanySecretaryForm = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);

  const form = useForm<z.infer<typeof CompanySecretaryFormSchema>>({
    resolver: zodResolver(CompanySecretaryFormSchema),
    defaultValues: {
      tcspLicenseNo: undefined,
      tcspReason: undefined,
      type: "person",
      surname: "",
      name: "",
      idNo: "",
      address: "",
      email: "",
      phone: "",
      idProof: undefined,
      addressProof: undefined,
    },
  });

  const shareholdersRows = [
    {
      label: "Person/Company",
      for: "type",
    },
    {
      label: "Surname",
      for: "surname",
    },
    {
      label: "Name",
      for: "name",
    },
    {
      label: disable
        ? "Company No. / Upload a Copy"
        : "ID/Passport No. / Upload a Copy",
      for: "idNo",
    },
    {
      label: disable ? "Address" : "Address / Upload a Copy",
      for: "address",
    },
    {
      label: "Email",
      for: "email",
    },
    {
      label: "Phone",
      for: "phone",
    },
  ];

  // Submit Handler.
  function onSubmit(values: z.infer<typeof CompanySecretaryFormSchema>) {
    console.log("Backend is yet to be initialized");
    router.push("/summary");
  }
  const type = form.getValues("type");
  useEffect(() => {
    if (type === "company") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [type]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Secretary</CardTitle>
        <CardDescription>
          Please enter information on Company Secretary
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-6">
              <CustomFormField
                name="tcspLicenseNo"
                control={form.control}
                label="TCSP license No:"
                placeholder="TCSP License No..."
              />
              <CustomFormField
                name="tcspReason"
                control={form.control}
                label="If you do not have License, Please explain the reason:"
                placeholder="Write your reason here..."
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  {shareholdersRows.slice(0, 4).map((row) => (
                    <TableHead
                      key={row.for}
                      className={cn({
                        hidden: disable && row.label === "Surname",
                      })}
                    >
                      <FormLabel htmlFor={row.for}>{row.label}</FormLabel>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormField
                      name="type"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex justify-start items-center gap-10"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="person" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Person
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="company" />
                                </FormControl>
                                <Label className="font-normal">Company</Label>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell
                    className={cn({
                      hidden: disable,
                    })}
                  >
                    <CustomFormField
                      name="surname"
                      control={form.control}
                      placeholder="Surname Eg: Bond"
                    />
                  </TableCell>
                  <TableCell>
                    <CustomFormField
                      name="name"
                      control={form.control}
                      placeholder="Name Eg: James"
                    />
                  </TableCell>
                  <TableCell className="space-y-6">
                    <CustomFormField
                      name="idNo"
                      control={form.control}
                      placeholder={`${
                        disable ? "Company" : "ID"
                      } No. Eg: S313XX31X`}
                    />
                    <FormField
                      name="idProof"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="File"
                              placeholder="Upload a Copy"
                              {...form.register("idProof")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow>
                  {shareholdersRows.slice(4, 9).map((row) => (
                    <TableHead key={row.for}>
                      <FormLabel
                        htmlFor={row.for}
                        className={cn({
                          "inline-flex items-center gap-3":
                            !disable && row.label === "Address",
                        })}
                      >
                        {row.label}
                        {!disable && row.label === "Address" && (
                          <AddressInfoHoverCard />
                        )}
                      </FormLabel>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="space-y-6">
                    <CustomFormField
                      name="address"
                      control={form.control}
                      placeholder="Eg: No.1 Jianguomenwai Avenue"
                    />
                    {!disable && (
                      <FormField
                        name="addressProof"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="File"
                                placeholder="Upload a Copy"
                                {...form.register("addressProof")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <CustomFormField
                      type="email"
                      name="email"
                      control={form.control}
                      placeholder="Eg: email1@gmail.com"
                    />
                  </TableCell>
                  <TableCell>
                    <CustomFormField
                      name="phone"
                      control={form.control}
                      placeholder="Enter a Phone Number"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex items-center justify-end">
              <Button type="submit" variant="destructive" className="my-4">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CompanySecretaryForm;
