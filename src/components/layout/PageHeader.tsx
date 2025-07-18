import { LinkButton } from '@/components/ui/link-button'
import { ROUTES } from '@/lib/routes'
import { cn } from '@/utils/cn'

interface PageHeaderProps {
  title: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string 
  secondaryButtonUrl?: string
  showButtons?: boolean
  lastUpdated?: string
  narrow?: boolean
}

export default function PageHeader({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  primaryButtonUrl = ROUTES.CONTACT,
  secondaryButtonText = "View Demo", 
  secondaryButtonUrl,
  showButtons = true,
  lastUpdated,
  narrow = false
}: PageHeaderProps) {
  return (
    <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
      <div className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-7xl"
      )}>
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className={cn(
              "text-lg text-muted-foreground mb-8",
              narrow ? "mb-6" : "max-w-3xl"
            )}>
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <div className="text-sm text-muted-foreground mb-8">
              Last updated: {lastUpdated}
            </div>
          )}
          {showButtons && !narrow && (
            <div className="flex flex-row gap-3 md:gap-4">
              <LinkButton 
                href={primaryButtonUrl}
                size="lg" 
                className="font-semibold px-6 py-5 md:px-10"
              >
                {primaryButtonText}
              </LinkButton>
              {secondaryButtonUrl && (
                <LinkButton 
                  href={secondaryButtonUrl}
                  size="lg" 
                  variant="outline" 
                  className="font-semibold px-6 py-5 md:px-10"
                >
                  {secondaryButtonText}
                </LinkButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 
