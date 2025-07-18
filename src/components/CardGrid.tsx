import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { LucideIcon } from 'lucide-react'

export interface CardItem {
  title: string
  description?: string
  icon?: LucideIcon
  content?: React.ReactNode
  className?: string
}

interface CardGridProps {
  items: CardItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
  cardClassName?: string
}

export default function CardGrid({
  items,
  columns = 3,
  className,
  cardClassName
}: CardGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={cn(
      "grid gap-8",
      gridCols[columns],
      className
    )}>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <Card key={index} className={cn("shadow-sm", cardClassName, item.className)}>
            <CardHeader>
              {Icon && (
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              )}
              <CardTitle className="text-xl">{item.title}</CardTitle>
              {item.description && (
                <CardDescription>{item.description}</CardDescription>
              )}
            </CardHeader>
            {item.content && (
              <CardContent>
                {item.content}
              </CardContent>
            )}
          </Card>
        )
      })}
    </div>
  )
} 
