import { Card, CardContent } from "@/components/ui/card"

export function Statistics() {
  const stats = [
    {
      number: "50+",
      label: "Partner Universities",
    },
    {
      number: "10,000+",
      label: "Students Placed",
    },
    {
      number: "95%",
      label: "Success Rate",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ]

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-none">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold">{stat.number}</p>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

