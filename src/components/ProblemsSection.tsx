import { Button } from '@/components/ui/button'
import { MessageSquareX, Camera, Eye, FileX } from 'lucide-react'
import Link from 'next/link'

interface ProblemCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    icon: MessageSquareX,
    title: "Text Message Chaos",
    description: "Work orders scattered across text threads, WhatsApp groups, and phone calls. Nothing is organized or trackable."
  },
  {
    icon: Camera,
    title: "No Photo Documentation",
    description: "Contractors say work is done, but you have no proof. Insurance claims get denied. Tenants complain."
  },
  {
    icon: Eye,
    title: "Zero Visibility",
                    description: "Is the contractor coming today? Did they finish? What actually got fixed? You&apos;re constantly playing phone tag."
  },
  {
    icon: FileX,
    title: "Lost Information",
    description: "Which contractor fixed the HVAC last time? When was that repair done? Critical maintenance history disappears."
  }
];

export default function ProblemsSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              The Property<br className="hidden md:block" /> Management Nightmare
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6 md:mb-0" style={{ fontSize: '16px' }}>
                              Every property manager knows this pain.<br className="hidden md:block" /> It&apos;s costing you time, money, and sanity.
            </p>
            <div className="block md:hidden">
              <Button 
                asChild 
                size="lg" 
                className="font-semibold px-10 py-5" 
                style={{ fontSize: '12px' }}
              >
                <Link href="/contact">
                  Start Free
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block flex-shrink-0 md:ml-8">
            <Button 
              asChild 
              size="lg" 
              className="font-semibold px-10 py-5" 
              style={{ fontSize: '12px' }}
            >
              <Link href="/contact">
                Start Free
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemCards.map((card, index) => (
            <div key={index} className="text-left">
              <div className="mb-4">
                <card.icon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
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