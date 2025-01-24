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

export interface InstituteData {
  location: {
    city: string;
    country: string;
    pincode: string;
    address: string;
  };
  _id: string;
  name: string;
  description: string;
  phone: string;
  url: string;
  logo: string;
  courses: {
    instutute: string;
    name: string;
    price: number[];
    noOfSemester: number;
    language: string;
    courseCode: string;
    subjects: string[];
  }[];
}
