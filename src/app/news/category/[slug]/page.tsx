import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getNewsPostsByCategory, getCategories } from '@/sanity/lib/client'
import NewsCard from '@/components/news/NewsCard'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const [posts, categories] = await Promise.all([
    getNewsPostsByCategory(slug),
    getCategories()
  ])

  const currentCategory = categories.find((cat) => cat.slug.current === slug)

  if (!currentCategory) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/news" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
          
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              {currentCategory.title}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {currentCategory.title}
            </h1>
            
            {currentCategory.description && (
              <p className="text-lg text-muted-foreground">
                {currentCategory.description}
              </p>
            )}
            
            <p className="text-sm text-muted-foreground">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No articles found in this category.</p>
            <Link 
              href="/news" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-4"
            >
              Browse all news
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <NewsCard key={post._id} article={post} variant="vertical" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 