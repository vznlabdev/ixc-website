import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import HeroSection from '@/components/HeroSection'
import { ROUTES } from '@/lib/routes'
import { Play, Calendar, Clock, Users } from 'lucide-react'

export default function DemoPage() {
  return (
    <div>
      <HeroSection 
        title={<>See IncoXchange<br className="hidden md:block" /> in Action</>}
        subtitle="Discover how IncoXchange transforms your workflow management through interactive demos and live sessions."
        primaryButton={{ text: "Book Live Demo", href: ROUTES.CONTACT }}
        secondaryButton={{ text: "Try Interactive Demo", href: "#interactive-demo" }}
      />

      {/* Demo Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Interactive Demo */}
            <Card id="interactive-demo" className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Interactive Demo</CardTitle>
                <CardDescription>
                  Try IncoXchange instantly with our interactive walkthrough
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">No registration required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">See real features in action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">5-minute guided tour</span>
                  </li>
                </ul>
                <LinkButton href="#" className="w-full">
                  Start Interactive Demo
                </LinkButton>
              </CardContent>
            </Card>

            {/* Live Demo */}
            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Live Demo</CardTitle>
                <CardDescription>
                  Get a personalized walkthrough with our team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">30-minute screen share</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">Q&A with product expert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-muted-foreground">Customized to your needs</span>
                  </li>
                </ul>
                <LinkButton href={ROUTES.CONTACT} className="w-full">
                  Schedule Live Demo
                </LinkButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">What the Demo Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Quick Setup",
                description: "See how fast you can get started with your first work order"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Learn how contractors and property managers work together"
              },
              {
                icon: Play,
                title: "Key Features",
                description: "Explore SMS notifications, photo documentation, and more"
              },
              {
                icon: Calendar,
                title: "Real Workflows",
                description: "Watch actual work order scenarios from start to finish"
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Workflow Management",
                description: "See how to streamline your project workflows from start to finish"
              },
              {
                title: "Team Collaboration",
                description: "Learn how teams work together effectively using our platform"
              },
              {
                title: "Reporting & Analytics",
                description: "Discover powerful insights and reporting capabilities"
              }
            ].map((item, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 