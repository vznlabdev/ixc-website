import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const stepCards: StepCard[] = [
  {
    number: "1",
    title: "Create Work Order",
    description: "Select property, describe the issue, add photos, set priority. Takes 30 seconds with templates."
  },
  {
    number: "2",
    title: "Contractor Responds",
    description: "SMS notification sent instantly. Contractor accepts job and provides timeline through mobile site."
  },
  {
    number: "3",
    title: "Work Gets Done",
    description: "Real-time status updates and progress photos. You always know what's happening."
  },
  {
    number: "4",
    title: "Complete Documentation",
    description: "Before/after photos, completion notes, and digital records. Perfect for insurance and tenant relations."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl" style={{ fontSize: '16px' }}>
              From problem to completion in 4 easy steps.<br className="hidden md:block" /> Your contractors will actually use this.
            </p>
          </div>
          <Button className="self-start lg:self-auto">
            Get Started
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepCards.map((step, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                </div>
                <CardTitle className="text-base font-medium text-foreground" style={{ fontSize: '1.2rem' }}>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 