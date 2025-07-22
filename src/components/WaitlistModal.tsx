"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WaitlistForm } from '@/components/forms'

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
  const handleFormSuccess = () => {
    // Close modal after successful submission
    setTimeout(() => {
      if (onOpenChange) {
        onOpenChange(false)
      }
    }, 3000) // Close after 3 seconds to let user see success message
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto bg-background">
        <DialogHeader className="sr-only">
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        
        <WaitlistForm 
          onSuccess={handleFormSuccess}
          className="p-6"
        />
      </DialogContent>
    </Dialog>
  )
} 