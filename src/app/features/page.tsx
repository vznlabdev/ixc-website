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
import { featuresContent } from '@/content/features'

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
        title={featuresContent.header.title}
        subtitle={featuresContent.header.subtitle}
        primaryButtonText={featuresContent.header.primaryButtonText}
        primaryButtonUrl={featuresContent.header.primaryButtonUrl}
        secondaryButtonText={featuresContent.header.secondaryButtonText}
        secondaryButtonUrl={featuresContent.header.secondaryButtonUrl}
      />

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-blue-600 border-0 shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl text-blue-50 text-center">
                All-In-One Platform Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-80 hover:shadow-md transition-shadow flex flex-col bg-blue-500 border-0">
                  <CardHeader className="pb-3">
                    <div className="mb-2">
                      <Infinity className="w-8 h-8 text-blue-50" />
                    </div>
                    <CardTitle className="text-2xl font-medium text-blue-50">
                      Unlimited
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex items-end">
                    <p className="text-blue-50 leading-relaxed text-sm">
                      Work orders. Properties. Contractors. No limits on the Free Plan. No fine print. Use IncoXchange forever.
                    </p>
                  </CardContent>
                </Card>

                {featuresContent.cards.map((feature, index) => {
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
                        <CardTitle className="text-2xl font-medium text-blue-50">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex-1 flex items-end">
                        <p className="text-blue-50 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection 
        title={featuresContent.cta.title}
        titleBreak={featuresContent.cta.titleBreak}
        description={featuresContent.cta.description}
        buttonText={featuresContent.cta.buttonText}
        buttonUrl={featuresContent.cta.buttonUrl}
        smallText={featuresContent.cta.smallText}
      />
    </div>
  )
} 