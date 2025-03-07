export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface ConfigOption {
  name: string
  description: string
}

export interface StructureBenefit {
  icon: string
  title: string
  description: string
}

export interface RoutingExample {
  title: string
  path: string
  result: string
}

export interface FAQ {
  question: string
  answer: string
  code?: string
  hasExamples?: boolean
  additionalInfo?: string
}

export interface Badge {
  text: string
  icon: string
  color: string
}

export interface Button {
  text: string
  icon: string | null
  variant: "default" | "outline" | "secondary" | "ghost" | "link"
  href: string
}

export interface NavItem {
  text: string
  href: string
}

export interface HeroSection {
  title: string
  description: string
  badges: Badge[]
  buttons: Button[]
}

export interface ComingSoonSection {
  title: string
  features: string[]
}

export interface InstallationSection {
  command: string
  requirements: string[]
}

export interface DocumentationEndpoint {
  title: string
  url: string
  description: string
}

export interface DocumentationSection {
  openapi: DocumentationEndpoint
  swagger: DocumentationEndpoint
}

export interface MetaData {
  title: string
  description: string
  hero: HeroSection
  navigation: NavItem[]
  comingSoon: ComingSoonSection
  installation: InstallationSection
  documentation: DocumentationSection
  footer: {
    text: string
  }
}

export interface CodeExamples {
  basic: string
  structure: string
  middleware: {
    global: string
    route: string
  }
  schemas: string
  routes: string
  main: string
  advanced: string
}

