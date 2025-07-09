import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import StatsSection from '@/components/StatsSection'
import { pageContent } from '@/content/pages'

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        title={pageContent.about.header.title}
        subtitle={pageContent.about.header.subtitle}
        primaryButtonText={pageContent.about.header.primaryButtonText}
        primaryButtonUrl={pageContent.about.header.primaryButtonUrl}
        secondaryButtonText={pageContent.about.header.secondaryButtonText}
        secondaryButtonUrl={pageContent.about.header.secondaryButtonUrl}
      />

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                {pageContent.about.mission.title}
              </h2>
              <div className="space-y-6">
                {pageContent.about.mission.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">
                {pageContent.about.principle.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {pageContent.about.principle.description}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image 
                  src="/about-placeholder.jpg"
                  alt="About IncoXchange - Our Mission"
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
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate individuals behind IncoXchange who are dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
            {pageContent.about.team.map((member, index) => {
              // Map team member names to their photo filenames
              const photoMap: { [key: string]: string } = {
                'Ryan McClurg': 'ryan-mcclurg.jpg',
                'Jeff Gordon': 'jeff-gordon.jpg',
                'Zach Lane': 'zach-lane.jpg',
                'Keylan Butler': 'keylan-butler.jpg',
                'Christy Bemis': 'christy-bemis.jpg',
                'Adrian Amante': 'adrian-amante.jpg'
              }
              
              return (
                <div key={index} className="text-left">
                  <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden">
                    <Image
                      src={`/${photoMap[member.name]}`}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      <CTASection 
        title={pageContent.about.cta.title}
        description={pageContent.about.cta.description}
        buttonText={pageContent.about.cta.buttonText}
        buttonUrl={pageContent.about.cta.buttonUrl}
        secondaryButtonText={pageContent.about.cta.secondaryButtonText}
        secondaryButtonUrl={pageContent.about.cta.secondaryButtonUrl}
      />
    </div>
  )
} 