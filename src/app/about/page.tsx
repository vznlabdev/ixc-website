import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import StatsSection from '@/components/StatsSection'
import { aboutContent } from '@/content/about'

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        title={aboutContent.header.title}
        subtitle={aboutContent.header.subtitle}
        primaryButtonText={aboutContent.header.primaryButtonText}
        primaryButtonUrl={aboutContent.header.primaryButtonUrl}
        secondaryButtonText={aboutContent.header.secondaryButtonText}
        secondaryButtonUrl={aboutContent.header.secondaryButtonUrl}
      />

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                {aboutContent.mission.title}
              </h2>
              <div className="space-y-6">
                {aboutContent.mission.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">
                {aboutContent.principle.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {aboutContent.principle.description}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/property-manager-with-contractor.jpg"
                  alt="Property Manager with Contractor - IncoXchange Mission"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We&apos;re a diverse group of builders, thinkers, and problem solvers united by a common goal: making work better for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Image 
                    src={`/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title={aboutContent.cta.title}
        description={aboutContent.cta.description}
        buttonText={aboutContent.cta.buttonText}
        buttonUrl={aboutContent.cta.buttonUrl}
        secondaryButtonText={aboutContent.cta.secondaryButtonText}
        secondaryButtonUrl={aboutContent.cta.secondaryButtonUrl}
      />
    </div>
  )
} 