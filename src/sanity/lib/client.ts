import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../env'
import type { NewsPost, Category, Author } from '../types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Helper function to get news posts
export async function getNewsPosts(): Promise<NewsPost[]> {
  return await client.fetch(`*[_type == "newsPost"] | order(publishedAt desc){
    ...,
    category->{
      title,
      slug,
      description
    },
    author->{
      name,
      slug,
      image,
      bio
    }
  }`)
}

// Helper function to get a single news post
export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  return await client.fetch(`*[_type == "newsPost" && slug.current == $slug][0]{
    ...,
    category->{
      title,
      slug,
      description
    },
    author->{
      name,
      slug,
      image,
      bio,
      email,
      socialLinks
    }
  }`, { slug })
}

// Helper function to get featured news posts
export async function getFeaturedNewsPosts(): Promise<NewsPost[]> {
  return await client.fetch(`*[_type == "newsPost" && featured == true] | order(publishedAt desc){
    ...,
    category->{
      title,
      slug,
      description
    },
    author->{
      name,
      slug,
      image,
      bio
    }
  }`)
}

// Helper function to get news posts by category
export async function getNewsPostsByCategory(categorySlug: string): Promise<NewsPost[]> {
  return await client.fetch(`*[_type == "newsPost" && category->slug.current == $categorySlug] | order(publishedAt desc){
    ...,
    category->{
      title,
      slug,
      description
    },
    author->{
      name,
      slug,
      image,
      bio
    }
  }`, { categorySlug })
}

// Helper function to get categories
export async function getCategories(): Promise<Category[]> {
  return await client.fetch(`*[_type == "category"] | order(title asc)`)
}

// Helper function to get authors
export async function getAuthors(): Promise<Author[]> {
  return await client.fetch(`*[_type == "author"] | order(name asc)`)
}

// Helper function to get a single author
export async function getAuthor(slug: string): Promise<Author | null> {
  return await client.fetch(`*[_type == "author" && slug.current == $slug][0]`, { slug })
}
