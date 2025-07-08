import PageHeaderNarrow from '@/components/PageHeaderNarrow'

export default function CookiesPage() {
  return (
    <div>
      <PageHeaderNarrow 
        title="Cookie Policy"
        subtitle="This policy explains how we use cookies and similar technologies to provide, improve, and protect our services."
        lastUpdated="January 15, 2025"
      />

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-foreground max-w-none">
            
            <h2 className="text-2xl font-semibold mb-6 text-foreground">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
            <p className="text-muted-foreground mb-8">
              Cookies help us understand how you use our website and enable us to improve your experience.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Types of Cookies We Use</h2>
            
            <h3 className="text-lg font-semibold mb-3 text-foreground">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Authentication cookies</li>
              <li>• Session management cookies</li>
              <li>• Security cookies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Performance Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies collect information about how you use our website, such as which pages you visit and if you experience any errors. This information helps us improve how our website works.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Analytics cookies</li>
              <li>• Error tracking cookies</li>
              <li>• Performance monitoring cookies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Functionality Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third party providers whose services we have added to our pages.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Preference cookies</li>
              <li>• Language selection cookies</li>
              <li>• Theme selection cookies</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Marketing Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Advertising cookies</li>
              <li>• Remarketing cookies</li>
              <li>• Social media cookies</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We also use third-party cookies from trusted partners to help us provide better services:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• <strong>Google Analytics:</strong> To understand how visitors use our website</li>
              <li>• <strong>Stripe:</strong> For secure payment processing</li>
              <li>• <strong>Intercom:</strong> For customer support chat functionality</li>
              <li>• <strong>Hotjar:</strong> To analyze user behavior and improve user experience</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">How to Control Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            
            <h3 className="text-lg font-semibold mb-3 text-foreground">Browser Settings</h3>
            <p className="text-muted-foreground mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
            
            <h3 className="text-lg font-semibold mb-3 text-foreground">Opt-Out Links</h3>
            <p className="text-muted-foreground mb-4">
              You can opt out of interest-based advertising by visiting the following links:
            </p>
            <ul className="space-y-1 text-muted-foreground mb-8">
              <li>• Network Advertising Initiative: optout.networkadvertising.org</li>
              <li>• Digital Advertising Alliance: optout.aboutads.info</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Cookie Consent</h2>
            <p className="text-muted-foreground mb-4">
              By using our website, you consent to the use of cookies in accordance with this Cookie Policy. When you first visit our website, you will be asked to consent to the use of cookies.
            </p>
            <p className="text-muted-foreground mb-8">
              You can withdraw your consent at any time by clearing your cookies and disabling cookies in your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Updates to This Policy</h2>
            <p className="text-muted-foreground mb-8">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: support@incoxchange.com</p>
              <p>Phone: +1 (303) 799-1732</p>
              <p>Address: 8084 S Wallace Ct, Suite A, Englewood, CO 80112</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
} 