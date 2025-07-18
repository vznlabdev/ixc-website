export default function NewsCardSkeleton({ variant = 'horizontal' }: { variant?: 'horizontal' | 'vertical' }) {
  if (variant === 'vertical') {
    return (
      <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border animate-pulse">
        <div className="aspect-video bg-muted"></div>
        <div className="p-6 space-y-4">
          <div className="flex gap-4">
            <div className="h-4 w-24 bg-muted rounded"></div>
            <div className="h-4 w-20 bg-muted rounded"></div>
          </div>
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-5 w-20 bg-muted rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded-full"></div>
              <div className="h-6 w-16 bg-muted rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-8 border-b border-border last:border-b-0 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="aspect-video bg-muted rounded-lg"></div>
        <div className="md:col-span-2 space-y-4">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-muted rounded-full"></div>
            <div className="h-4 w-24 bg-muted rounded"></div>
            <div className="h-4 w-20 bg-muted rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
          <div className="h-5 w-28 bg-muted rounded"></div>
        </div>
      </div>
    </div>
  )
} 