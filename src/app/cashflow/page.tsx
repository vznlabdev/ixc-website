"use client";
import React, { useState, useEffect, useRef } from 'react';
import CashflowSlider from './CashflowSlider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { Briefcase, Check, X, TrendingUp, PhoneCall, Smile, ListChecks, Quote, Zap, Wrench, Thermometer, Paintbrush, Hammer, Users, Leaf, CloudRain } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Image from 'next/image';

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const stepCards: StepCard[] = [
  {
    number: "1",
    title: "Submit Work",
    description: "Upload your invoice with job photos or change orders through our simple portal."
  },
  {
    number: "2", 
    title: "We Verify",
    description: "Our system confirms work completion with the property manager or job record."
  },
  {
    number: "3",
    title: "Get Paid",
    description: "Same day payout directly to your contractor's bank account or debit card. No waiting."
  }
];

const cashflowFaqData = [
  {
    question: "How much does it cost?",
    answer: "We charge a simple fee per capital amount. No setup fees, no monthly charges, no hidden costs. You only pay when you get paid."
  },
  {
    question: "How fast do I really get paid?",
    answer: "Once your work is verified, payments are typically processed within 24 hours. Most contractors receive funds the same day, often within hours of invoice submission."
  },
  {
    question: "What if the property manager disputes my work?",
    answer: "We have a built in dispute resolution process. Our team works with both parties to resolve issues quickly. In most cases, disputes are resolved within 24-48 hours with clear documentation."
  },
  {
    question: "Do I need to integrate with my existing software?",
    answer: "No integration required! Our platform works standalone or can integrate with popular property management software like Real Page for seamless workflows."
  }
];

function HowItWorksSection() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              How It Works
            </h2>
          </div>
          <Button className="self-start lg:self-auto">
            Learn More
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepCards.map((step, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                </div>
                <CardTitle className="text-base font-medium text-foreground" style={{ fontSize: '1.2rem' }}>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HiddenCostSection() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Global mouse move handler for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const percentX = x / window.innerWidth;
      const percentY = y / window.innerHeight;
      // 3D rotation range: -15deg to 15deg
      const rotateY = (percentX - 0.5) * 30; // -15deg to 15deg
      const rotateX = (percentY - 0.5) * -30; // -15deg to 15deg (inverted for natural feel)
      setRotation({ x: rotateX, y: rotateY });
    };

    // Add global event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              The Hidden Costs<br />of Slow Payments
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Your best contractors are leaving for competitors who pay faster.
            </p>

            <Button asChild size="lg" className="font-semibold px-8">
              <Link href="/contact">
                Get Started Free
              </Link>
            </Button>
          </div>
          
          <div className="flex-1 relative flex justify-end">
            <div className="relative">
              <Image
                src="/property-manager-with-contractor.jpg"
                alt="Property manager with contractor"
                width={288}
                height={360}
                className="rounded-2xl shadow-2xl object-cover"
                style={{ 
                  width: '288px', 
                  height: '360px',
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              />
              
              {/* Main overlay card */}
              <div 
                className="absolute w-[228px] z-20"
                style={{ 
                  top: '4%',
                  left: '-75%',
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.6}deg) rotateY(${rotation.y * 0.6}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="w-full rounded-2xl backdrop-blur-md p-4"
                  style={{ 
                    backgroundColor: '#6b51ff',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="font-semibold text-white text-base mb-4">
                    What you&apos;re losing:
                  </div>
                  <ul className="space-y-2 text-white text-sm leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Reliable contractors choosing other property managers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Higher bids to cover financing costs (18-24% gets built into quotes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Project delays when contractors prioritize faster-paying clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>Time spent managing payment complaints and disputes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Secondary overlay card */}
              <div 
                className="absolute w-[235px] z-20"
                style={{ 
                  bottom: '2%',
                  left: '-65%',
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.4}deg) rotateY(${rotation.y * 0.4}deg)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="w-full rounded-2xl backdrop-blur-md p-4"
                  style={{ 
                    backgroundColor: '#491ae6',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="text-white text-sm leading-relaxed">
                    What if your contractors never had to worry about cash flow again?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const blueShades = [
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
    'bg-blue-700',
    'bg-blue-800',
    'bg-blue-900'
  ];

  const contractorBenefits = [
    {
      icon: Briefcase,
      title: "Instant access to capital",
      description: "Fund your next project without waiting for payment"
    },
    {
      icon: PhoneCall,
      title: "No more chasing checks",
      description: "Eliminate collection calls and payment delays"
    },
    {
      icon: TrendingUp,
      title: "Focus on growth",
      description: "Spend time growing your business instead of managing receivables"
    }
  ];

  const propertyManagerBenefits = [
    {
      icon: Smile,
      title: "Keep contractors happy",
      description: "Satisfied contractors deliver better work and availability"
    },
    {
      icon: Check,
      title: "Automate progress tracking",
      description: "Real-time visibility into project completion and payments"
    },
    {
      icon: ListChecks,
      title: "Centralize invoice approvals",
      description: "Streamlined approval process with audit trails"
    }
  ];

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Benefits
            </h2>
            <div className="block lg:hidden">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0 lg:ml-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Contractors */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              For Contractors
            </h3>
            {contractorBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className={`p-6 rounded-lg ${blueShades[index % blueShades.length]}`}> 
                  <div className="mb-2">
                    <IconComponent className="w-8 h-8 text-blue-50" />
                  </div>
                  <h4 className="text-base font-medium mb-3 text-blue-50" style={{ fontSize: '1.5rem' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* For Property Managers */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              For Property Managers
            </h3>
            {propertyManagerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className={`p-6 rounded-lg ${blueShades[(index+3) % blueShades.length]}`}> 
                  <div className="mb-2">
                    <IconComponent className="w-8 h-8 text-blue-50" />
                  </div>
                  <h4 className="text-base font-medium mb-3 text-blue-50" style={{ fontSize: '1.5rem' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I used to wait 45 days for payment. Now I get paid same day and can take on more jobs. IncoXchange transformed my business.",
      name: "Mike Rodriguez",
      role: "Electrical Contractor, Dallas"
    },
    {
      quote: "Our contractor network grew by 50% since using IncoXchange. Everyone wants to work with us now because of the fast payments.",
      name: "Sandra Chen",
      role: "Property Manager, Austin"
    },
    {
      quote: "The automated approval process saves me hours every week. My contractors are happier and I have better visibility into our projects.",
      name: "David Kim",
      role: "Portfolio Manager, Phoenix"
    }
  ];

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 text-left">
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/10 rounded-xl p-8 shadow-sm flex flex-col h-full border border-muted">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-foreground leading-relaxed mb-6" style={{ fontSize: '16px' }}>
                {testimonial.quote}
              </p>
              <div className="mt-auto">
                <p className="font-medium text-foreground text-base">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompatibleTradesSection() {
  const trades = [
    { icon: Zap, name: "Electricians" },
    { icon: Wrench, name: "Plumbers" },
    { icon: Thermometer, name: "HVAC" },
    { icon: Paintbrush, name: "Painters" },
    { icon: Hammer, name: "Handymen" },
    { icon: Users, name: "General Contractors" },
    { icon: Leaf, name: "Landscapers" },
    { icon: CloudRain, name: "Roofers" }
  ];

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-medium text-blue-800 dark:text-blue-400 mb-8 text-left">
          Compatible Trades
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trades.map((trade, index) => {
            const IconComponent = trade.icon;
            return (
              <div key={index} className="flex flex-col items-start justify-center">
                <span className="flex items-center gap-3 px-6 py-5 rounded-2xl border-2 border-blue-600 text-primary text-lg font-semibold shadow-sm w-full">
                  <IconComponent className="w-7 h-7 text-primary" />
                  {trade.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Approval Speed",
      lineOfCredit: { text: "Weeks/months", hasCheck: false },
      incoXchange: { text: "Same day", hasCheck: true }
    },
    {
      feature: "Credit Requirements",
      lineOfCredit: { text: "Strict personal guarantees", hasCheck: false },
      incoXchange: { text: "Based on invoices", hasCheck: true }
    },
    {
      feature: "Immediate Cash",
      lineOfCredit: { text: "Must qualify first", hasCheck: false },
      incoXchange: { text: "Get paid on completion", hasCheck: true }
    },
    {
      feature: "Debt on Books",
      lineOfCredit: { text: "Shows as liability", hasCheck: false },
      incoXchange: { text: "No debt created", hasCheck: true }
    },
    {
      feature: "Growing Business",
      lineOfCredit: { text: "Limited by credit limit", hasCheck: false },
      incoXchange: { text: "Grows with your work", hasCheck: true }
    },
    {
      feature: "Bad Credit OK",
      lineOfCredit: { text: "Disqualifies you", hasCheck: false },
      incoXchange: { text: "Invoice quality matters", hasCheck: true }
    }
  ];

  return (
    <section className="py-16 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Line of Credit vs Cashflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Get paid on your work, not your credit score.
            </p>
            <div className="block lg:hidden mt-6">
              <Button asChild size="lg" className="font-semibold px-8">
                <Link href="/contact">
                  Get Started Free
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0 lg:ml-8">
            <Button asChild size="lg" className="font-semibold px-8">
              <Link href="/contact">
                Get Started Free
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-background rounded-2xl shadow-lg overflow-hidden border border-muted">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-6"></TableHead>
                <TableHead className="p-6">
                  <div className="text-lg">Line of Credit</div>
                </TableHead>
                <TableHead className="p-6">
                  <div className="text-lg text-primary">IncoXchange Cashflow</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="p-6 font-medium">
                    {row.feature}
                  </TableCell>
                  <TableCell className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {row.lineOfCredit.hasCheck ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                      <span className="text-sm">{row.lineOfCredit.text}</span>
                    </div>
                  </TableCell>
                  <TableCell className="p-6">
                    <div className="flex items-center gap-2 text-foreground">
                      {row.incoXchange.hasCheck ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                      <span className="text-sm font-medium">{row.incoXchange.text}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default function CashflowPage() {
  // Parallax rotation state for radial background
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const percentX = x / window.innerWidth;
      const percentY = y / window.innerHeight;
      const rotateY = (percentX - 0.5) * 30;
      const rotateX = (percentY - 0.5) * -30;
      setRotation({ x: rotateX, y: rotateY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <section className="py-16 bg-background dark:bg-background relative overflow-hidden" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-semibold text-foreground mb-2">
                Cashflow
              </h1>
              <div className="text-3xl md:text-4xl font-medium mb-4 text-[#193a8f] dark:text-[#bcdcff]">
                Fast Cashflow. Zero Collection.<br className="hidden md:block" /> No Headaches.
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Get paid same day for completed work. No more waiting 30-60 days for property managers to process invoices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  Get Started
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center relative min-w-[220px]">
              {/* Radial background with parallax effect */}
              <div
                className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x * -1.2}deg) rotateY(${rotation.y * -1.2}deg) translateZ(-50px)`,
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src="/hero-radial-bg.svg"
                  alt="Radial Background"
                  width={900}
                  height={900}
                  className="opacity-60"
                  style={{ width: 900, height: 900 }}
                  priority
                />
              </div>
              {/* Stacked cards */}
              <div className="relative z-10 w-full">
                <CashflowSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HowItWorksSection />
      
      <HiddenCostSection />
      
      <BenefitsSection />
      
      <TestimonialsSection />
      
      <CompatibleTradesSection />
      
      <ComparisonSection />
      
      <FAQSection 
        faqData={cashflowFaqData}
        subtitle="Everything you need to know about fast cashflow for contractors and property managers. Still have questions? Contact our support team."
      />
      <CTASection
        title="Ready to Transform Your Cashflow?"
        description={<>Join thousands of contractors and property managers who&apos;ve eliminated payment delays. Get started in minutes — no setup fees, no stress.<br /><br /><span className="font-semibold">✓ No setup fees&nbsp;&nbsp;&nbsp;✓ Same-day approval&nbsp;&nbsp;&nbsp;✓ 24/7 support</span></>}
        buttonText="Get Paid Faster"
        buttonUrl="/contact"
        smallText={undefined}
      />
    </div>
  )
} 
