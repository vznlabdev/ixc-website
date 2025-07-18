import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Smartphone, Cloud, Users } from 'lucide-react'

const defaultServices = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: Code,
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "User-friendly", "App Store Ready"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    icon: Cloud,
    features: ["AWS/Azure/GCP", "Scalable", "Secure", "Cost-effective"]
  },
  {
    title: "Consulting",
    description: "Strategic technology consulting and digital transformation guidance",
    icon: Users,
    features: ["Strategy Planning", "Tech Audit", "Digital Transformation", "Best Practices"]
  }
]

interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

interface ServicesProps {
  services?: Service[]
}

export default function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business succeed in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 
