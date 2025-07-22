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
import { Mail, CheckCircle } from 'lucide-react'

const waitlistFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Please enter a valid email address'),
  transactionalConsent: z.boolean().optional(),
  marketingConsent: z.boolean().optional(),
})

type WaitlistFormData = z.infer<typeof waitlistFormSchema>

interface WaitlistFormProps {
  onSubmit?: (data: WaitlistFormData) => Promise<void>
  onSuccess?: () => void
  className?: string
}

export default function WaitlistForm({ onSubmit, onSuccess, className = "" }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      transactionalConsent: false,
      marketingConsent: false,
    },
  })

  const handleSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default API call if no custom onSubmit provided
        const response = await fetch('/api/webhooks/ghl/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Failed to submit form')
        }
      }

      setSubmitStatus('success')
      form.reset()
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Waitlist form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">
          Welcome to the Waitlist!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;ve added you to our priority list. You&apos;ll be among the first to know when we launch!
        </p>
        <Button 
          onClick={() => setSubmitStatus('idle')} 
          variant="outline"
          size="lg"
        >
          Join Another Account
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="mb-6 text-center">
        <div className="mb-4">
          <Mail className="h-12 w-12 text-primary mx-auto" />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Join the Waitlist
        </h3>
        <p className="text-muted-foreground">
          Be first in line when IncoXchange launches. Get early access and special pricing.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Full Name" 
                    {...field} 
                  />
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
                  <FormLabel className="text-sm leading-5 text-foreground">
                    By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. & Data rates may apply.Reply HELP for help or STOP to opt-out.
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
                  <FormLabel className="text-sm leading-5 text-foreground">
                    By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          {submitStatus === 'error' && (
            <div className="p-4 border border-destructive/20 bg-destructive/10 rounded-lg">
              <p className="text-destructive text-sm">
                There was an error adding you to the waitlist. Please try again or contact us directly.
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
    </div>
  )
} 