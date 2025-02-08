import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Clock, HeadphonesIcon } from "lucide-react"

export function ChatSupport() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">24/7 Support Available</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant help from our team and university representatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Connect instantly with university representatives</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Get responses within 24 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">Personal assistance throughout your journey</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

