import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Take the first step towards your medical career in Russia. Our team is here to guide you through every step.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Browse Universities</Button>
          <Button size="lg" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}

