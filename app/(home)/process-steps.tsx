import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, MessageCircle, School, CheckCircle } from "lucide-react"

export function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Submit Application",
      description: "Fill out the application form with your academic details and preferences",
    },
    {
      icon: MessageCircle,
      title: "Connect with Representatives",
      description: "Discuss your options with university representatives through our platform",
    },
    {
      icon: School,
      title: "University Selection",
      description: "Choose your preferred university and complete documentation",
    },
    {
      icon: CheckCircle,
      title: "Secure Admission",
      description: "Receive your acceptance letter and prepare for your journey",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple Application Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with your medical education journey in just a few steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-200" />
              )}
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

