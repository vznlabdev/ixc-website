import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Our Services
          </h1>
                      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Comprehensive digital solutions tailored to your business needs
            </p>
                      <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-800 dark:hover:bg-white">
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-accent-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-foreground/80">
            Let&apos;s discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 
