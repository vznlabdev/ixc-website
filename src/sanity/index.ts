// Re-export all Sanity utilities from a single location
export {
  client,
  getNewsPosts,
  getNewsPost,
  getFeaturedNewsPosts,
  getNewsPostsByCategory,
  getCategories,
  getAuthors,
  getAuthor
} from './lib/client'

export { urlFor, urlForImage } from './lib/image'
export { sanityFetch, SanityLive } from './lib/live'
// Don't export schemaTypes from here as it causes client/server boundary issues

// Export types
export type { NewsPost, Category, Author } from './types' 