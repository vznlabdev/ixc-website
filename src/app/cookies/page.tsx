import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cookie, Settings, Shield, Eye } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This policy explains how we use cookies and similar technologies to provide, improve, and protect our services.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Cookie Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cookie,
                title: "What are Cookies",
                description: "Small text files stored on your device to enhance your experience"
              },
              {
                icon: Settings,
                title: "Control Your Cookies",
                description: "You can manage and delete cookies through your browser settings"
              },
              {
                icon: Shield,
                title: "Privacy Protected",
                description: "We use cookies responsibly and protect your privacy"
              },
              {
                icon: Eye,
                title: "Transparency",
                description: "We're clear about what cookies we use and why"
              }
            ].map((item, i) => (
              <Card key={i} className="shadow-sm text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </p>
                <p className="text-muted-foreground">
                  Cookies help us understand how you use our website and enable us to improve your experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Authentication cookies</li>
                    <li>• Session management cookies</li>
                    <li>• Security cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Performance Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    These cookies collect information about how you use our website, such as which pages you visit and if you experience any errors. This information helps us improve how our website works.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Analytics cookies</li>
                    <li>• Error tracking cookies</li>
                    <li>• Performance monitoring cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Functionality Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third party providers whose services we have added to our pages.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Preference cookies</li>
                    <li>• Language selection cookies</li>
                    <li>• Theme selection cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advertising cookies</li>
                    <li>• Remarketing cookies</li>
                    <li>• Social media cookies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We also use third-party cookies from trusted partners to help us provide better services:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Google Analytics:</strong> To understand how visitors use our website</li>
                  <li>• <strong>Stripe:</strong> For secure payment processing</li>
                  <li>• <strong>Intercom:</strong> For customer support chat functionality</li>
                  <li>• <strong>Hotjar:</strong> To analyze user behavior and improve user experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">How to Control Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Browser Settings</h4>
                    <p className="text-muted-foreground">
                      Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Opt-Out Links</h4>
                    <p className="text-muted-foreground">
                      You can opt out of interest-based advertising by visiting the following links:
                    </p>
                    <ul className="space-y-1 text-muted-foreground mt-2">
                      <li>• Network Advertising Initiative: <span className="text-primary">optout.networkadvertising.org</span></li>
                      <li>• Digital Advertising Alliance: <span className="text-primary">optout.aboutads.info</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Cookie Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By using our website, you consent to the use of cookies in accordance with this Cookie Policy. When you first visit our website, you will be asked to consent to the use of cookies.
                </p>
                <p className="text-muted-foreground">
                  You can withdraw your consent at any time by clearing your cookies and disabling cookies in your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-muted-foreground">
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date above.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@incoxchange.com</p>
                  <p>Address: 123 Cookie Street, Policy City, PC 12345</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Privacy Team
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 