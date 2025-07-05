'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  units: string;
}

interface Metric {
  percentage: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I used to spend 2 hours a day just tracking down contractors. Now I know the status of every job at a glance. IncoXchange saved my sanity.",
    name: "Sarah Martinez",
    company: "Martinez Property Management",
    units: "127 units"
  },
  {
    quote: "Our insurance claims got so much easier with proper photo documentation. The tool paid for itself the first time we avoided a denied claim.",
    name: "Mike Chen",
    company: "Westside Rentals",
    units: "89 units"
  },
  {
    quote: "My contractors actually love it because they get clear instructions and can show off their work. Win-win for everyone.",
    name: "Lisa Rodriguez",
    company: "Rodriguez Properties",
    units: "156 units"
  },
  {
    quote: "Before IncoXchange, I was drowning in text messages and missed calls. Now everything is organized and nothing falls through the cracks.",
    name: "David Thompson",
    company: "Thompson Realty Group",
    units: "203 units"
  },
  {
    quote: "The SMS notifications are genius. My contractors respond 10x faster than when I used to email them work orders.",
    name: "Jennifer Walsh",
    company: "Coastal Properties",
    units: "78 units"
  },
  {
    quote: "I can finally prove to tenants that repairs are being handled properly. The photo timeline is worth its weight in gold.",
    name: "Robert Kim",
    company: "Urban Living Management",
    units: "145 units"
  },
  {
    quote: "My emergency response time went from hours to minutes. The priority system and instant alerts are game-changers.",
    name: "Maria Santos",
    company: "Santos Property Solutions",
    units: "92 units"
  },
  {
    quote: "The contractor performance tracking helped me identify my best workers. Now I know exactly who to call for each type of job.",
    name: "James Mitchell",
    company: "Mitchell Properties",
    units: "167 units"
  }
];

const metrics: Metric[] = [
  {
    percentage: "67%",
    description: "Faster job completion"
  },
  {
    percentage: "89%",
    description: "Better documentation"
  },
  {
    percentage: "45%",
    description: "Less time coordinating"
  },
  {
    percentage: "95%",
    description: "Contractor adoption rate"
  }
];

// Custom hook for animated counter
const useAnimatedCounter = (targetValue: number, duration: number = 1200) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!isVisible) {
      setCurrentValue(0);
      return;
    }
    
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(startValue + (targetValue - startValue) * easeOut);
      
      setCurrentValue(value);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [isVisible, targetValue, duration]);
  
  return { currentValue, setIsVisible };
};

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isIntersecting };
};

// Helper function to get the appropriate image source for testimonials
const getImageSource = (index: number, name: string) => {
  const firstName = name.split(' ')[0].toLowerCase();
  const localPhotos = ['sarah', 'mike', 'lisa', 'david', 'jennifer', 'robert', 'maria', 'james']; // All local photos available
  
  if (localPhotos.includes(firstName)) {
    return `/${firstName}.png`;
  }
  
  // Fallback (though all names should have local photos now)
  return `/${localPhotos[index % localPhotos.length]}.png`;
};

const getFallbackImageSource = (index: number) => {
  const fallbackPhotos = ['sarah', 'mike', 'lisa', 'david', 'jennifer', 'robert', 'maria', 'james'];
  return `/${fallbackPhotos[index % fallbackPhotos.length]}.png`;
};

// Animated metric component
const AnimatedMetric = ({ percentage, description, isVisible }: { percentage: string, description: string, isVisible: boolean }) => {
  const numericValue = parseInt(percentage.replace('%', ''));
  const counter = useAnimatedCounter(numericValue, 1200);
  
  useEffect(() => {
    counter.setIsVisible(isVisible);
  }, [isVisible, counter]);
  
  return (
    <div className="text-left">
      <div className="text-4xl md:text-5xl font-medium text-primary mb-2">
        {counter.currentValue}%
      </div>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </div>
  );
};

export default function TestimonialsSection() {
  const { ref: metricsRef, isIntersecting } = useIntersectionObserver(0.2);
  
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              The Results <br />Speak for Themselves
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl" style={{ fontSize: '16px' }}>
              See what your peers are saying about their workflow transformation
            </p>
          </div>
          <Button className="self-start md:self-auto">
            Start Free
          </Button>
        </div>
      </div>
      
      {/* Testimonials Slider - Full Width */}
      <div className="w-full overflow-hidden mb-12">
          <div className="relative">
            <div className="animate-infinite-scroll flex gap-6">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <Card key={`first-${index}`} className="flex-none w-[28rem] shadow-sm">
                  <CardContent className="px-6 py-0 flex flex-col h-full">
                    <div className="mb-2">
                      <Quote className="h-8 w-8 text-primary mb-2" />
                      <p className="text-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={getImageSource(index, testimonial.name)}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.currentTarget;
                            target.src = getFallbackImageSource(index);
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.company} ({testimonial.units})
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <Card key={`second-${index}`} className="flex-none w-[28rem] shadow-sm">
                  <CardContent className="px-6 py-0 flex flex-col h-full">
                    <div className="mb-2">
                      <Quote className="h-8 w-8 text-primary mb-2" />
                      <p className="text-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={getImageSource(index, testimonial.name)}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.currentTarget;
                            target.src = getFallbackImageSource(index);
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.company} ({testimonial.units})
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={metricsRef} className="flex flex-wrap gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              percentage={metric.percentage}
              description={metric.description}
              isVisible={isIntersecting}
            />
          ))}
        </div>
        <p className="text-white mt-8" style={{ fontSize: '14px' }}>
          Property managers using IncoXchange see immediate improvements
        </p>
      </div>
    </section>
  )
} 