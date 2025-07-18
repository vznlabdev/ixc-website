import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { urlForImage } from '@/sanity/lib/image'
import type { NewsPost } from '@/sanity'

interface NewsCardProps {
  article: NewsPost
  variant?: 'horizontal' | 'vertical'
}

export default function NewsCard({ article, variant = 'horizontal' }: NewsCardProps) {
  if (variant === 'vertical') {
    return (
      <article className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
        <Link href={`/news/${article.slug.current}`}>
          <div className="aspect-video bg-muted">
            {article.featuredImage ? (
              <Image
                src={urlForImage(article.featuredImage).width(600).height(338).url()}
                alt={article.title}
                width={600}
                height={338}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
        </Link>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            {article.author && <span>by {article.author.name}</span>}
          </div>
          
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            <Link href={`/news/${article.slug.current}`} className="hover:text-primary">
              {article.title}
            </Link>
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <Link 
              href={`/news/${article.slug.current}`} 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Read more
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
            
            {article.tags && article.tags.length > 0 && (
              <div className="flex gap-1">
                {article.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {article.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{article.tags.length - 2}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    )
  }

  // Horizontal variant
  return (
    <article className="pb-8 border-b border-border last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article Image */}
        <Link href={`/news/${article.slug.current}`} className="block">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
            {article.featuredImage ? (
              <Image 
                src={urlForImage(article.featuredImage).width(800).height(450).url()} 
                alt={article.title} 
                width={800} 
                height={450} 
                className="object-cover w-full h-full" 
              />
            ) : (
              <Image src="/blog-banner-default.jpg" alt="Default Banner" width={800} height={450} className="object-cover w-full h-full" />
            )}
          </div>
        </Link>
        {/* Article Content */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            <Link href={`/news/${article.slug.current}`} className="hover:text-primary">
              {article.title}
            </Link>
          </h3>
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            {article.category && (
              <Link href={`/news/category/${article.category.slug.current}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                                      {article.category.title}
                </Badge>
              </Link>
            )}
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            {article.author && <span>by {article.author.name}</span>}
          </div>
          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
          <Link href={`/news/${article.slug.current}`} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            Read Article
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  )
} 