import { ROUTES } from '@/lib/routes'

export const aboutContent = {
  header: {
    title: "About IncoXchange",
    subtitle: "Make workflows better for everyone. We believe the best software just works, making hard things easy and complex tasks simple. No exceptions.",
    primaryButtonText: "Get Started",
    primaryButtonUrl: ROUTES.CONTACT,
    secondaryButtonText: "Join Our Team",
    secondaryButtonUrl: ROUTES.CAREERS
  },
  mission: {
    title: "Our Mission",
    content: "We believe work should flow, not frustrate. Too many teams drown in emails, lose track of tasks, and waste time chasing updates. There's a better way.\n\nFounded in 2025, IncoXchange is building the future of simple work management. We're just getting started, but our vision is clear: tools that make sense from the first click. Simple tools for teams who have better things to do."
  },
  principle: {
    title: "User Centric",
    description: "Every decision we make is driven by what's best for our users and their success."
  },
  team: [
    {
      name: "Ryan McClurg",
      role: "CEO & Founder",
      bio: "Serial entrepreneur obsessed with solving complex problems that actually matter."
    },
    {
      name: "Zach Lane",
      role: "CFO",
      bio: "Tech savvy financial executive dedicated to innovation and delivering exceptional customer experiences."
    },
    {
      name: "Jeff Gordon",
      role: "CTO",
      bio: "Former Intuit engineer passionate about building software that people actually want to use."
    },
    {
      name: "Keylan Butler",
      role: "Head of Customer Success",
      bio: "Customer advocate dedicated to building relationships that turn customers into community champions."
    },
    {
      name: "Christy Bemis",
      role: "Controller",
      bio: "Financial guru driven to help teams understand their numbers and own their growth."
    },
    {
      name: "Adrian Amante",
      role: "Lead Designer",
      bio: "Award winning designer focused on user experience and interface design."
    }
  ],
  stats: [
    {
      number: "Unlimited",
      label: "Work Orders"
    },
    {
      number: "Zero",
      label: "Training Required"
    },
    {
      number: "3",
      label: "Simple Steps"
    },
    {
      number: "100%",
      label: "Free to Start"
    }
  ],
  cta: {
    title: "Ready to Get Started?",
    description: "Join IncoXchange today and discover what work feels like without the chaos. Your team will thank you.",
    buttonText: "Start Free Trial",
    buttonUrl: ROUTES.CONTACT
  }
} 