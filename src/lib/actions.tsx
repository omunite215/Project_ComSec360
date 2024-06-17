import axios from "axios";
import { z } from "zod";
import { InviteFormSchema } from "./validationSchemas";
import toast from "react-hot-toast";

export async function createAccountUser(
  data: z.infer<typeof InviteFormSchema>,
  setIsSubmitting: (value: boolean) => void,
  reset: () => void
) {
  setIsSubmitting(true);
  try{
    await axios.post("/api/accounts/new", data);
    toast.success("Toast Created Successfully!!");
    setIsSubmitting(false);
    reset();
  }
  catch(error){
    toast.error("Sorry!! Could not create new account.");
    setIsSubmitting(false);
  }
}

