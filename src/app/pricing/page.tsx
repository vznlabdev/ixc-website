import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { pageContent } from '@/content/pages'

export default function PricingPage() {
  return (
    <div>
      <PageHeader 
        title={pageContent.pricing.header.title}
        subtitle={pageContent.pricing.header.subtitle}
        primaryButtonText={pageContent.pricing.header.primaryButtonText}
        primaryButtonUrl={pageContent.pricing.header.primaryButtonUrl}
        secondaryButtonText={pageContent.pricing.header.secondaryButtonText}
        secondaryButtonUrl={pageContent.pricing.header.secondaryButtonUrl}
      />

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.pricing.plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`shadow-sm relative flex flex-col h-full ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-left pb-6">
                  <CardTitle className="text-2xl font-medium text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full mt-auto" 
                    size="lg"
                    variant={plan.name === 'Enterprise' ? 'outline' : 'default'}
                  >
                    <Link href={plan.buttonUrl}>
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqData={pageContent.pricing.faq} />

      <CTASection 
        title={pageContent.pricing.cta.title}
        description={pageContent.pricing.cta.description}
        buttonText={pageContent.pricing.cta.buttonText}
        buttonUrl={pageContent.pricing.cta.buttonUrl}
        smallText={pageContent.pricing.cta.smallText}
      />
    </div>
  )
} 