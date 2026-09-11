export interface CaseMetricComparison {
  before: string
  after: string
  improvement?: string
}

export interface CaseMetrics {
  [key: string]: CaseMetricComparison | undefined
}

export interface CaseTestimonial {
  quote: string
  author: string
  position: string
  avatarUrl?: string
}

export interface CaseTimelineItem {
  phase: string
  duration: string
  description: string
}

export interface CaseStudy {
  id: string
  slug: string
  client: string
  industry: string
  category: 'B2B' | 'B2C' | 'E-commerce' | 'Autoral' | string
  projectDuration: string
  roi?: string
  challenge: string
  solution: string
  implementation: string[]
  metrics: Record<string, CaseMetricComparison>
  results: string[]
  technologies: string[]
  testimonial?: CaseTestimonial
  timeline?: CaseTimelineItem[]
  featuredImage?: string
  date: string
}
