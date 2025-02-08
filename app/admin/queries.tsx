"use client";
import { useQuery } from "@tanstack/react-query";
import { getAdminInstitutes, getInstituteInformation } from "../api/admin";

export function useGetJobPostList() {
  return useQuery({
    queryKey: [`adminInstitutes`],
    queryFn: async () => await getAdminInstitutes().then((res) => res),
    retry: false,
  });
}
export function useGetInstituteInformation(id: string) {
  return useQuery({
    queryKey: [`adminInstitutes${id}`],
    queryFn: async () =>
      await getInstituteInformation(id).then((res) => res.data),
    retry: false,
  });
}
