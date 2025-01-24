import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const InstituteSkeleton = () => {
  const SkeletonInstituteCard = () => (
    <Card className="col-span-12 xl:col-span-6">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Skeleton className="h-16 w-16 rounded-md" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="space-y-2 pt-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 mt-6">
        <div className="grid gap-2">
          <div className="flex items-start gap-2">
            <Skeleton className="h-4 w-4 mt-1" />
            <div className="flex-1">
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3 mt-1" />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
  return (
    <Container variant={"breakpointPadded"} className="mt-10">
      <div className="grid grid-cols-12 gap-4">
        <SkeletonInstituteCard />
        <SkeletonInstituteCard />
        <SkeletonInstituteCard />
        <SkeletonInstituteCard />
      </div>
    </Container>
  );
};

export default InstituteSkeleton;
