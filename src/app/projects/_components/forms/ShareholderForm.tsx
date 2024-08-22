"use client";

import { ShareholdersFormSchema } from "@/app/validationSchemas";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import type { z } from "zod";
import { useShareCapitalStore } from "@/store/ShareCapitalStore";

const Shareholders = () => {
  const [disable, setDisable] = useState(false);

  const shareCapitalData = useShareCapitalStore(
    (state) => state.shareCapitalData,
  );

  const form = useForm<z.infer<typeof ShareholdersFormSchema>>({
    resolver: zodResolver(ShareholdersFormSchema),
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
      shareDetails: [
        {
          classOfShares: "Ordinary",
          noOfShares: 800,
        },
      ],
    },
  });
  const IDFileRef = form.register("idProof", { required: true });
  const AddressFileRef = form.register("addressProof", { required: false });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    name: "shareDetails",
    control,
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
  function onSubmit(values: z.infer<typeof ShareholdersFormSchema>) {
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
                    <FormField
                      name="surname"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Surname Eg: Bond"
                              {...form.register("surname")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Name Eg: James" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell className="space-y-6">
                    <FormField
                      name="idNo"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={`${
                                disable ? "Company" : "ID"
                              } No. Eg: S313XX31X`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
                          <TooltipComponent content="Address proof can be a bank letter or utility letter with the name and the address." />
                        )}
                      </FormLabel>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="space-y-6">
                    <FormField
                      name="address"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Name Eg: No.1 Jianguomenwai Avenue"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Eg: email1@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      name="phone"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
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
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class of Shares</TableHead>
                  <TableHead>No. of Shares</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <span
                      className={buttonVariants()}
                      onClick={() =>
                        append({
                          classOfShares: "",
                          noOfShares: 0,
                        })
                      }
                    >
                      <PlusCircle />
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Class of Shares" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Class of Shares</SelectLabel>
                                {shareCapitalData.map((item) => (
                                  <SelectItem key={item.id} value={item.class}>
                                    <div className="flex gap-3">
                                      <span className="font-medium">
                                        {item.class}
                                      </span>
                                      <span className="font-light">
                                        {item.unpaid}
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </TableCell>
                    <Controller
                      render={({ field }) => (
                        <TableCell>
                          <Input {...field} type="number" />
                        </TableCell>
                      )}
                      name={`shareDetails.${index}.noOfShares`}
                    />
                    <TableCell>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => remove(index)}
                      >
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              <Button type="submit" className="my-4">
                Add Shareholder
              </Button>
            </div>
          </form>
        </Form>
  );
};

export default Shareholders;
