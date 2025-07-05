import Link from 'next/link'
import { Button } from '@/components/ui/button'
import InfiniteSlider from '@/components/InfiniteSlider'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

export default function Hero({ 
  title, 
  subtitle,
  ctaText = "Start Free",
  ctaUrl = "/contact",
  secondaryCtaText = "Watch Demo",
  secondaryCtaUrl = "#demo"
}: HeroProps) {
  return (
    <>
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              {title || (
                <>
                  Stop Managing Contractors<br className="hidden md:block" /> Through Text Messages
                </>
              )}
            </h1>
            <p className="mb-10 max-w-4xl text-muted-foreground leading-relaxed" style={{ fontSize: '16px' }}>
              {subtitle || (
                <>
                  Transform chaotic work orders into organized, professional workflows.<br className="hidden md:block" /> Get complete visibility of every repair, every time.
                </>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start" style={{ paddingBottom: '2rem' }}>
              <Button 
                asChild 
                size="lg" 
                className="font-semibold px-10 py-5" 
                style={{ fontSize: '12px' }}
              >
                <Link href={ctaUrl}>
                  {ctaText}
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="font-semibold px-10 py-5" 
                style={{ fontSize: '12px' }}
              >
                <Link href={secondaryCtaUrl}>
                  {secondaryCtaText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <InfiniteSlider />
    </>
  )
} 