interface PageHeaderNarrowProps {
  title: string
  subtitle?: string
  lastUpdated?: string
}

export default function PageHeaderNarrow({
  title,
  subtitle,
  lastUpdated
}: PageHeaderNarrowProps) {
  return (
    <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground mb-6">
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 