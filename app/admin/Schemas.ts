import { z } from "zod";

export const adminSignupSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(10, {
    message: "Password must at least 2 characters long",
  }),
  firstName: z
    .string()
    .min(2, "first name should be at least 2 characters long"),
  lastName: z.string().min(2, "last name should be at least 2 characters long"),
});

export const adminLoginSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).email('this is not email'),
  password: z.string().min(10, {
    message: "Password must at least 2 characters long",
  }),
});
