import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLoginForm from "./AdminLogin";
import AdminSignupForm from "./AdminSignup";

const AdminAuthPage = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <AdminLoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <AdminSignupForm />
      </TabsContent>
    </Tabs>
  );
};

export default AdminAuthPage;
