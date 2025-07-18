import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

// Hardcoded values as fallback when environment variables are not available
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wen4hn5c'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'incoXchange',
  projectId: projectId,
  dataset: dataset,
  basePath: '/sanity',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

