import { adminSignup } from "@/app/api/admin";
import { useMutation } from "@tanstack/react-query";

export function usePostAdminSignup() {
  return useMutation({
    mutationFn: (payload: any) => adminSignup(payload),
  });
}
