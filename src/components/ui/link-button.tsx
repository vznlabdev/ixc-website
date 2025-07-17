import { Button, ButtonProps } from '@/components/ui/button'
import Link from 'next/link'
import { forwardRef } from 'react'

interface LinkButtonProps extends Omit<ButtonProps, 'asChild'> {
  href: string
  external?: boolean
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