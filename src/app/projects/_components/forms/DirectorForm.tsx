"use client";

import CustomFormField, {
  CustomCheckboxField,
} from "@/components/CustomFormFields";
import { AddressInfoHoverCard } from "@/components/hovercards";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DirectorsFormSchema } from "@/lib/validationSchemas";
import { useShareCapitalStore } from "@/store/ShareCapitalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const DirectorForm = () => {
  const [disable, setDisable] = useState(false);

  const shareCapitalData = useShareCapitalStore(
    (state) => state.shareCapitalData,
  );

  const form = useForm<z.infer<typeof DirectorsFormSchema>>({
    resolver: zodResolver(DirectorsFormSchema),
    defaultValues: {
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
  const IDFileRef = form.register("idProof", { required: true });
  const AddressFileRef = form.register("addressProof", { required: false });

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
  function onSubmit(values: z.infer<typeof DirectorsFormSchema>) {
    console.log(values);
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
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
                <CustomCheckboxField
                  name="type"
                  control={form.control}
                  value1="person"
                  value2="company"
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
                  placeholder="Surname Eg:Bond"
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
                          {...IDFileRef}
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
                            {...AddressFileRef}
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
                  name="email"
                  type="email"
                  control={form.control}
                  placeholder="Eg: xyz@gmail.com"
                />
              </TableCell>
              <TableCell>
                <CustomFormField
                  name="phone"
                  control={form.control}
                  placeholder="Enter a phone number"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div>
          <Button type="submit" className="my-4">
            Add Director
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DirectorForm;
