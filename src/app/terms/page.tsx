import PageHeader from '@/components/layout/PageHeader'

export default function TermsPage() {
  return (
    <div>
      <PageHeader 
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our service."
        lastUpdated="January 15, 2025"
        narrow
        showButtons={false}
      />

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-foreground max-w-none">
            
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using IncoXchange (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-muted-foreground mb-8">
              If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials on IncoXchange for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-muted-foreground mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• modify or copy the materials</li>
              <li>• use the materials for any commercial purpose or for any public display</li>
              <li>• attempt to reverse engineer any software contained on the website</li>
              <li>• remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Account Terms</h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the security of your account and password. IncoXchange cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
            <p className="text-muted-foreground mb-4">
              You are responsible for all content posted and activity that occurs under your account.
            </p>
            <p className="text-muted-foreground mb-8">
              You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              For paid services, you agree to pay the fees specified for the service level you select.
            </p>
            <p className="text-muted-foreground mb-4">
              All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties.
            </p>
            <p className="text-muted-foreground mb-8">
              We reserve the right to change our fees at any time, upon reasonable notice to you.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Cancellation and Termination</h2>
            <p className="text-muted-foreground mb-4">
              You may cancel your account at any time by contacting us or through your account settings.
            </p>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account at any time, with or without notice, for any reason, including violation of these terms.
            </p>
            <p className="text-muted-foreground mb-8">
              Upon termination, your right to use the service will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">
              You may not use our service:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• for any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>• to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>• to infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>• to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>• to submit false or misleading information</li>
              <li>• to upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Disclaimers</h2>
            <p className="text-muted-foreground mb-4">
              The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• excludes all representations and warranties relating to this website and its contents</li>
              <li>• excludes all liability for damages arising out of or in connection with your use of this website</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-8">
              In no case shall IncoXchange, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Governing Law</h2>
            <p className="text-muted-foreground mb-8">
              These terms and conditions are governed by and construed in accordance with the laws of the State of Colorado and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
            <p className="text-muted-foreground mb-8">
              We will notify users of any material changes to these terms via email or through our service.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
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
