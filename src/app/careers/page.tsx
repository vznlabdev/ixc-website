import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import { MapPin, Clock, Zap, Users, Heart } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import { careersContent } from '@/content/careers'
import { ROUTES } from '@/lib/routes'

export default function CareersPage() {
  return (
    <div>
      <PageHeader 
        title={careersContent.header.title}
        subtitle={careersContent.header.subtitle}
        primaryButtonText={careersContent.header.primaryButtonText}
        secondaryButtonText={careersContent.header.secondaryButtonText}
      />

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {careersContent.values.map((value, index) => {
              const icons = [Zap, Users, Heart];
              const IconComponent = icons[index];
              
              return (
                <div key={index} className="text-left">
                  <div className="mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re always looking for talented people to join our team.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {careersContent.positions.map((position, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{position.department}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-3 sm:mt-0 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>
                  <LinkButton href={ROUTES.CONTACT} variant="outline">
                    Apply Now
                  </LinkButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We&apos;re always interested in meeting talented people. Send us your resume and let&apos;s talk about creating the perfect position for you.
          </p>
          <LinkButton href={ROUTES.CONTACT} size="lg">
            Send Resume
          </LinkButton>
        </div>
      </section>
    </div>
  )
} 
