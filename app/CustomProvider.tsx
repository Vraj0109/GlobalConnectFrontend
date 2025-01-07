"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface providerProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const CustomProvider = ({ children }: Readonly<providerProps>) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default CustomProvider;
