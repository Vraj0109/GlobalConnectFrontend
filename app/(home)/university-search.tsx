"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UniversitySearch() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect University</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our advanced filters to find universities that match your preferences
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Moscow</SelectItem>
                      <SelectItem value="saint-petersburg">Saint Petersburg</SelectItem>
                      <SelectItem value="kazan">Kazan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mbbs">MBBS</SelectItem>
                      <SelectItem value="md">MD</SelectItem>
                      <SelectItem value="dentistry">Dentistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Language of Instruction</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="russian">Russian</SelectItem>
                      <SelectItem value="bilingual">Bilingual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Annual Tuition Fee Range (₹)</Label>
                  <div className="pt-6">
                    <Slider defaultValue={[200000]} max={1000000} step={50000} className="mb-6" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹2L</span>
                      <span>₹10L</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Years</SelectItem>
                      <SelectItem value="5">5 Years</SelectItem>
                      <SelectItem value="6">6 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full mt-6">Search Universities</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

