import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Globe,
  School,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { InstituteData } from "../Schemas";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

/** propType */

type InstituteCardProp = {
  instituteData: InstituteData;
};
const InstituteCard = (props: InstituteCardProp) => {
  /** props state */
  const { instituteData } = props;

  /** useState hooks */

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleClamped, setIsTitleClamped] = useState(false);
  const [isDescriptionClamped, setIsDescriptionClamped] = useState(false);

  /** useRef hooks */

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  /** useEffect hooks */

  useEffect(() => {
    const checkTitleOverflow = () => {
      if (titleRef.current) {
        setIsTitleClamped(
          titleRef.current.scrollHeight > titleRef.current.clientHeight
        );
      }
    };

    const checkDescriptionOverflow = () => {
      if (descriptionRef.current) {
        setIsDescriptionClamped(
          descriptionRef.current.scrollHeight >
            descriptionRef.current.clientHeight
        );
      }
    };

    checkTitleOverflow();
    checkDescriptionOverflow();

    // Recheck on window resize
    window.addEventListener("resize", () => {
      checkTitleOverflow();
      checkDescriptionOverflow();
    });

    return () => {
      window.removeEventListener("resize", () => {
        checkTitleOverflow();
        checkDescriptionOverflow();
      });
    };
  }, [instituteData.name, instituteData.description]);

  /** custom handers */

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent card click when clicking links
  };

  const handleExpandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      href={instituteData.url}
      className="col-span-12 xl:col-span-6"
      onClick={handleLinkClick}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full max-w-2xl cursor-pointer transition-all duration-300 will-change-transform backface-visibility-hidden ${
          isHovered
            ? "transform-gpu translate-y-[-4px] shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
            : ""
        }`}
      >
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="relative h-16 w-16 shrink-0">
            <Image
              src={"/fefuLogo.jpg"}
              alt={`${instituteData.name} logo`}
              fill
              className={`object-contain transition-transform duration-300 ${
                isHovered ? "scale-[101%]" : ""
              }`}
            />
          </div>
          <div className="space-y-1 flex-1">
            <h2
              ref={titleRef}
              className={`font-bold group-hover:text-primary ${
                isExpanded ? "text-xl" : "text-xl line-clamp-2"
              }`}
              title={instituteData.name}
            >
              {instituteData.name}
            </h2>
            <div className="relative">
              <p
                ref={descriptionRef}
                className={`text-sm text-muted-foreground ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
              >
                {instituteData.description}
              </p>
              {(isDescriptionClamped || isTitleClamped) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute -bottom-6 left-0 h-6 px-2 text-xs"
                  onClick={handleExpandClick}
                >
                  {isExpanded ? (
                    <span className="flex items-center gap-1">
                      Show less <ChevronUp className="h-3 w-3" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      Show more <ChevronDown className="h-3 w-3" />
                    </span>
                  )}
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 mt-6">
          <div className="grid gap-2">
            <div className="flex items-start gap-2">
              <MapPin
                className={`mt-1 h-4 w-4 shrink-0 transition-colors duration-300 ${
                  isHovered ? "text-primary" : "text-muted-foreground"
                }`}
              />
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
              <Phone
                className={`h-4 w-4 transition-colors duration-300 ${
                  isHovered ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <a
                href={`tel:${instituteData.phone}`}
                onClick={handleLinkClick}
                className="text-sm hover:text-primary hover:underline transition-colors duration-300"
              >
                {instituteData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe
                className={`h-4 w-4 transition-colors duration-300 ${
                  isHovered ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <a
                href={instituteData.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="text-sm hover:text-primary hover:underline transition-colors duration-300"
              >
                {new URL(instituteData.url).hostname}
              </a>
            </div>
          </div>
          {instituteData.courses.length > 0 && (
            <>
              <Separator />
              <div className="grid gap-2">
                <div className="flex items-start gap-2">
                  <School
                    className={`mt-1 h-4 w-4 transition-colors duration-300 ${
                      isHovered ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="font-medium">Available Courses</p>
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      {instituteData.courses.map((course, index) => (
                        <li key={index}>{course?.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default InstituteCard;
