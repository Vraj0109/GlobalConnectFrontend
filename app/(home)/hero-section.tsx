"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/medical-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 min-h-[600px] flex flex-col items-center justify-center text-center text-white space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          Your Journey to Medical Education in Russia Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          Connect with top Russian medical universities and track your application process seamlessly
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mt-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              placeholder="Search universities, courses, or cities..."
              className="w-full pl-10 bg-white/95 border-0 h-12 text-black"
            />
          </div>
          <Button size="lg" className="h-12">
            Search Universities
          </Button>
        </div>
      </div>
    </section>
  )
}

