import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
}

export default function Hero({ 
  title = "Transform Your Business with incoXchange", 
  subtitle = "We provide innovative digital solutions to help your business thrive in the modern world. From web development to cloud solutions, we've got you covered.",
  ctaText = "Get Started Today",
  ctaUrl = "/contact"
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-800 dark:hover:bg-white">
              <Link href={ctaUrl}>
                {ctaText}
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
              <Link href="/services">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 