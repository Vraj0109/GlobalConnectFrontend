import { School, MessageSquare, FileSearch, CreditCard, Users2, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: School,
      title: "Extensive University Network",
      description: "Access to top Russian medical universities with detailed information and comparisons",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Chat directly with university representatives for quick responses to your queries",
    },
    {
      icon: FileSearch,
      title: "Application Tracking",
      description: "Real-time updates on your application status from submission to acceptance",
    },
    {
      icon: CreditCard,
      title: "Transparent Fees",
      description: "Clear breakdown of tuition fees, living costs, and other expenses",
    },
    {
      icon: Users2,
      title: "Student Community",
      description: "Connect with current students and alumni for authentic insights",
    },
    {
      icon: GraduationCap,
      title: "Course Guidance",
      description: "Expert guidance on course selection and admission requirements",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support throughout your medical education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

