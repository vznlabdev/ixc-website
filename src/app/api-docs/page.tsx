import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Code, Book, Zap, Shield, ArrowRight } from 'lucide-react'

export default function ApiDocsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background dark:bg-background pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-foreground">
              API Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate IncoXchange with your applications using our powerful REST API. 
              Build custom solutions and automate your workflows.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-6 py-5 md:px-10">
                <Link href="/contact">
                  Get API Key
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-6 py-5 md:px-10">
                <Link href="#quick-start">
                  Quick Start
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">API Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "RESTful API",
                description: "Simple and intuitive REST endpoints for all operations"
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                description: "WebSocket support for real-time data synchronization"
              },
              {
                icon: Shield,
                title: "Secure Authentication",
                description: "OAuth 2.0 and API key authentication methods"
              },
              {
                icon: Book,
                title: "Comprehensive Docs",
                description: "Detailed documentation with examples and SDKs"
              }
            ].map((feature, i) => (
              <Card key={i} className="shadow-sm text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">Quick Start Guide</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">1. Authentication</CardTitle>
                <CardDescription>Get your API key and authenticate your requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    curl -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \<br />
                    https://api.incoxchange.com/v1/projects
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Include your API key in the Authorization header for all requests.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">2. Make Your First Request</CardTitle>
                <CardDescription>Fetch your projects using our API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    GET /v1/projects<br />
                    Response: 200 OK<br />
                    {JSON.stringify({ projects: [{ id: 1, name: "Sample Project" }] }, null, 2)}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  All responses are returned in JSON format.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">API Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Projects",
                endpoints: [
                  { method: "GET", path: "/v1/projects", description: "List all projects" },
                  { method: "POST", path: "/v1/projects", description: "Create a new project" },
                  { method: "GET", path: "/v1/projects/{id}", description: "Get project details" },
                  { method: "PUT", path: "/v1/projects/{id}", description: "Update project" },
                  { method: "DELETE", path: "/v1/projects/{id}", description: "Delete project" }
                ]
              },
              {
                category: "Tasks",
                endpoints: [
                  { method: "GET", path: "/v1/tasks", description: "List all tasks" },
                  { method: "POST", path: "/v1/tasks", description: "Create a new task" },
                  { method: "GET", path: "/v1/tasks/{id}", description: "Get task details" },
                  { method: "PUT", path: "/v1/tasks/{id}", description: "Update task" },
                  { method: "DELETE", path: "/v1/tasks/{id}", description: "Delete task" }
                ]
              },
              {
                category: "Users",
                endpoints: [
                  { method: "GET", path: "/v1/users", description: "List all users" },
                  { method: "POST", path: "/v1/users", description: "Create a new user" },
                  { method: "GET", path: "/v1/users/{id}", description: "Get user details" },
                  { method: "PUT", path: "/v1/users/{id}", description: "Update user" },
                  { method: "DELETE", path: "/v1/users/{id}", description: "Delete user" }
                ]
              },
              {
                category: "Reports",
                endpoints: [
                  { method: "GET", path: "/v1/reports", description: "List available reports" },
                  { method: "POST", path: "/v1/reports", description: "Generate custom report" },
                  { method: "GET", path: "/v1/reports/{id}", description: "Get report data" },
                  { method: "GET", path: "/v1/analytics", description: "Get analytics data" }
                ]
              }
            ].map((section, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.endpoints.map((endpoint, j) => (
                      <div key={j} className="flex items-center justify-between p-2 bg-muted rounded">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm">{endpoint.path}</code>
                        </div>
                        <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Tools */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center mb-12">SDKs & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "JavaScript SDK",
                description: "Official JavaScript/Node.js SDK for easy integration",
                link: "View Documentation"
              },
              {
                title: "Python SDK",
                description: "Python library for seamless API integration",
                link: "View Documentation"
              },
              {
                title: "Postman Collection",
                description: "Ready-to-use Postman collection for API testing",
                link: "Download Collection"
              }
            ].map((sdk, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{sdk.title}</CardTitle>
                  <CardDescription>{sdk.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {sdk.link}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border bg-card">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-medium mb-4">Need Help with the API?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our developer support team is here to help you get the most out of our API. 
                  Get in touch for technical assistance and integration support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="font-semibold px-10">
                    <Link href="/contact">
                      Contact Support
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-semibold px-10">
                    <Link href="/help">
                      View Help Center
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 
