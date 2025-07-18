import { PageHeader } from '@/components/layout'
import { getNewsPosts, getFeaturedNewsPosts, getCategories } from '@/sanity'
import { CategorySidebar, FeaturedNewsCard, NewsCard } from '@/components/news'

export default async function NewsPage() {
  const [newsPosts, featuredPosts, categories] = await Promise.all([
    getNewsPosts(),
    getFeaturedNewsPosts(),
    getCategories()
  ])

  const regularPosts = newsPosts.filter((post) => !post.featured)
  const featuredPost = featuredPosts[0]
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
            <CategorySidebar categories={categories} />

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <div className="prose prose-foreground max-w-none">
                {featuredPost && <FeaturedNewsCard post={featuredPost} />}
                <h2 className="text-2xl font-semibold mb-8 text-foreground">Recent Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((article, i) => (
                    <NewsCard key={i} article={article} variant="horizontal" />
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
