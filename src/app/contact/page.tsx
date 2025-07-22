"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import { pageContent } from '@/content/pages'
import Script from 'next/script'

export default function ContactPage() {
  return (
    <>
      <PageHeader {...pageContent.contact.header} showButtons={false} />
      
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div style={{ minHeight: '834px' }}>
                      <iframe
              src="https://link.1prompt.com/widget/form/LfTtf8BTl6yv5EBZjFar"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
              id="inline-LfTtf8BTl6yv5EBZjFar" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Page"
              data-height="1048"
              data-layout-iframe-id="inline-LfTtf8BTl6yv5EBZjFar"
              data-form-id="LfTtf8BTl6yv5EBZjFar"
              title="Contact Page"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">support@incoxchange.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (303) 799-1732</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      8084 S Wallace Ct<br />
                      Suite A<br />
                      Englewood, CO 80112
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>

      {/* 1Prompt Form Script */}
      <Script 
        src="https://link.1prompt.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
} 
