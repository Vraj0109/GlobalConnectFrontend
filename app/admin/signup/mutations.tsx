import { adminLogin, adminSignup } from "@/app/api/admin";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { adminLoginSchema, adminSignupSchema } from "../Schemas";

export function usePostAdminSignup() {
  return useMutation({
    mutationFn: (payload: z.infer<typeof adminSignupSchema>) =>
      adminSignup(payload),
  });
}
export function usePostAdminLogin() {
  return useMutation({
    mutationFn: (payload: z.infer<typeof adminLoginSchema>) =>
      adminLogin(payload),
  });
}
