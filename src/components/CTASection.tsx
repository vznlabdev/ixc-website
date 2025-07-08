import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface CTASectionProps {
  title?: string
  titleBreak?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  smallText?: string
}

export default function CTASection({
  title = "Ready to End Contractor Chaos?",
  titleBreak,
  description = "Join hundreds of property managers who've transformed their workflow with IncoXchange",
  buttonText = "Start Your Free Account",
  buttonUrl = "/contact",
  secondaryButtonText,
  secondaryButtonUrl,
  smallText = "Setup takes 5 minutes. Your contractors will thank you."
}: CTASectionProps) {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border bg-primary">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
                  {title}
                  {titleBreak && (
                    <>
                      <br className="hidden md:block" />
                      {titleBreak}
                    </>
                  )}
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl" style={{ fontSize: '16px' }}>
                  {description}
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-end">
                <div className="flex flex-col sm:flex-row gap-3 mb-2">
                  <Button 
                    asChild 
                    size="lg" 
                    variant="secondary"
                    className="font-semibold px-10 py-5"
                  >
                    <Link href={buttonUrl}>
                      {buttonText}
                    </Link>
                  </Button>
                  {secondaryButtonText && secondaryButtonUrl && (
                    <Button 
                      asChild 
                      size="lg" 
                      variant="ghost"
                      className="font-semibold px-10 py-5 text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/20 hover:border-primary-foreground/40"
                    >
                      <Link href={secondaryButtonUrl}>
                        {secondaryButtonText}
                      </Link>
                    </Button>
                  )}
                </div>
                <p className="text-sm text-primary-foreground/80 text-left md:text-right">
                  {smallText}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 