"use client";

// Standard packages

import { ReactNode } from "react";

// Custom packages

// PropTypes
interface AssessLayoutProps {
  /** Assesslayout children */
  children: ReactNode;
}

export default function AssessLayout(props: Readonly<AssessLayoutProps>) {
  /** props - states */
  const { children } = props;

  return (
    <>
      <main className="w-full h-full text-grayscale_extended_900">
        {children}
      </main>
    </>
  );
}
