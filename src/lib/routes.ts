export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  API_DOCS: '/api-docs',
  BLOG: '/blog',
  CAREERS: '/careers',
  CASHFLOW: '/cashflow',
  CONTACT: '/contact',
  COOKIES: '/cookies',
  DEMO: '/demo',
  FEATURES: '/features',
  HELP: '/help',
  NEWS: '/news',
  PRICING: '/pricing',
  PRIVACY: '/privacy',
  SERVICES: '/services',
  TERMS: '/terms',
  TRAINING: '/training',
  UPDATES: '/updates',
} as const

export type Route = typeof ROUTES[keyof typeof ROUTES] 