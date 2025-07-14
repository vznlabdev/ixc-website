import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ClipboardCheck, 
  Smartphone, 
  Camera, 
  MapPin, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  Wrench,
  Search,
  FileText,
  Infinity
} from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { pageContent } from '@/content/pages'

export default function FeaturesPage() {
  const featureIcons = [
    Infinity,
    ClipboardCheck,
    Smartphone,
    Camera,
    MapPin,
    MessageCircle,
    TrendingUp,
    Shield,
    Wrench,
    Search,
    FileText
  ];



  return (
    <div>
      <PageHeader 
        title={pageContent.features.header.title}
        subtitle={pageContent.features.header.subtitle}
        primaryButtonText={pageContent.features.header.primaryButtonText}
        primaryButtonUrl={pageContent.features.header.primaryButtonUrl}
        secondaryButtonText={pageContent.features.header.secondaryButtonText}
        secondaryButtonUrl={pageContent.features.header.secondaryButtonUrl}
      />

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Add the new card as the first card */}
            <Card 
              key="instant-payments" 
              className="h-80 hover:shadow-md transition-shadow flex flex-col bg-blue-700"
            >
              <CardHeader className="pb-3">
                <div className="mb-2">
                  <Infinity className="w-8 h-8 text-blue-50" />
                </div>
                <CardTitle className="text-base font-medium text-blue-50" style={{ fontSize: '1.5rem' }}>
                  Instant Payments.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex items-end">
                <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                  Send contractor payouts the same day without delays.
                </p>
              </CardContent>
            </Card>
            {/* Render the rest of the cards */}
            {pageContent.features.cards.map((feature, index) => {
              const IconComponent = featureIcons[index + 1];
              return (
                <Card 
                  key={index} 
                  className="h-80 hover:shadow-md transition-shadow flex flex-col bg-blue-700"
                >
                  <CardHeader className="pb-3">
                    <div className="mb-2">
                      <IconComponent className="w-8 h-8 text-blue-50" />
                    </div>
                    <CardTitle className="text-base font-medium text-blue-50" style={{ fontSize: '1.5rem' }}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex items-end">
                    <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection 
        title={pageContent.features.cta.title}
        titleBreak={pageContent.features.cta.titleBreak}
        description={pageContent.features.cta.description}
        buttonText={pageContent.features.cta.buttonText}
        buttonUrl={pageContent.features.cta.buttonUrl}
        smallText={pageContent.features.cta.smallText}
      />
    </div>
  )
} 