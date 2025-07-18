'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { LinkButton } from '@/components/ui/link-button'
import { ROUTES } from '@/lib/routes'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              {/* Logomark */}
              <Image 
                src="/incoxchange-logomark.svg" 
                alt="incoXchange Logo" 
                width={32}
                height={32}
                className="w-8 h-8"
              />
              {/* Logo text */}
              <span className="text-2xl font-semibold text-foreground">
                incoXchange
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/features" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Features
            </Link>
            <Link href="/cashflow" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Cashflow
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/news" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Tablet Navigation - Reduced Links */}
          <nav className="hidden md:flex lg:hidden space-x-6">
            <Link href="/features" className="text-muted-foreground hover:text-foreground px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Features
            </Link>
            <Link href="/cashflow" className="text-muted-foreground hover:text-foreground px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Cashflow
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground px-2 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <LinkButton href={ROUTES.CONTACT}>
              Get Started
            </LinkButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              <Link 
                href="/features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                Features
              </Link>
              <Link 
                href="/cashflow" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                Cashflow
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/news" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                News
              </Link>
              <Link 
                href={ROUTES.CONTACT}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                <LinkButton href={ROUTES.CONTACT} className="w-full" onClick={closeMobileMenu}>
                  Get Started
                </LinkButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 
