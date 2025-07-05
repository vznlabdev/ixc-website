import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Play, Calendar, Clock, Users } from 'lucide-react'

export default function DemoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              See IncoXchange<br className="hidden md:block" /> in Action
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how IncoXchange transforms your workflow management through interactive demos and live sessions.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Book Live Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="#interactive-demo">
                  Try Interactive Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Choose Your Demo Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Live Demo */}
            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Live Demo Session</CardTitle>
                <CardDescription>
                  One-on-one personalized demo with our product experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>30-minute session</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <span>Available on your schedule</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span>Tailored to your needs</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Schedule Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Demo */}
            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Interactive Demo</CardTitle>
                <CardDescription>
                  Explore the platform on your own with our guided tour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>Self-paced experience</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Play className="h-5 w-5 text-primary mr-3" />
                    <span>Available 24/7</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span>No registration required</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="#interactive-demo">
                    Start Interactive Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="interactive-demo" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Interactive Demo</h2>
            <p className="text-lg text-muted-foreground">
              Click through the platform and experience the key features firsthand
            </p>
          </div>
          
          <Card className="shadow-lg border bg-card">
            <CardContent className="p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Demo Interface</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive demo content will be loaded here
                  </p>
                  <Button>
                    Launch Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">What You'll Learn</h2>
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