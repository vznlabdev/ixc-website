"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail } from "lucide-react"
import Script from 'next/script'

interface WaitlistModalProps {
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function WaitlistModal({ 
  trigger, 
  open, 
  onOpenChange 
}: WaitlistModalProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-hidden border-gray-800" style={{ backgroundColor: '#0a0a0a' }}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <Mail className="h-5 w-5 text-blue-400" />
              Join the Waitlist
            </DialogTitle>
          </DialogHeader>
          
          <div style={{ 
            height: '600px', 
            maxHeight: '70vh',
            width: '100%', 
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            <iframe
              src="https://link.1prompt.com/widget/form/RYKEFxD5bGpz1q1bXZIZ"
              style={{ 
                width: '100%', 
                height: '800px', 
                border: 'none', 
                borderRadius: '16px',
                display: 'block'
              }}
              id="waitlist-inline-form"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Waitlist Modal"
              data-height="undefined"
              data-layout-iframe-id="waitlist-inline-form"
              data-form-id="RYKEFxD5bGpz1q1bXZIZ"
              title="Waitlist Modal"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* 1Prompt Form Script - Load once globally */}
      <Script 
        src="https://link.1prompt.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
} 