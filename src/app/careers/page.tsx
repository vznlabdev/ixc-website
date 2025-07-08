import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Clock, Zap, Users, Heart } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { pageContent } from '@/content/pages'

export default function CareersPage() {
  return (
    <div>
      <PageHeader 
        title={pageContent.careers.header.title}
        subtitle={pageContent.careers.header.subtitle}
        primaryButtonText={pageContent.careers.header.primaryButtonText}
        primaryButtonUrl={pageContent.careers.header.primaryButtonUrl}
        secondaryButtonText={pageContent.careers.header.secondaryButtonText}
        secondaryButtonUrl={pageContent.careers.header.secondaryButtonUrl}
      />

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pageContent.careers.values.map((value, index) => {
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
      <section id="open-positions" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {pageContent.careers.positions.map((job, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <p className="text-primary font-medium">{job.department}</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button asChild>
                    <Link href="/contact">
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
} 