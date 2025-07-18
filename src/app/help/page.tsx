import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Search, Book, MessageCircle, Video, FileText, ArrowRight } from 'lucide-react'

export default function HelpPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Help Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to your questions and get the most out of IncoXchange with our comprehensive help resources.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles, guides, and FAQs..."
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Getting Started",
                description: "Learn the basics and set up your first project",
                articles: 12
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Step-by-step video guides for key features",
                articles: 8
              },
              {
                icon: FileText,
                title: "User Guides",
                description: "Detailed documentation for all features",
                articles: 24
              },
              {
                icon: MessageCircle,
                title: "Troubleshooting",
                description: "Solutions to common issues and problems",
                articles: 16
              },
              {
                icon: Book,
                title: "Best Practices",
                description: "Tips and tricks from our experts",
                articles: 10
              },
              {
                icon: FileText,
                title: "API Documentation",
                description: "Technical documentation for developers",
                articles: 20
              }
            ].map((category, i) => (
              <Card key={i} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.articles} articles
                    </span>
                    <Button variant="ghost" size="sm" className="p-0">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "How to Create Your First Project",
                category: "Getting Started",
                readTime: "5 min read"
              },
              {
                title: "Setting Up Team Collaboration",
                category: "User Guides",
                readTime: "8 min read"
              },
              {
                title: "Understanding Workflow Management",
                category: "Best Practices",
                readTime: "6 min read"
              },
              {
                title: "Troubleshooting Common Issues",
                category: "Troubleshooting",
                readTime: "4 min read"
              },
              {
                title: "Advanced Reporting Features",
                category: "User Guides",
                readTime: "10 min read"
              },
              {
                title: "API Getting Started Guide",
                category: "API Documentation",
                readTime: "12 min read"
              }
            ].map((article, i) => (
              <Card key={i} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {article.category}
                    </div>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground">
                              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Live Chat</CardTitle>
                <CardDescription>
                  Get instant help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Start Chat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Submit a Ticket</CardTitle>
                <CardDescription>
                  Send us a detailed message about your issue
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact">
                    Create Ticket
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
