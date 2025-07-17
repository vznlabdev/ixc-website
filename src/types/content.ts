export interface HeaderContent {
  title: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
}

export interface CTAContent {
  title: string
  titleBreak?: string
  description?: string | React.ReactNode
  buttonText: string
  buttonUrl: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  smallText?: string
}

export interface FeatureCard {
  title: string
  description: string
  icon?: string
}

export interface TeamMember {
  name: string
  role: string
  bio?: string
  image?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  buttonText: string
  buttonUrl: string
  popular: boolean
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image?: string
}

export interface Stat {
  number: string
  label: string
}

export interface PageContent {
  header?: HeaderContent
  cta?: CTAContent
  mission?: {
    title: string
    content: string
  }
  principle?: {
    title: string
    description: string
  }
  team?: TeamMember[]
  stats?: Stat[]
  faq?: FAQItem[]
  plans?: PricingPlan[]
  features?: FeatureCard[]
  values?: Array<{
    title: string
    description: string
  }>
  positions?: Array<{
    title: string
    department: string
    location: string
    type: string
    description: string
  }>
} 