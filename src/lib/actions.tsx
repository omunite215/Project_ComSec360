import axios from "axios";
import type { z } from "zod";
import type { AccountUserSchema } from "./validationSchemas";
import toast from "react-hot-toast";

export async function createAccountUser(
  data: z.infer<typeof AccountUserSchema>,
  setIsSubmitting: (value: boolean) => void,
  reset: () => void
) {
  setIsSubmitting(true);
  try{
    await axios.post("/api/accounts", data);
    toast.success("Account User Created Successfully!!");
    setIsSubmitting(false);
    reset();
  }
  catch(error){
    toast.error("Sorry!! Could not create new account.");
    setIsSubmitting(false);
  }
}

export async function updateAccountUser(
  id: string,
  data: z.infer<typeof AccountUserSchema>,
  setIsSubmitting: (value: boolean) => void,
  reset: () => void
) {
  setIsSubmitting(true);
  try{
    await axios.patch(`/api/accounts/${id}`, data);
    toast.success("Account User Updated Successfully!!");
    setIsSubmitting(false);
    reset();
  }
  catch(error){
    toast.error("Sorry!! Could not update the account.");
    setIsSubmitting(false);
  }
}

export async function deleteAccountUser(
  id: string,
  setIsSubmitting: (value: boolean) => void
) {
  setIsSubmitting(true);
  try{
    await axios.delete(`/api/accounts/${id}`);
    toast.success("Account User Deleted Successfully!!");
    setIsSubmitting(false);
  }
  catch(error){
    toast.error("Sorry!! Could not Delete the selected account.");
    setIsSubmitting(false);
  }
}

