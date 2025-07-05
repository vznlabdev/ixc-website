import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Our Privacy Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Data Protection",
                description: "We implement industry-standard security measures to protect your data"
              },
              {
                icon: Lock,
                title: "Secure Storage",
                description: "Your information is encrypted and stored securely in our systems"
              },
              {
                icon: Eye,
                title: "Transparency",
                description: "We're clear about what data we collect and how we use it"
              },
              {
                icon: FileText,
                title: "Your Rights",
                description: "You have full control over your personal information"
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

      {/* Privacy Policy Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Name and email address when you create an account</li>
                    <li>• Profile information and preferences</li>
                    <li>• Communication preferences and settings</li>
                    <li>• Payment information for subscription services</li>
                    <li>• Content you create within our platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We automatically collect information about how you use our services:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Device information and IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and features used</li>
                    <li>• Time spent on our platform</li>
                    <li>• Interaction patterns and preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide, maintain, and improve our services</li>
                  <li>• Process transactions and send related information</li>
                  <li>• Send administrative messages and updates</li>
                  <li>• Respond to your comments and questions</li>
                  <li>• Analyze usage patterns to enhance user experience</li>
                  <li>• Protect against fraud and unauthorized access</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• With your explicit consent</li>
                  <li>• To service providers who assist in our operations</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                  <li>• In connection with a business transfer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encryption in transit and at rest</li>
                  <li>• Regular security assessments and audits</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access and review your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your account and associated data</li>
                  <li>• Export your data in a portable format</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Request restriction of processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@incoxchange.com</p>
                  <p>Address: 123 Privacy Street, Data City, DC 12345</p>
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