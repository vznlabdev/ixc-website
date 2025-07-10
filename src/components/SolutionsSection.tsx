import { Button } from '@/components/ui/button'
import { FileCheck, Smartphone, Camera } from 'lucide-react'
import Link from 'next/link'

interface SolutionCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const solutionCards: SolutionCard[] = [
  {
    icon: FileCheck,
    title: "Professional Work Orders",
    description: "Create detailed work orders with photos, priorities, and deadlines. Your contractors get clear instructions every time."
  },
  {
    icon: Smartphone,
    title: "Instant Contractor Updates",
    description: "Contractors receive SMS notifications and respond through our mobile site. No apps to download, no friction."
  },
  {
    icon: Camera,
    title: "Automatic Documentation",
    description: "Before/after photos, timestamps, and GPS verification. Every job is fully documented for insurance and records."
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              One Platform.<br className="hidden md:block" /> Complete Control.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6 lg:mb-0" style={{ fontSize: '16px' }}>
              IncoXchange transforms contractor coordination from chaos to clarity.<br className="hidden md:block" /> No more guessing, no more lost information.
            </p>
            <div className="block lg:hidden">
              <Button 
                asChild 
                size="lg" 
                className="font-semibold px-10 py-5" 
                style={{ fontSize: '12px' }}
              >
                <Link href="/contact">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0 lg:ml-8">
            <Button 
              asChild 
              size="lg" 
              className="font-semibold px-10 py-5" 
              style={{ fontSize: '12px' }}
            >
              <Link href="/contact">
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionCards.map((card, index) => (
            <div key={index} className="text-left">
              <div className="mb-4">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-3 text-foreground" style={{ fontSize: '1.2rem' }}>
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 