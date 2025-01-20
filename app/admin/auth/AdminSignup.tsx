"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { usePostAdminSignup } from "../mutations";
import { adminSignupSchema } from "../Schemas";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminSignupForm() {
  /** navigation hooks */

  const router = useRouter();
  /** custom hooks */
  const { mutateAsync: postAdminSignup } = usePostAdminSignup();

  const form = useForm<z.infer<typeof adminSignupSchema>>({
    resolver: zodResolver(adminSignupSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof adminSignupSchema>) {
    try {
      await postAdminSignup(data);
      toast({
        title: "Successfully created the account",
      });
      router.push("/admin/login");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "something went wrong",
      });
    }
  }

  //   if (form.formState.errors) {
  //     console.log(form.formState.errors);
  //     return <div>an error has accured</div>;
  //   }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Create your account to start a new journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant={"default"}
              size={"sm"}
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

// [[0a,0b,0c,0d],
//  [1a,1b,1c,1d],
//  [2a,2b,2c,2d],
//  [3a,3b,3c,3d]]