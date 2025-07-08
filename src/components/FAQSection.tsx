import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const defaultFaqData = [
  {
    question: "What is IncoXchange?",
    answer: "IncoXchange is a work order management platform for property managers. Create work orders with photos, assign to contractors via text, track everything in real time."
  },
  {
    question: "Do contractors need to download an app?",
    answer: "No. They get a text with a link, click it, and they're in. Works on any phone with the internet maybe even flip phones."
  },
  {
    question: "How do work orders get tracked for accounting?",
    answer: "Every job creates a digital paper trail: Timestamped status changes, photos and invoices attached, costs tracked by property/contractor/type, one click export of reports/spreadsheets."
  },
  {
    question: "What if my contractors aren&apos;t tech savvy?",
    answer: "If they can text, they can use IncoXchange. No passwords (login with phone number), no apps, no training."
  },
  {
    question: "Can Finance set spending limits by property?",
    answer: "Yes. Set monthly or per job limits. Get alerts before overages. Require approval for jobs over custom thresholds."
  },
  {
    question: "How fast can I pay contractors after job completion?",
    answer: "Contractors submit photos and invoices instantly. You approve from your phone. Digital approval goes straight to accounting—most contractors get paid 2-3 weeks faster."
  },
  {
    question: "Does it integrate with QuickBooks or other accounting software?",
    answer: "Export to CSV/Excel compatible with QuickBooks, NetSuite, and most systems. Full API integrations coming later this year."
  },
  {
    question: "What reports can I pull for tax season?",
    answer: "All maintenance by property, contractor payments (1099 info), expenses by category, photo documentation for insurance."
  },
  {
    question: "How much does IncoXchange cost?",
    answer: "Free, no credit card. $49/month for 6+ properties. Contractors are always free. No setup fees. Cancel anytime."
  },
  {
    question: "Can I try it with just a few properties first?",
    answer: "Yes! Start with 1 property. See how it works. Add the rest in minutes. No minimums."
  }
]

interface FAQSectionProps {
  faqData?: Array<{
    question: string
    answer: string
  }>
}

export default function FAQSection({ faqData = defaultFaqData }: FAQSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Heading & Subtext */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Frequently Asked <br className="hidden md:block" />Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8" style={{ fontSize: '16px' }}>
              Everything you need to know about IncoXchange. <br className="hidden md:block" />Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="font-semibold px-6 py-5 md:px-10"
              style={{ fontSize: '12px' }}
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          
          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
} 