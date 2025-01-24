"use client";
import { useQuery } from "@tanstack/react-query";
import { getAdminInstitutes } from "../api/admin";

export function useGetJobPostList() {
  return useQuery({
    queryKey: [`adminInstitutes`],
    queryFn: async () => await getAdminInstitutes().then((res) => res),
    retry: false,
  });
}
