import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { Badge } from '@/components/ui/badge'
import { getNewsPost } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

interface NewsPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params
  const post = await getNewsPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/news" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
          
          <div className="space-y-4">
            {post.category && (
              <Link href={`/news/category/${post.category.slug.current}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  {post.category.title}
                </Badge>
              </Link>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <div className="flex gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {post.excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="aspect-video bg-muted">
          <Image
            src={urlForImage(post.featuredImage).width(1200).height(675).url()}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground">
          <PortableText 
            value={post.content || []} 
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-8">
                    <Image
                      src={urlForImage(value).width(800).height(450).url()}
                      alt={value.alt || 'Article image'}
                      width={800}
                      height={450}
                      className="rounded-lg"
                    />
                  </div>
                )
              }
            }}
          />
        </div>
      </div>
    </div>
  )
} 