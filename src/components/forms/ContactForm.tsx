"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare } from 'lucide-react'

const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().optional(),
  transactionalConsent: z.boolean().optional(),
  marketingConsent: z.boolean().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
}

export default function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      transactionalConsent: false,
      marketingConsent: false,
    },
  })

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default API call if no custom onSubmit provided
        console.log('Submitting contact form:', data)
        
        const response = await fetch('/api/webhooks/ghl/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Contact form submission failed:', {
            status: response.status,
            statusText: response.statusText,
            errorText
          })
          throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`)
        }
        
        console.log('Contact form submitted successfully!')
      }

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card className={`border ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="mb-4">
            <Mail className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />
          </div>
          <CardTitle className="text-2xl mb-2">Thank You!</CardTitle>
          <CardDescription className="text-lg">
            We&apos;ve received your message and will get back to you within 24 hours.
          </CardDescription>
          <Button 
            onClick={() => setSubmitStatus('idle')} 
            variant="outline" 
            className="mt-6"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`border ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Send us a message
        </CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="Phone" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Message"
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="transactionalConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="mt-1 accent-primary"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm leading-5">
                      By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply.Reply HELP for help or STOP to opt-out.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="marketingConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value || false}
                      onChange={field.onChange}
                      className="mt-1 accent-primary"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm leading-5">
                      By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            {submitStatus === 'error' && (
              <div className="p-4 border border-destructive/20 bg-destructive/10 rounded-lg">
                <p className="text-destructive text-sm">
                  There was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>

            <div className="text-center text-sm">
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              <span className="text-muted-foreground mx-2">|</span>
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 