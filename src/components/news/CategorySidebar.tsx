import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/sanity'

interface CategorySidebarProps {
  categories: Category[]
  currentCategory?: string
}

export default function CategorySidebar({ categories, currentCategory }: CategorySidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h2 className="text-xl font-semibold mb-6 text-foreground">Browse by Category</h2>
        <div className="space-y-4">
          {categories.map((category, i) => (
            <div 
              key={i} 
              className={`p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors ${
                currentCategory === category.slug.current ? 'bg-muted/50' : ''
              }`}
            >
              <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
              <div className="flex items-center justify-between">
                <Link 
                  href={`/news/category/${category.slug.current}`} 
                  className="text-primary hover:text-primary/80"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
} 