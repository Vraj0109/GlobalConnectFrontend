import { z } from "zod";

export const adminSignupSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must at least 8 characters long",
  }),
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  role: z.string(),
});

export const adminLoginSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  role: z.string(),
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email("this is not email"),
  password: z.string().min(8, {
    message: "Password must at least 8 characters long",
  }),
});
