import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const features = [
  'Unlimited work orders',
  'Invite 5 contractors', 
  'Photo documentation',
  'SMS notifications',
  'Mobile contractor access',
  'Basic analytics',
  'Email support'
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-background dark:bg-background mt-16 mb-16 md:mt-32 md:mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Sticky Heading */}
          <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Start Free. <br className="hidden md:block" />Upgrade When Ready.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-6" style={{ fontSize: '16px' }}>
              Try IncoXchange with your team and contractors. <br className="hidden md:block" />No credit card required.
            </p>
          </div>
          
          {/* Right Column - Pricing Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-sm">
            <CardHeader className="text-left pb-6">
              <CardTitle className="text-2xl font-medium text-foreground mb-2">
                Free Forever
              </CardTitle>
              <div className="text-5xl font-bold text-primary mb-2">
                $0
              </div>
              <p className="text-muted-foreground text-sm">
                Everything you need to get started
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-20" size="lg">
                Start Free Today
              </Button>
              
              <p className="text-center text-muted-foreground text-xs mt-4">
                Premium features coming 2025
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 