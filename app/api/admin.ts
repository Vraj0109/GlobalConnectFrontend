import { ApiHandler } from "@/lib/api-handler";
import { z } from "zod";
import { adminLoginSchema, adminSignupSchema } from "../admin/Schemas";

export async function adminSignup(payload: z.infer<typeof adminSignupSchema>) {
  const handler = new ApiHandler({
    path: "/gcbackend/apis/v1/auth/register",
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
export async function adminLogin(payload: z.infer<typeof adminLoginSchema>) {
  const handler = new ApiHandler({
    path: "/gcbackend/apis/v1/auth/login",
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
export async function getInstituteInformation(id:string) {
  const handler = new ApiHandler({
    path: `/gcbackend/apis/v1/admin/getUnivercity/${id}`,
  });
  const { data } = await handler.get();
  return data;
}
export async function getAdminInstitutes() {
  const handler = new ApiHandler({
    path: "gcbackend/apis/v1/admin/searchUnivercity?name=&address=&page=1&limit=10&city&pincode",
  });
  const { data } = await handler.get();
  return data;
}
