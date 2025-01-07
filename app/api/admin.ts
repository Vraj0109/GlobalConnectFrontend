import { ApiHandler } from "@/lib/api-handler";
import { z } from "zod";
import { adminLoginSchema, adminSignupSchema } from "../admin/Schemas";

export async function adminSignup(payload: z.infer<typeof adminSignupSchema>) {
  const handler = new ApiHandler({
    path: "/admin/signup",
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
export async function adminLogin(payload: z.infer<typeof adminLoginSchema>) {
  const handler = new ApiHandler({
    path: "/admin/login",
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
