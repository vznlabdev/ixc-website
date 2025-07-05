import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              IncoXchange Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay up to date with the latest insights, tips, and best practices for workflow management and team collaboration.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Featured Article</h2>
            <p className="text-lg text-muted-foreground">
              Don't miss our latest insights and updates
            </p>
          </div>
          
          <Card className="shadow-lg border bg-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Best Practices
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      January 10, 2025
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    10 Essential Workflow Management Tips for Growing Teams
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Discover the key strategies that successful teams use to streamline their workflows, 
                    improve collaboration, and boost productivity. Learn from real-world examples and 
                    actionable insights.
                  </p>
                  <Button asChild>
                    <Link href="#article-1">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Tag className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Featured Image</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Build an Effective Project Dashboard",
                excerpt: "Learn the essential elements of a project dashboard that keeps your team aligned and informed.",
                category: "Product Tips",
                date: "January 5, 2025",
                readTime: "6 min read"
              },
              {
                title: "The Future of Remote Team Collaboration",
                excerpt: "Explore emerging trends and tools that are shaping the future of remote work and collaboration.",
                category: "Industry Insights",
                date: "December 28, 2024",
                readTime: "8 min read"
              },
              {
                title: "Case Study: How TechCorp Improved Efficiency by 40%",
                excerpt: "Discover how TechCorp streamlined their workflow and achieved remarkable productivity gains.",
                category: "Case Studies",
                date: "December 20, 2024",
                readTime: "5 min read"
              },
              {
                title: "Top 5 Workflow Automation Mistakes to Avoid",
                excerpt: "Learn from common pitfalls and ensure your automation efforts drive real results.",
                category: "Best Practices",
                date: "December 15, 2024",
                readTime: "7 min read"
              },
              {
                title: "New Feature Spotlight: Advanced Reporting",
                excerpt: "Get an in-depth look at our latest reporting features and how they can benefit your team.",
                category: "Product Updates",
                date: "December 10, 2024",
                readTime: "4 min read"
              },
              {
                title: "Building a Culture of Transparency",
                excerpt: "Practical strategies for creating transparency and trust within your team and organization.",
                category: "Leadership",
                date: "December 5, 2024",
                readTime: "9 min read"
              }
            ].map((article, i) => (
              <Card key={i} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Tag className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {article.category}
                    </div>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
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

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Product Tips",
                count: 15,
                description: "Get the most out of IncoXchange"
              },
              {
                name: "Best Practices",
                count: 12,
                description: "Proven strategies for success"
              },
              {
                name: "Case Studies",
                count: 8,
                description: "Real customer success stories"
              },
              {
                name: "Industry Insights",
                count: 10,
                description: "Trends and analysis"
              }
            ].map((category, i) => (
              <Card key={i} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Tag className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-sm text-muted-foreground">
                    {category.count} articles
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border bg-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-medium mb-4">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest articles delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-semibold px-10">
                  <Link href="/contact">
                    Subscribe
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold px-10">
                  <Link href="/contact">
                    RSS Feed
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