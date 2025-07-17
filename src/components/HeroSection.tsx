import { LinkButton } from '@/components/ui/link-button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string | React.ReactNode
  subtitle?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
  gradient?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
  gradient = false
}: HeroSectionProps) {
  return (
    <section className={cn(
      "pt-24 lg:pt-32 pb-16",
      gradient 
        ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 text-white"
        : "bg-background dark:bg-background",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight",
            gradient ? "text-white" : "text-foreground"
          )}>
            {title}
          </h1>
          {subtitle && (
            <p className={cn(
              "text-lg max-w-3xl mx-auto mb-8",
              gradient ? "text-white/90" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              {primaryButton && (
                <LinkButton 
                  href={primaryButton.href}
                  size="lg" 
                  className={cn(
                    "font-semibold px-6 py-5 md:px-10",
                    gradient && "bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-800 dark:hover:bg-white"
                  )}
                >
                  {primaryButton.text}
                </LinkButton>
              )}
              {secondaryButton && (
                <LinkButton 
                  href={secondaryButton.href}
                  size="lg" 
                  variant="outline" 
                  className={cn(
                    "font-semibold px-6 py-5 md:px-10",
                    gradient && "border-white text-white hover:bg-white/10"
                  )}
                >
                  {secondaryButton.text}
                </LinkButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 