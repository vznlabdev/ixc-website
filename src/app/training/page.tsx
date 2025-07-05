import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Play, Clock, Users, Award, BookOpen, CheckCircle } from 'lucide-react'

export default function TrainingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Training & Certification
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Master IncoXchange with our comprehensive training programs. From basics to advanced features, 
              we'll help you and your team become workflow management experts.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Start Training
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="#courses">
                  Browse Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner",
                description: "Perfect for new users getting started",
                duration: "2-4 hours",
                format: "Self-paced online",
                price: "Free",
                features: [
                  "Platform overview",
                  "Basic features",
                  "First project setup",
                  "User interface tour"
                ]
              },
              {
                title: "Advanced",
                description: "For power users and team leaders",
                duration: "1-2 days",
                format: "Live instructor-led",
                price: "$299",
                features: [
                  "Advanced workflows",
                  "Team management",
                  "Custom integrations",
                  "Automation setup",
                  "Reporting & analytics"
                ]
              },
              {
                title: "Admin Certification",
                description: "Comprehensive program for administrators",
                duration: "3-5 days",
                format: "Blended learning",
                price: "$599",
                features: [
                  "System administration",
                  "User management",
                  "Security configuration",
                  "API implementation",
                  "Performance optimization",
                  "Certification exam"
                ]
              }
            ].map((program, i) => (
              <Card key={i} className={`shadow-sm ${i === 1 ? 'border-2 border-primary' : ''}`}>
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{program.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-5 w-5 mr-3" />
                      <span>{program.format}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Enroll Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Library */}
      <section id="courses" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Course Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started with IncoXchange",
                duration: "45 min",
                level: "Beginner",
                format: "Video"
              },
              {
                title: "Project Management Fundamentals",
                duration: "1.5 hours",
                level: "Beginner",
                format: "Interactive"
              },
              {
                title: "Advanced Workflow Design",
                duration: "2 hours",
                level: "Advanced",
                format: "Video + Exercise"
              },
              {
                title: "Team Collaboration Best Practices",
                duration: "1 hour",
                level: "Intermediate",
                format: "Video"
              },
              {
                title: "API Integration Guide",
                duration: "3 hours",
                level: "Advanced",
                format: "Hands-on"
              },
              {
                title: "Reporting and Analytics",
                duration: "1.5 hours",
                level: "Intermediate",
                format: "Interactive"
              }
            ].map((course, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.format}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {course.level}
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">
                      Start Course
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Get Certified</h2>
            <p className="text-lg text-muted-foreground">
              Validate your expertise with official IncoXchange certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">User Certification</CardTitle>
                <CardDescription>
                  Demonstrate proficiency in using IncoXchange for project management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Platform mastery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Best practices knowledge</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Digital badge</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get Certified
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Admin Certification</CardTitle>
                <CardDescription>
                  Advanced certification for system administrators and IT professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">System administration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Security configuration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Official certificate</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get Certified
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 