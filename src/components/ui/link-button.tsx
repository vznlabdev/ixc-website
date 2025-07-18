import { Button, buttonVariants } from '@/components/ui/button'
import { VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { forwardRef } from 'react'

interface LinkButtonProps extends 
  React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  href: string
  external?: boolean
  asChild?: never
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href, external = false, children, ...props }, ref) => {
    return (
      <Button asChild {...props}>
        <Link 
          href={href} 
          ref={ref}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </Link>
      </Button>
    )
  }
)

LinkButton.displayName = 'LinkButton'

export { LinkButton } 
