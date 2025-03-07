"use client";

import Link from "next/link";
import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getIcon } from "@/utils/icon-map";

// Import JSON data
import metaData from "@/data/meta.json";
import features from "@/data/features.json";
import configOptions from "@/data/config-options.json";
import debugFeatures from "@/data/debug-features.json";
import structureBenefits from "@/data/structure-benefits.json";
import routingExamples from "@/data/routing-examples.json";
import faqs from "@/data/faqs.json";
import codeExamples from "@/data/code-examples.json";

// Import types
import type {
  MetaData,
  Feature,
  ConfigOption,
  StructureBenefit,
  RoutingExample,
  FAQ,
  CodeExamples,
} from "@/types";

export default function Home() {
  const meta = metaData as MetaData;
  const featuresList = features as Feature[];
  const configOptionsList = configOptions as ConfigOption[];
  const debugFeaturesList = debugFeatures as string[];
  const structureBenefitsList = structureBenefits as StructureBenefit[];
  const routingExamplesList = routingExamples as RoutingExample[];
  const faqsList = faqs as FAQ[];
  const codeExamplesList = codeExamples as CodeExamples;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 scroll-smooth">
      {/* Header and navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <span className="text-2xl">🍔</span>
            <span>BurgerAPI</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              {meta.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.text}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={() => window.open(meta.hero.buttons[0].href, "_blank")}
              >
                {getIcon("GitBranch", "h-4 w-4")}
                <span>GitHub</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero section */}
        <section className="py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span>🍔</span>
            {meta.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {meta.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {meta.hero.badges.map((badge, index) => (
              <span
                key={index}
                className={`inline-flex items-center rounded-md ${
                  badge.color === "danger"
                    ? "bg-red-500/10 text-red-500"
                    : badge.color === "success"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-black/90 text-white dark:bg-black/80"
                } px-3 py-1 text-sm font-medium`}
              >
                {getIcon(badge.icon, "mr-1 h-4 w-4")}
                {badge.text}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {meta.hero.buttons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={button.variant as any}
                className="gap-2 min-w-[140px] justify-center"
                onClick={() => window.open(button.href, "_blank")}
              >
                {button.icon && getIcon(button.icon, "h-4 w-4 ml-1")}
                {button.text}
              </Button>
            ))}
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">🚀 Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feature) => (
              <div key={feature.id} className="border rounded-lg p-6 bg-card">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {getIcon(feature.icon, "h-6 w-6 text-primary")}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">🎯 What's Coming Next?</h2>
          <div className="bg-card border rounded-lg p-6">
            <p className="mb-4">
              We're enhancing burger-api to make it even more powerful! While
              our core focus remains on building fast, type-safe APIs, we're
              adding the ability to serve simple pages when needed:
            </p>

            <h3 className="text-xl font-semibold mb-2">
              {meta.comingSoon.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {meta.comingSoon.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Installation section */}
        <section id="installation" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">📦 Installation</h2>
          <div className="bg-card border rounded-lg p-6">
            <p className="mb-4">Install burger-api via bun:</p>
            <CodeBlock language="bash" code={meta.installation.command} />

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                {meta.installation.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Usage section */}
        <section id="usage" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">🚀 Basic Usage Example</h2>

          <div className="bg-card border rounded-lg p-6 mb-10">
            <p className="mb-4">
              Create a new Burger instance and start your server:
            </p>
            <CodeBlock language="typescript" code={codeExamplesList.basic} />

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">
                Configuration Options
              </h4>
              <ul className="space-y-3">
                {configOptionsList.map((option, index) => (
                  <li key={index}>
                    <code className="bg-muted px-1 py-0.5 rounded">
                      {option.name}
                    </code>
                    :
                    <span className="ml-2 text-muted-foreground">
                      {option.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">
                Debug Mode Features
              </h4>
              <p className="text-muted-foreground mb-2">
                When{" "}
                <code className="bg-muted px-1 py-0.5 rounded">
                  debug: true
                </code>{" "}
                is set, you get:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                {debugFeaturesList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Recommended Project Structure
          </h3>
          <div className="bg-card border rounded-lg p-6 mb-10">
            <p className="mb-4">
              Here's a recommended project structure that helps keep your code
              organized and maintainable:
            </p>
            <CodeBlock language="text" code={codeExamplesList.structure} />

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Structure Benefits</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {structureBenefitsList.map((benefit, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium">
                      {benefit.icon} {benefit.title}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Examples section */}
        <section id="examples" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">📝 Examples</h2>

          <Tabs defaultValue="main" className="mb-10">
            <TabsList className="mb-4">
              <TabsTrigger value="main">Main App</TabsTrigger>
              <TabsTrigger value="middleware">Middleware</TabsTrigger>
              <TabsTrigger value="schemas">Schemas</TabsTrigger>
              <TabsTrigger value="routes">Routes</TabsTrigger>
            </TabsList>
            <TabsContent value="middleware" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Global Middleware (src/middleware/global/logger.ts)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Global middleware runs on every request. This example creates
                  a simple logger that records the timestamp, method, and URL of
                  each request.
                </p>
                <div className="bg-card border rounded-lg p-6">
                  <CodeBlock
                    language="typescript"
                    code={codeExamplesList.middleware.global}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Route-Specific Middleware (src/middleware/routes/products.ts)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Route-specific middleware only runs on the routes where it's
                  applied. This example validates access to product routes.
                </p>
                <div className="bg-card border rounded-lg p-6">
                  <CodeBlock
                    language="typescript"
                    code={codeExamplesList.middleware.route}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="schemas">
              <h3 className="text-xl font-semibold mb-2">
                Schemas (src/schemas/product.ts)
              </h3>
              <p className="text-muted-foreground mb-4">
                Zod schemas define the shape and validation rules for your data.
                This example creates schemas for creating and updating products.
              </p>
              <div className="bg-card border rounded-lg p-6">
                <CodeBlock
                  language="typescript"
                  code={codeExamplesList.schemas}
                />
              </div>
            </TabsContent>
            <TabsContent value="routes">
              <h3 className="text-xl font-semibold mb-2">
                Route File (src/api/products/route.ts)
              </h3>
              <p className="text-muted-foreground mb-4">
                Route files define the handlers for different HTTP methods and
                export middleware and schemas for validation.
              </p>
              <div className="bg-card border rounded-lg p-6">
                <CodeBlock
                  language="typescript"
                  code={codeExamplesList.routes}
                />
              </div>
            </TabsContent>
            <TabsContent value="main">
              <h3 className="text-xl font-semibold mb-2">
                Main Application (src/index.ts)
              </h3>
              <p className="text-muted-foreground mb-4">
                The main application file creates and configures the Burger
                instance and starts the server.
              </p>
              <div className="bg-card border rounded-lg p-6">
                <CodeBlock language="typescript" code={codeExamplesList.main} />
              </div>
            </TabsContent>
          </Tabs>

          <h3 className="text-2xl font-semibold mb-4">
            Advanced Route Example
          </h3>
          <p className="text-muted-foreground mb-4">
            This example demonstrates a more complex route with dynamic
            parameters, query validation, and OpenAPI metadata.
          </p>
          <div className="bg-card border rounded-lg p-6">
            <CodeBlock language="typescript" code={codeExamplesList.advanced} />
          </div>
        </section>

        {/* Documentation section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">
            📚 API Documentation Endpoints
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-2">
                {meta.documentation.openapi.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                Access the auto-generated OpenAPI specification at:
              </p>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                {meta.documentation.openapi.url}
              </div>
              <p className="mt-4 text-muted-foreground">
                {meta.documentation.openapi.description}
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-2">
                {meta.documentation.swagger.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                Access interactive API documentation via Swagger UI at:
              </p>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                {meta.documentation.swagger.url}
              </div>
              <p className="mt-4 text-muted-foreground">
                {meta.documentation.swagger.description}
              </p>
            </div>
          </div>
        </section>

        {/* FAQs section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">❓ FAQs</h2>
          <div className="space-y-6">
            {faqsList.map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground mb-4">{faq.answer}</p>
                {faq.code && (
                  <CodeBlock language="typescript" code={faq.code} />
                )}
                {faq.hasExamples && (
                  <div className="mt-4 space-y-3">
                    {routingExamplesList.map((example, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium">{example.title}</p>
                        <code className="text-sm">{example.path}</code> →{" "}
                        <code className="text-sm">{example.result}</code>
                      </div>
                    ))}
                  </div>
                )}
                {faq.additionalInfo && (
                  <p className="mt-4 text-muted-foreground">
                    {faq.additionalInfo}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-10 bg-muted/30">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl">🍔</span>
            <span className="font-semibold">BurgerAPI</span>
          </div>
          <p className="text-sm text-muted-foreground">{meta.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}
