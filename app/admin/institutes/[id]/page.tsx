"use client";
import React from "react";
import { useGetInstituteInformation } from "../../queries";
import InstituteCard from "../InstituteCard";
import { InstituteDetail } from "./Institute-detail";

type InstituePropType = {
  params: {
    id: string;
  };
};
const Institute = (props: InstituePropType) => {
  const { params } = props;
  const { id } = params;

  const {
    data: insttituteData,
    isLoading,
    isRefetching,
  } = useGetInstituteInformation(id);
  console.log(insttituteData);
  if (isLoading || isRefetching) return "...loading";
  return (
    <div>
      <InstituteDetail instituteData={insttituteData.data} />
    </div>
  );
};

export default Institute;
