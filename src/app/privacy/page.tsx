import PageHeader from '@/components/layout/PageHeader'

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
        lastUpdated="January 15, 2025"
        narrow
        showButtons={false}
      />

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-foreground max-w-none">
            
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold mb-3 text-foreground">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Name and email address when you create an account</li>
              <li>• Profile information and preferences</li>
              <li>• Communication preferences and settings</li>
              <li>• Payment information for subscription services</li>
              <li>• Content you create within our platform</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Usage Information</h3>
            <p className="text-muted-foreground mb-4">
              We automatically collect information about how you use our services:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Device information and IP address</li>
              <li>• Browser type and version</li>
              <li>• Pages visited and features used</li>
              <li>• Time spent on our platform</li>
              <li>• Interaction patterns and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send administrative messages and updates</li>
              <li>• Respond to your comments and questions</li>
              <li>• Analyze usage patterns to enhance user experience</li>
              <li>• Protect against fraud and unauthorized access</li>
              <li>• Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• With your explicit consent</li>
              <li>• To service providers who assist in our operations</li>
              <li>• To comply with legal requirements</li>
              <li>• To protect our rights and safety</li>
              <li>• In connection with a business transfer</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Encryption in transit and at rest</li>
              <li>• Regular security assessments and audits</li>
              <li>• Access controls and authentication</li>
              <li>• Employee training on data protection</li>
              <li>• Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Access and review your personal data</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your account and associated data</li>
              <li>• Export your data in a portable format</li>
              <li>• Opt out of marketing communications</li>
              <li>• Request restriction of processing</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
