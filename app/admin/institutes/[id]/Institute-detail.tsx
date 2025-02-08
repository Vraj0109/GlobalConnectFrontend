"use client";

import * as React from "react";
import {
  Globe,
  MapPin,
  Phone,
  School,
  Clock,
  BookOpen,
  Languages,
} from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Subject {
  _id: string;
  instituteId: string;
  name: string;
  duration: number;
  language: string;
  subjectCode: string;
}

interface Course {
  _id: string;
  name: string;
  price: number[];
  noOfSemester: number;
  duration: number;
  language: string;
  courseCode: string;
  subjects: Subject[];
  instituteId?: string;
}

interface InstituteData {
  location: {
    city: string;
    country: string;
    pincode: string;
    address: string;
  };
  _id: string;
  name: string;
  description: string;
  phone: string;
  url: string;
  logo: string;
  courses: Course[];
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function InstituteDetail(props: any) {
  const { instituteData } = props;
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Institute Information Card */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="relative h-24 w-24 shrink-0">
            <Image
              src={"/fefuLogo.jpg"}
              alt={`${instituteData.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-1 flex-1">
            <h1 className="text-2xl font-bold">{instituteData.name}</h1>
            <p className="text-muted-foreground">{instituteData.description}</p>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  {instituteData.location.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {instituteData.location.city},{" "}
                  {instituteData.location.country} -{" "}
                  {instituteData.location.pincode}
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <a
                href={`tel:${instituteData.phone}`}
                className="text-sm hover:text-primary hover:underline transition-colors"
              >
                {instituteData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <a
                href={instituteData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary hover:underline transition-colors"
              >
                {new URL(instituteData.url).hostname}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Courses Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <School className="h-5 w-5" />
          Available Courses
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {instituteData.courses.map((course) => (
            <Card key={course._id} className="flex flex-col">
              <CardHeader>
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <span className="text-sm font-mono bg-secondary px-2 py-1 rounded">
                      {course.courseCode}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration} years
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.noOfSemester} semesters
                    </div>
                    <div className="flex items-center gap-1">
                      <Languages className="h-4 w-4" />
                      {course.language}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {course.subjects.length > 0 && (
                    <AccordionItem value="subjects">
                      <AccordionTrigger>Subjects</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {course.subjects.map((subject) => (
                            <div
                              key={subject._id}
                              className="flex items-center justify-between text-sm p-2 rounded bg-secondary"
                            >
                              <span>{subject.name}</span>
                              <span className="text-muted-foreground font-mono">
                                {subject.subjectCode}
                              </span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  <AccordionItem value="fees">
                    <AccordionTrigger>Semester-wise Fees</AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Semester</TableHead>
                            <TableHead className="text-right">Fees</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {course.price.map((fee, index) => (
                            <TableRow key={index}>
                              <TableCell>Semester {index + 1}</TableCell>
                              <TableCell className="text-right font-mono">
                                {formatPrice(fee)}
                              </TableCell>
                            </TableRow>
                          ))}
                          <TableRow className="font-medium">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right font-mono">
                              {formatPrice(
                                course.price.reduce((a, b) => a + b, 0)
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
