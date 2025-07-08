import PageHeader from '@/components/PageHeader'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div>
      <PageHeader 
        title="IncoXchange Blog"
        subtitle="Stay up to date with the latest insights, tips, and best practices for workflow management and team collaboration."
        showButtons={false}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            
            {/* Sticky Left Sidebar for Categories */}
            <aside className="w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Browse by Category</h2>
                <div className="space-y-4">
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
                    <div key={i} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{category.count} articles</span>
                        <Link href={`#category-${category.name.toLowerCase().replace(' ', '-')}`} className="text-primary hover:text-primary/80">
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <div className="prose prose-foreground max-w-none">
                
                <div className="mb-12 pb-8 border-b border-border">
                  {/* Blog Banner Image */}
                  <Link href="#article-1" className="block">
                    <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
                      <img src="/blog-banner-default.jpg" alt="Blog Banner" className="object-cover w-full h-full" />
                    </div>
                  </Link>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    10 Essential Workflow Management Tips for Growing Teams
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <Link href="#category-best-practices">
                      <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">Best Practices</Badge>
                    </Link>
                    <span>January 10, 2025</span>
                    <span>6 min read</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Discover the key strategies that successful teams use to streamline their workflows, 
                    improve collaboration, and boost productivity. Learn from real-world examples and 
                    actionable insights that you can implement today.
                  </p>
                  <Link href="#article-1" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <h2 className="text-2xl font-semibold mb-8 text-foreground">Recent Articles</h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "How to Build an Effective Project Dashboard",
                      excerpt: "Learn the essential elements of a project dashboard that keeps your team aligned and informed throughout every stage of your projects.",
                      category: "Product Tips",
                      date: "January 5, 2025",
                      readTime: "6 min read"
                    },
                    {
                      title: "The Future of Remote Team Collaboration",
                      excerpt: "Explore emerging trends and tools that are shaping the future of remote work and collaboration in the post-pandemic era.",
                      category: "Industry Insights",
                      date: "December 28, 2024",
                      readTime: "8 min read"
                    },
                    {
                      title: "Case Study: How TechCorp Improved Efficiency by 40%",
                      excerpt: "Discover how TechCorp streamlined their workflow and achieved remarkable productivity gains using modern workflow management principles.",
                      category: "Case Studies",
                      date: "December 20, 2024",
                      readTime: "5 min read"
                    },
                    {
                      title: "Top 5 Workflow Automation Mistakes to Avoid",
                      excerpt: "Learn from common pitfalls and ensure your automation efforts drive real results instead of creating more complexity.",
                      category: "Best Practices",
                      date: "December 15, 2024",
                      readTime: "7 min read"
                    },
                    {
                      title: "New Feature Spotlight: Advanced Reporting",
                      excerpt: "Get an in-depth look at our latest reporting features and how they can provide better insights for your team's performance.",
                      category: "Product Updates",
                      date: "December 10, 2024",
                      readTime: "4 min read"
                    },
                    {
                      title: "Building a Culture of Transparency",
                      excerpt: "Practical strategies for creating transparency and trust within your team and organization, leading to better outcomes.",
                      category: "Leadership",
                      date: "December 5, 2024",
                      readTime: "9 min read"
                    }
                  ].map((article, i) => (
                    <article key={i} className="pb-8 border-b border-border last:border-b-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Article Image */}
                        <Link href={`#article-${i + 2}`} className="block">
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
                            <img src="/blog-banner-default.jpg" alt="Article Banner" className="object-cover w-full h-full" />
                          </div>
                        </Link>
                        
                        {/* Article Content */}
                        <div className="md:col-span-2">
                          <h3 className="text-lg font-semibold mb-3 text-foreground">{article.title}</h3>
                          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <Link href={`#category-${article.category.toLowerCase().replace(' ', '-')}`}>
                              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">{article.category}</Badge>
                            </Link>
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                          <Link href={`#article-${i + 2}`} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                            Read Article
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  )
} 