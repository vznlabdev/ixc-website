import { ROUTES } from '@/lib/routes'

export const careersContent = {
  header: {
    title: "Join Our Team",
    subtitle: "Help us build the future of workflow management. Join a team of builders who are committed to making work better for everyone.",
    primaryButtonText: "View Open Positions",
    primaryButtonUrl: "#open-positions",
    secondaryButtonText: "Submit Resume",
    secondaryButtonUrl: ROUTES.CONTACT
  },
  values: [
    {
      title: "Innovation First",
      description: "Work with cutting edge technologies and push the boundaries of what's possible."
    },
    {
      title: "Awesome Team",
      description: "Join a diverse and talented team that supports each other's growth."
    },
    {
      title: "Work Life Balance",
      description: "Flexible hours, remote work options, and time to recharge when you need it."
    }
  ],
  positions: [
    {
      title: "Senior Developer",
      department: "Engineering",
      location: "Remote / Denver",
      type: "Full Time",
      description: "Join our development team to build beautiful, intuitive user interfaces using React, TypeScript, and modern web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Denver",
      type: "Full Time",
      description: "Drive product strategy and execution for our core workflow management platform. Work closely with engineering and design teams."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full Time",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure high availability and performance."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Denver",
      type: "Full Time",
      description: "Help our customers succeed with IncoXchange through onboarding, training, and ongoing support."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Denver",
      type: "Full Time",
      description: "Drive growth through content marketing, demand generation, and partnership development."
    }
  ]
} 