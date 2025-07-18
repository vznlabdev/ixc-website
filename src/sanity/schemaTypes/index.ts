import { type SchemaTypeDefinition } from 'sanity'
import { newsPost } from '../schemas/newsPost'
import { category } from '../schemas/category'
import author from '../schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    newsPost,
    category,
    author
  ],
}

export const schemaTypes = [
  newsPost,
  category,
  author
]
