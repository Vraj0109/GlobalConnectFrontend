"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLoginForm from "./AdminLogin";
import AdminSignupForm from "./AdminSignup";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdminAuthPage = () => {
  /** useState hooks */

  const [activeTab, setActiveTab] = useState("login");

  /** custom renderer */
  const RenderCardHeader = () => (
    <CardHeader>
      <CardTitle>Admin {activeTab === "login" ? "login" : "Signup"}</CardTitle>
      <CardDescription>
        {activeTab === "login"
          ? "login with your credentials"
          : "create your account"}
      </CardDescription>
    </CardHeader>
  );

  return (
    <Card className="mt-10 !w-[500px]">
      <RenderCardHeader />
      <CardContent className="!w-[500px]">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex items-center flex-col"
        >
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Sign up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="w-full">
            <AdminLoginForm />
          </TabsContent>
          <TabsContent value="signup" className="w-full">
            <AdminSignupForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdminAuthPage;
