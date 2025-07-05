import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border bg-primary">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
                  Ready to End Contractor Chaos?
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl" style={{ fontSize: '16px' }}>
                  Join hundreds of property managers who&apos;ve<br className="hidden md:block" /> transformed their workflow with IncoXchange
                </p>
              </div>
              
              <div className="flex flex-col items-start md:items-end">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="font-semibold px-10 py-5 mb-2"
                >
                  <Link href="/contact">
                    Start Your Free Account
                  </Link>
                </Button>
                <p className="text-sm text-primary-foreground/80 text-left md:text-right">
                  Setup takes 5 minutes.<br className="hidden md:block" /> Your contractors will thank you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 