import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageHeaderProps {
  title: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  showButtons?: boolean
}

export default function PageHeader({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  primaryButtonUrl = "/contact",
  secondaryButtonText = "View Demo", 
  secondaryButtonUrl = "/demo",
  showButtons = true
}: PageHeaderProps) {
  return (
    <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-row gap-3 md:gap-4">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href={primaryButtonUrl}>
                  {primaryButtonText}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href={secondaryButtonUrl}>
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 