import { ROUTES } from '@/lib/routes'

export const pricingContent = {
  header: {
    title: "Pick the plan that's right for your team.",
    subtitle: "Start free and upgrade as you grow.",
    primaryButtonText: "Get Started",
    primaryButtonUrl: ROUTES.CONTACT
  },
  cta: {
    title: "Ready to End Contractor Chaos?",
    description: "Join hundreds of property managers who've transformed their workflow with IncoXchange",
    buttonText: "Start Your Free Account",
    buttonUrl: ROUTES.CONTACT,
    smallText: "Setup takes 5 minutes. Your contractors will thank you."
  },
  faq: [
    {
      question: "Do contractors pay to use IncoXchange?",
      answer: "Never. Contractors always use IncoXchange free. Only property management companies pay for accounts. This ensures 100% contractor adoption—they have zero reason not to join."
    },
    {
      question: "What happens when I hit my property limit on the free plan?",
      answer: "You'll get a friendly notification when you reach 5 properties. You can upgrade to Professional instantly, or remove properties to stay on the free plan. Your work order history is never deleted."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes. Upgrade or downgrade whenever you want. When you upgrade, you're prorated for the current month. No contracts, no penalties, cancel anytime. We even have a \"pause\" option for seasonal businesses."
    },
    {
      question: "Is there a setup fee or per-user pricing?",
      answer: "No setup fees, ever. The price you see is the price you pay. Add unlimited team members on Professional and Enterprise plans. No surprises, no \"implementation costs,\" no per seat charges. Just simple, transparent pricing."
    }
  ],
  plans: [
    {
      name: "Free Forever",
      description: "Everything you need to get started",
      price: "$0",
      period: "/month",
      features: [
        "Unlimited work orders",
        "Invite 5 contractors",
        "Photo documentation",
        "SMS notifications",
        "Mobile contractor access",
        "Basic analytics",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonUrl: ROUTES.CONTACT,
      popular: false
    },
    {
      name: "Professional",
      description: "For growing teams",
      price: "$49",
      period: "/month",
      features: [
        "Unlimited properties",
        "Unlimited contractors",
        "Budget controls",
        "Team management",
        "Priority support",
        "Expense reports"
      ],
      buttonText: "Start Free Trial",
      buttonUrl: ROUTES.CONTACT,
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$149",
      period: "/month",
      features: [
        "Everything in Professional",
        "API access",
        "Custom workflows",
        "Dedicated success manager",
        "QuickBooks integration (Beta)",
        "Multi Company support"
      ],
      buttonText: "Contact Sales",
      buttonUrl: ROUTES.CONTACT,
      popular: false
    }
  ]
} 