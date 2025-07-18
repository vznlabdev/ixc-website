'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Suppress known React 19 + Sanity v3 warnings in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error
  console.error = (...args) => {
    const message = args[0]?.toString() || ''
    // Suppress the disableTransition prop warning
    if (message.includes('disableTransition')) {
      return
    }
    originalError.apply(console, args)
  }
}

export default function StudioWrapper() {
  return <NextStudio config={config} />
} 