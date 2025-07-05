'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap, FileText, Activity, MessageSquare, TrendingUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: Zap,
    title: "Lightning-Fast Setup",
    description: "Add your properties and contractors in minutes. Start sending professional work orders immediately."
  },
  {
    icon: FileText,
    title: "Smart Templates",
    description: "Pre-built work order templates for plumbing, HVAC, electrical, and general maintenance. Just fill and send."
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    description: "See exactly where every job stands: Assigned → Accepted → In Progress → Complete. No more guessing."
  },
  {
    icon: MessageSquare,
    title: "Built-In Communication",
    description: "Message contractors directly about jobs. All communication stays organized and searchable."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track contractor response times, completion rates, and quality scores. Make data-driven decisions."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data stays private. Role-based access ensures only authorized people see sensitive information."
  }
];

const blueShades = [
  'bg-blue-400',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700',
  'bg-blue-800',
  'bg-blue-900'
];

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-background dark:bg-background mt-32 mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Sticky Heading */}
          <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Everything You Need<br className="hidden md:block" /> in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-6" style={{ fontSize: '16px' }}>
              Stop juggling multiple tools. IncoXchange handles your entire contractor workflow.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="font-semibold px-10 py-5" 
              style={{ fontSize: '12px' }}
            >
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="space-y-6">
            {featureCards.map((card, index) => (
                             <div
                 key={index}
                 ref={(el) => { cardRefs.current[index] = el; return; }}
                 data-index={index}
                 className={`transition-all duration-1000 ease-out ${
                   visibleCards.has(index) 
                     ? 'opacity-100 translate-y-0' 
                     : 'opacity-10 translate-y-12'
                 }`}
               >
                                                     <div className={`p-6 rounded-lg ${blueShades[index % blueShades.length]}`}>
                    <div className="mb-2">
                      <card.icon className="w-8 h-8 text-blue-50" />
                    </div>
                    <h3 className="text-base font-medium mb-3 text-blue-50" style={{ fontSize: '1.5rem' }}>
                      {card.title}
                    </h3>
                    <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                      {card.description}
                    </p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 