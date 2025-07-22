'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Briefcase, Users, Wrench } from 'lucide-react'
import WaitlistModal from '@/components/WaitlistModal'

interface TabContent {
  title: string
  description: string
  step: string
}

const businessOwnerContent: TabContent[] = [
  {
    step: "Step 1",
    title: "Launch Instantly",
    description: "Create your company account, add your locations, and invite your team. Your system is live before your coffee gets cold."
  },
  {
    step: "Step 2", 
    title: "Build Your Network",
    description: "SMS your contractors. They're in. That's it. Track who's available, who's reliable, and who delivers—all in one dashboard."
  },
  {
    step: "Step 3",
    title: "Run Everything From Your Phone",
    description: "Ditch the spreadsheets. Eliminate mystery costs. One dashboard shows what's happening, what it's costing, and what needs your attention now."
  }
]

const employeeContent: TabContent[] = [
  {
    step: "Step 1",
    title: "Control Every Dollar",
    description: "See exactly where maintenance money goes in real time. Set budgets for each property and get alerts before you go over. Export any report you need with one click. No more month-end surprises."
  },
  {
    step: "Step 2",
    title: "Streamline Payment Processing",
    description: "Invoices match to completed jobs automatically. Photos prove the work got done, so no more disputes. Pay contractors faster with approval workflows that actually work."
  },
  {
    step: "Step 3",
    title: "Audit Ready Documentation",
    description: "Every job has photos, timestamps, and approvals attached. Pull investor reports that show your cost savings. When tax season hits, export everything in seconds. Your team will love you."
  }
]

const contractorContent: TabContent[] = [
  {
    step: "Step 1",
    title: "Get Jobs on Your Phone",
    description: "New work comes straight to your text messages. Tap the link to see photos, what needs fixing, and how to get in. Accept the job with one tap or pass if you're booked."
  },
  {
    step: "Step 2",
    title: "Everything You Need to Work",
    description: "GPS takes you right to the property. Access codes and tenant info are all there. Snap photos as you work so everyone knows what's happening. No more \"where's the key?\" calls."
  },
  {
    step: "Step 3",
    title: "Get Your Money Faster",
    description: "Upload your completion photos and drop in your invoice. Property managers approve from their couch. No more chasing checks or waiting 30 days. Good documentation means quick payment."
  }
]

export default function GetStartedSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Button */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 lg:mb-0 text-foreground">
            Get Started in 5 Minutes
          </h2>
          
          <WaitlistModal 
            trigger={
              <Button 
                size="lg" 
                className="font-semibold px-6 py-5 md:px-10 w-fit lg:w-auto"
                style={{ fontSize: '12px' }}
              >
                Get Started Free
              </Button>
            }
          />
        </div>
        
        {/* Large shadcn Tabs Section */}
        <Tabs defaultValue="business" className="w-full">
          <TabsList className="mb-8 w-full sm:w-auto sm:inline-flex grid grid-cols-1 gap-2 sm:gap-4 rounded-lg items-stretch justify-start h-auto">
            <TabsTrigger value="business" className="flex items-center justify-center sm:justify-start gap-2 px-3 py-3 sm:px-6 sm:py-4 h-auto text-sm sm:text-base font-medium rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-muted data-[state=inactive]:text-foreground">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">For </span>Business Owners
            </TabsTrigger>
            <TabsTrigger value="employees" className="flex items-center justify-center sm:justify-start gap-2 px-3 py-3 sm:px-6 sm:py-4 h-auto text-sm sm:text-base font-medium rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-muted data-[state=inactive]:text-foreground">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">For </span>Employees
            </TabsTrigger>
            <TabsTrigger value="contractors" className="flex items-center justify-center sm:justify-start gap-2 px-3 py-3 sm:px-6 sm:py-4 h-auto text-sm sm:text-base font-medium rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-muted data-[state=inactive]:text-foreground">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">For </span>Contractors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="business">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {businessOwnerContent.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-base font-medium text-foreground" style={{ fontSize: '1.2rem' }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="employees">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {employeeContent.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-base font-medium text-foreground" style={{ fontSize: '1.2rem' }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="contractors">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {contractorContent.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-base font-medium text-foreground" style={{ fontSize: '1.2rem' }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 
