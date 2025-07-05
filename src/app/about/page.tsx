import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Target, Heart, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              About IncoXchange
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We&apos;re on a mission to transform how teams manage their workflows and collaborate on projects. 
              Our platform empowers organizations to work smarter, not harder.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/careers">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every team deserves access to powerful workflow management tools that make 
                their work more efficient and enjoyable. Our mission is to eliminate the chaos of project 
                management and replace it with clarity, collaboration, and success.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2020, IncoXchange has grown from a simple idea into a comprehensive platform 
                trusted by thousands of teams worldwide. We&apos;re committed to continuous innovation and 
                putting our users first in everything we do.
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/features">
                  Explore Features
                </Link>
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Mission Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "User-Centric",
                description: "Every decision we make is driven by what's best for our users and their success."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in workflow management."
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in everything we do."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in our product, service, and support at every level."
              }
            ].map((value, i) => (
              <Card key={i} className="shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate individuals behind IncoXchange who are dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "Serial entrepreneur with 15+ years in tech and project management."
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Former Google engineer passionate about building scalable solutions."
              },
              {
                name: "Lisa Rodriguez",
                role: "Head of Product",
                bio: "Product visionary with experience at leading SaaS companies."
              },
              {
                name: "David Kim",
                role: "Lead Designer",
                bio: "Award-winning designer focused on user experience and interface design."
              },
              {
                name: "Jennifer Brown",
                role: "VP of Engineering",
                bio: "Engineering leader with expertise in distributed systems and DevOps."
              },
              {
                name: "Robert Wilson",
                role: "Head of Customer Success",
                bio: "Customer advocate dedicated to ensuring user satisfaction and growth."
              }
            ].map((member, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-medium text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "50,000+",
                label: "Active Users"
              },
              {
                number: "1M+",
                label: "Projects Managed"
              },
              {
                number: "99.9%",
                label: "Uptime"
              },
              {
                number: "24/7",
                label: "Support Available"
              }
            ].map((stat, i) => (
              <Card key={i} className="shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border bg-card">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-medium mb-4">Ready to Transform Your Workflow?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of teams who have already discovered the power of IncoXchange. 
                  Start your free trial today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="font-semibold px-10">
                    <Link href="/contact">
                      Start Free Trial
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-semibold px-10">
                    <Link href="/demo">
                      Book a Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 