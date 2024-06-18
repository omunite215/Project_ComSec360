import {z} from "zod";

export const AuthFormSchema = z.object({
    email: z.string({required_error: '*required'}).email({message: 'Invalid email address'}),
    password: z.string({required_error: '*required'}).min(8, 'password length must be atleast 8 characters').max(50, 'password length should not be grater than 50 characters'),
    confirmPassword: z.string({required_error: '*required'}).min(8, 'password length must be atleast 8 characters').max(50, 'password length should not be grater than 50 characters')
});

export const AccountUserSchema = z.object({
    firstName: z.string({ required_error: "Please enter your First Name!" }).min(1, "First Name is required!").max(50),
    lastName: z.string({ required_error: "Please enter your Second Name!" }).min(1, "Last Name is required!").max(50),
    email: z.string({ required_error: "Please enter your Email!" }).email({ message: "Invalid E-mail" }),
    password: z.string({ required_error: "Please enter your password!" }).min(8, "Min. 8 Characters").max(255),
    confirmPassword: z.string().min(8, "Min. 8 characters").max(255),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

