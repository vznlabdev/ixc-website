'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NewsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('News page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto" />
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Oops! Something went wrong</h2>
          <p className="text-muted-foreground">
            We couldn&apos;t load the news articles. This might be a temporary issue.
          </p>
        </div>
        <div className="space-y-3">
          <Button onClick={reset} size="lg">
            Try again
          </Button>
          <p className="text-sm text-muted-foreground">
            If the problem persists, please contact support
          </p>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left bg-muted/50 p-4 rounded-lg">
            <summary className="cursor-pointer text-sm font-medium">Error details</summary>
            <pre className="mt-2 text-xs overflow-auto">
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
} 