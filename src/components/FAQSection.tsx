import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { LinkButton } from '@/components/ui/link-button'
import { ROUTES } from '@/lib/routes'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqData?: FAQItem[]
  subtitle?: string
}

const defaultFaqData: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer: "Start with our free tier and use IncoXchange with up to 5 properties forever. No credit card required. When you're ready for more, upgrade to Professional or Enterprise plans with just a few clicks."
  },
  {
    question: "Do I need to install anything?",
    answer: "No installation required! IncoXchange is 100% cloud-based. Access it from any device with a web browser. Your contractors simply use their existing SMS messaging - no app downloads needed."
  },
  {
    question: "How quickly can I get started?",
    answer: "Most customers are up and running in under 5 minutes. Just create your account, add your first property, and invite contractors. We'll guide you through each step with our interactive setup wizard."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free tier includes email support with 24-hour response time. Professional plans get priority support with 2-hour response. Enterprise customers receive dedicated account management and instant phone support."
  },
  {
    question: "Can I import my existing data?",
    answer: "Yes! We support bulk imports from Excel, CSV, and most property management systems. Our support team can help you migrate your contractor lists, property details, and historical work orders."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption, SOC2 compliant infrastructure, and automatic daily backups. Your data is stored in secure AWS data centers with 99.9% uptime guarantee."
  },
  {
    question: "What if my contractors don't have smartphones?",
    answer: "No problem! Our SMS-based system works with any mobile phone that can send and receive text messages. No internet connection or smartphone required - perfect for all contractor types."
  },
  {
    question: "Can I customize work order templates?",
    answer: "Yes! Create unlimited custom templates for different job types. Add required fields, photo requirements, budget limits, and approval workflows. Save time by reusing templates for common tasks."
  }
]

export default function FAQSection({ faqData = defaultFaqData, subtitle }: FAQSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Heading & Subtext */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Frequently Asked <br className="hidden md:block" />Questions
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mb-8">
              {subtitle || (
                <>
                  Everything you need to know about IncoXchange. <br className="hidden md:block" />Can&apos;t find what you&apos;re looking for? Contact our support team.
                </>
              )}
            </p>
            <LinkButton 
              href={ROUTES.CONTACT}
              size="lg" 
              className="font-semibold px-6 py-5 md:px-10 text-xs"
            >
              Contact Us
            </LinkButton>
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
