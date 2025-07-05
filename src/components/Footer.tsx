import Link from 'next/link'
import { Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-10 py-12">
          <div className="col-span-1 md:col-span-4 lg:col-span-4 md:mr-4 lg:mr-6">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Logomark */}
              <img 
                src="/incoxchange-logomark.svg" 
                alt="incoXchange Logo" 
                className="w-6 h-6"
              />
              {/* Logo text */}
              <span className="text-xl font-semibold text-foreground">
                incoXchange
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Transform your Project Management Workflow
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5 fill-current" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5 fill-current" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5 fill-current" />
              </Link>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-4 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground" style={{ fontSize: '.875rem' }}>Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Updates
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground" style={{ fontSize: '.875rem' }}>Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  API Docs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground" style={{ fontSize: '.875rem' }}>Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-foreground" style={{ fontSize: '.875rem' }}>Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '.875rem' }}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
        
        <div className="pt-8 pb-4">
          <p className="text-left text-muted-foreground" style={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} incoXchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 