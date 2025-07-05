import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Please read these terms and conditions carefully before using our service.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using IncoXchange (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily download one copy of the materials on IncoXchange for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-muted-foreground">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• modify or copy the materials</li>
                  <li>• use the materials for any commercial purpose or for any public display</li>
                  <li>• attempt to reverse engineer any software contained on the website</li>
                  <li>• remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Account Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You are responsible for maintaining the security of your account and password. IncoXchange cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                </p>
                <p className="text-muted-foreground">
                  You are responsible for all content posted and activity that occurs under your account.
                </p>
                <p className="text-muted-foreground">
                  You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For paid services, you agree to pay the fees specified for the service level you select.
                </p>
                <p className="text-muted-foreground">
                  All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to change our fees at any time, upon reasonable notice to you.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Cancellation and Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You may cancel your account at any time by contacting us or through your account settings.
                </p>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account at any time, with or without notice, for any reason, including violation of these terms.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the service will cease immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You may not use our service:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• for any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>• to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>• to infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>• to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>• to submit false or misleading information</li>
                  <li>• to upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• excludes all representations and warranties relating to this website and its contents</li>
                  <li>• excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  In no case shall IncoXchange, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
                <p className="text-muted-foreground">
                  We will notify users of any material changes to these terms via email or through our service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@incoxchange.com</p>
                  <p>Address: 123 Legal Street, Terms City, TC 12345</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Legal Team
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