import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, ArrowRight, Zap, Bug, Star } from 'lucide-react'

export default function UpdatesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Latest Updates<br className="hidden md:block" /> & Releases
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay up to date with the latest features, improvements, and bug fixes in IncoXchange.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Get Notified
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="#changelog">
                  View Changelog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Latest Release</h2>
            <p className="text-lg text-muted-foreground">
              Check out what's new in our most recent update
            </p>
          </div>
          
          <Card className="shadow-lg border bg-card max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Version 2.1.0</CardTitle>
                  <CardDescription className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Released on January 15, 2025
                  </CardDescription>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Latest
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-semibold">New Features</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Enhanced dashboard analytics</li>
                    <li>• Team collaboration tools</li>
                    <li>• Advanced reporting features</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-blue-600">
                    <Zap className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Improvements</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 40% faster loading times</li>
                    <li>• Improved mobile experience</li>
                    <li>• Enhanced security measures</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-orange-600">
                    <Bug className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Bug Fixes</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fixed notification issues</li>
                    <li>• Resolved sync problems</li>
                    <li>• UI/UX improvements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changelog */}
      <section id="changelog" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Changelog</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                version: "2.0.5",
                date: "December 20, 2024",
                type: "Bug Fix",
                description: "Fixed critical issues with data synchronization and improved overall stability."
              },
              {
                version: "2.0.0",
                date: "November 15, 2024",
                type: "Major Release",
                description: "Complete redesign of the user interface with new workflow management features."
              },
              {
                version: "1.9.8",
                date: "October 30, 2024",
                type: "Feature Update",
                description: "Added new reporting dashboard and enhanced team collaboration tools."
              },
              {
                version: "1.9.5",
                date: "October 10, 2024",
                type: "Security Update",
                description: "Enhanced security measures and improved data protection protocols."
              }
            ].map((update, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Version {update.version}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {update.date}
                      </CardDescription>
                    </div>
                    <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {update.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{update.description}</p>
                  <Button variant="ghost" size="sm" className="mt-4 p-0">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border bg-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-medium mb-4">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get notified about new features and updates as soon as they're released.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-semibold px-10">
                  <Link href="/contact">
                    Subscribe to Updates
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold px-10">
                  <Link href="/contact">
                    Join Beta Program
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 