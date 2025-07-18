'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  units: string;
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

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              The Results <br className="hidden md:block" />Speak for Themselves
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl" style={{ fontSize: '16px' }}>
              See what your peers are saying about their workflow transformation
            </p>
          </div>
          <Button className="self-start lg:self-auto">
            Start Free
          </Button>
        </div>
      </div>
      
      {/* Testimonials Slider - Full Width */}
      <div className="w-full overflow-hidden mb-12">
          <div className="relative">
            <div className="animate-testimonial-scroll flex gap-6">
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
                        <Image 
                          src={getImageSource(index, testimonial.name)}
                          alt={testimonial.name}
                          width={48}
                          height={48}
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
                        <Image 
                          src={getImageSource(index, testimonial.name)}
                          alt={testimonial.name}
                          width={48}
                          height={48}
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
    </section>
  )
} 
