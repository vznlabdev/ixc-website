import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import { Check } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { pricingContent } from '@/content/pricing'

export default function PricingPage() {
  return (
    <div>
      <PageHeader 
        title={pricingContent.header.title}
        subtitle={pricingContent.header.subtitle}
        primaryButtonText={pricingContent.header.primaryButtonText}
        primaryButtonUrl={pricingContent.header.primaryButtonUrl}
      />

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.plans.map((plan, index) => (
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
                  
                  <LinkButton 
                    href={plan.buttonUrl}
                    className="w-full" 
                    size="lg"
                    variant={plan.name === 'Enterprise' ? 'outline' : 'default'}
                  >
                    {plan.buttonText}
                  </LinkButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqData={pricingContent.faq} />

      <CTASection 
        title={pricingContent.cta.title}
        description={pricingContent.cta.description}
        buttonText={pricingContent.cta.buttonText}
        buttonUrl={pricingContent.cta.buttonUrl}
        smallText={pricingContent.cta.smallText}
      />
    </div>
  )
} 
