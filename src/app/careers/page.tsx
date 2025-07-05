import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react'

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Help us build the future of workflow management. Join a team of passionate individuals 
              who are committed to making work better for everyone.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="#open-positions">
                  View Open Positions
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Submit Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Why Join IncoXchange?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Meaningful Work",
                description: "Build products that make a real difference in how teams work and collaborate."
              },
              {
                icon: Zap,
                title: "Innovation First",
                description: "Work with cutting-edge technologies and push the boundaries of what's possible."
              },
              {
                icon: Users,
                title: "Great Team",
                description: "Join a diverse, talented team of individuals who support each other's growth."
              },
              {
                icon: Target,
                title: "Growth Opportunities",
                description: "Advance your career with mentorship, training, and new challenges."
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible hours, remote work options, and unlimited PTO to recharge."
              },
              {
                icon: Heart,
                title: "Comprehensive Benefits",
                description: "Health insurance, retirement plans, and professional development budgets."
              }
            ].map((benefit, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Senior Frontend Developer",
                department: "Engineering",
                location: "Remote / San Francisco",
                type: "Full-time",
                description: "Join our frontend team to build beautiful, intuitive user interfaces using React, TypeScript, and modern web technologies."
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Remote / New York",
                type: "Full-time",
                description: "Drive product strategy and execution for our core workflow management platform. Work closely with engineering and design teams."
              },
              {
                title: "DevOps Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
                description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure high availability and performance."
              },
              {
                title: "UX Designer",
                department: "Design",
                location: "Remote / Los Angeles",
                type: "Full-time",
                description: "Create exceptional user experiences through research, prototyping, and collaboration with product and engineering teams."
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "Remote",
                type: "Full-time",
                description: "Help our customers succeed with IncoXchange through onboarding, training, and ongoing support."
              },
              {
                title: "Marketing Manager",
                department: "Marketing",
                location: "Remote / Austin",
                type: "Full-time",
                description: "Drive growth through content marketing, demand generation, and partnership development."
              }
            ].map((job, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{job.department}</CardDescription>
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

      {/* Culture & Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Our Culture & Values</h2>
            <p className="text-lg text-muted-foreground">
              We believe in creating an environment where everyone can do their best work
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">What We Believe In</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Diversity & Inclusion</h4>
                    <p className="text-muted-foreground">We celebrate different perspectives and backgrounds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Continuous Learning</h4>
                    <p className="text-muted-foreground">We invest in our team's growth and development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Collaboration</h4>
                    <p className="text-muted-foreground">We work together to achieve common goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Customer Focus</h4>
                    <p className="text-muted-foreground">Everything we do is centered around our customers' success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Team Culture Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Submit your application and resume through our careers page"
              },
              {
                step: "2",
                title: "Screen",
                description: "Initial phone or video call with our recruiting team"
              },
              {
                step: "3",
                title: "Interview",
                description: "Technical and cultural fit interviews with team members"
              },
              {
                step: "4",
                title: "Decision",
                description: "Final decision and offer, followed by onboarding"
              }
            ].map((step, i) => (
              <Card key={i} className="shadow-sm text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border bg-card">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-medium mb-4">Ready to Join Us?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Don't see a position that matches your skills? We're always looking for talented individuals. 
                  Send us your resume and let's talk about how you can contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="font-semibold px-10">
                    <Link href="/contact">
                      Send Resume
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-semibold px-10">
                    <Link href="/about">
                      Learn More About Us
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