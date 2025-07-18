import PageHeader from '@/components/layout/PageHeader'
import NewsCardSkeleton from '@/components/news/NewsCardSkeleton'

export default function NewsLoading() {
  return (
    <div>
      <PageHeader 
        title="News"
        subtitle="Stay up to date with the latest updates, announcements, and industry news."
        showButtons={false}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sidebar Skeleton */}
            <aside className="w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="h-8 w-48 bg-muted rounded mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-4 border border-border rounded-lg animate-pulse">
                      <div className="h-5 w-32 bg-muted rounded mb-2"></div>
                      <div className="h-4 w-full bg-muted rounded mb-2"></div>
                      <div className="h-4 w-20 bg-muted rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content Skeleton */}
            <main className="flex-1 min-w-0">
              <div className="prose prose-foreground max-w-none">
                {/* Featured Post Skeleton */}
                <div className="mb-12 pb-8 border-b border-border animate-pulse">
                  <div className="aspect-video bg-muted rounded-lg mb-6"></div>
                  <div className="h-7 w-3/4 bg-muted rounded mb-4"></div>
                  <div className="flex gap-4 mb-4">
                    <div className="h-6 w-24 bg-muted rounded-full"></div>
                    <div className="h-5 w-24 bg-muted rounded"></div>
                    <div className="h-5 w-20 bg-muted rounded"></div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                  <div className="h-6 w-32 bg-muted rounded"></div>
                </div>
                
                <div className="h-8 w-48 bg-muted rounded mb-8 animate-pulse"></div>
                <div className="space-y-8">
                  {[1, 2, 3, 4].map((i) => (
                    <NewsCardSkeleton key={i} variant="horizontal" />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
} 