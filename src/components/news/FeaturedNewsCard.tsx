import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { urlForImage } from '@/sanity/lib/image'
import type { NewsPost } from '@/sanity'

interface FeaturedNewsCardProps {
  post: NewsPost
}

export default function FeaturedNewsCard({ post }: FeaturedNewsCardProps) {
  return (
    <div className="mb-12 pb-8 border-b border-border">
      {/* Featured News Banner Image */}
      <Link href={`/news/${post.slug.current}`} className="block">
        <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
          {post.featuredImage ? (
            <Image 
              src={urlForImage(post.featuredImage).width(800).height(450).url()} 
              alt={post.title} 
              width={800} 
              height={450} 
              className="object-cover w-full h-full" 
            />
          ) : (
            <Image src="/blog-banner-default.jpg" alt="Default Banner" width={800} height={450} className="object-cover w-full h-full" />
          )}
        </div>
      </Link>
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        {post.title}
      </h3>
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        {post.category && (
          <Link href={`/news/category/${post.category.slug.current}`}>
            <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
              {post.category.title}
            </Badge>
          </Link>
        )}
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        {post.author && <span>by {post.author.name}</span>}
      </div>
      <p className="text-muted-foreground mb-6">
        {post.excerpt}
      </p>
      <Link href={`/news/${post.slug.current}`} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
        Read Article
        <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </div>
  )
} 