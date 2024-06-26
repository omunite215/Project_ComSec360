import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const AuthFormSchema = z.object({
  email: z
    .string({ required_error: "*required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "*required" })
    .min(8, "password length must be atleast 8 characters")
    .max(50, "password length should not be grater than 50 characters"),
  confirmPassword: z
    .string({ required_error: "*required" })
    .min(8, "password length must be atleast 8 characters")
    .max(50, "password length should not be grater than 50 characters"),
});

// For Admin Purpose
export const AccountUserSchema = z
  .object({
    firstName: z
      .string({ required_error: "Please enter your First Name!" })
      .min(1, "First Name is required!")
      .max(50),
    lastName: z
      .string({ required_error: "Please enter your Second Name!" })
      .min(1, "Last Name is required!")
      .max(50),
    email: z
      .string({ required_error: "Please enter your Email!" })
      .email({ message: "Invalid E-mail" }),
    password: z
      .string({ required_error: "Please enter your password!" })
      .min(8, "Min. 8 Characters")
      .max(255),
    confirmPassword: z.string().min(8, "Min. 8 characters").max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

//For Account User Purpose

export const CompanyInfoFormSchema = z
  .object({
    name: z.string().min(2, "min. 2 characters").max(255).trim(),
    chiname: z.string().max(255).trim().optional(),
    type: z.enum(["public", "private"]),
    code: z.string().length(3, { message: "*required" }),
    nature: z.string().min(5, { message: "*required" }).trim(),
    house: z.string().max(65).trim().optional(),
    building: z.string().max(65).trim().optional(),
    street: z.string().max(65).trim().optional(),
    district: z.string().max(65).trim().optional(),
    country: z
      .string()
      .min(3, "*required | need min. 3 characters")
      .max(20)
      .trim(),
    email: z.string().max(255).trim().optional(),
    companyTel: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" })
      .or(z.literal("")),
    companyfax: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" })
      .or(z.literal("")),
    time: z.enum(["1 year", "3 years"]),
    companyLogo: z.any(),
    presentorName: z.string().min(2, "min. 2 characters").max(255).trim(),
    presentorChiName: z.string().max(255).trim().optional(),
    presentorAddress: z
      .string()
      .min(10, "need min. 10 characters")
      .max(65535)
      .trim(),
    presentorTel: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" })
      .or(z.literal("")),
    presentorFax: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" })
      .or(z.literal("")),
    presentorEmail: z.string().max(255).trim().optional(),
    presentorReferance: z.string().max(255).trim(),
  })
  .refine(
    (data) =>
      data.house !== "" ||
      data.building !== "" ||
      data.street !== "" ||
      data.district !== "",
    {
      message: "Fill At Least One Field.",
      path: ["district"],
    },
  );


  export const ShareCapitalFormSchema = z.object({
    class: z.string().max(255).trim(),
    totalProposed: z.coerce.number().positive().min(1, { message: "min. 1" }),
    currency: z.string().max(3),
    unitPrice: z.coerce.number().positive().min(1, {
      message: "min. 1",
    }),
    total: z.coerce
      .number()
      .nonnegative({ message: "This field can't be negative" })
      .min(0.01),
    paid: z.coerce
      .number()
      .nonnegative({ message: "This field can't be negative" })
      .min(0),
    unpaid: z.coerce
      .number()
      .nonnegative({ message: "This field can't be negative" }),
    rightsAttached: z
      .string()
      .min(1, { message: "*required" })
      .max(255)
      .trim()
      .optional(),
  });