"use client";
import React from "react";
import { useGetJobPostList } from "../queries";
import { InstituteData } from "../Schemas";
import InstituteCard from "./InstituteCard";
import { Container } from "@/components/ui/container";
import InstituteSkeleton from "./InstituteSkeleton";
import { Button } from "@/components/ui/button";
// import InstituteCard from "./InstituteCard";

const Institutess = () => {
  /** custom hooks */
  const { data, isLoading, refetch, isRefetching } = useGetJobPostList();
  const institutes = data?.data;

  const handleReload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    refetch();
  };

  if (isLoading || isRefetching) return <InstituteSkeleton />;
  return (
    <Container className="mt-10" variant={"breakpointPadded"}>
      <Button onClick={handleReload}>Reload</Button>
      <div className="grid grid-cols-12 gap-4">
        {institutes.length &&
          institutes.map((institute: InstituteData, index: number) => (
            <InstituteCard
              key={`institute_${index}`}
              instituteData={institute}
            />
          ))}
      </div>
    </Container>
  );
};

export default Institutess;
