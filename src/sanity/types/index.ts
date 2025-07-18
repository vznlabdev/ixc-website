import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { PortableTextBlock } from '@portabletext/types'

// Base Sanity document fields
interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Author type
export interface Author extends SanityDocument {
  _type: 'author'
  name: string
  slug: {
    current: string
  }
  image?: SanityImageSource & {
    alt?: string
  }
  bio?: string
  email?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

// Category type
export interface Category extends SanityDocument {
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
}

// News post type
export interface NewsPost extends SanityDocument {
  _type: 'newsPost'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content?: PortableTextBlock[]
  featuredImage?: SanityImageSource
  category: Category
  author: Author
  publishedAt: string
  tags?: string[]
  priority?: 'high' | 'medium' | 'low'
  featured?: boolean
} 