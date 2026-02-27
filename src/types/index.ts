export type ComponentCategory = 
  | 'hero'
  | 'cards'
  | 'typography'
  | 'navigation'
  | 'sections'
  | 'buttons'
  | 'forms'
  | 'other'

export interface ZeervyComponent {
  id: string
  slug: string
  name: string
  description: string
  category: ComponentCategory
  tags: string[]
  isNew?: boolean
  isPro?: boolean
  preview: string // JSX/TSX source code
  code: string // Full source code
  dependencies?: string[]
  createdAt: string
  updatedAt?: string
}

export interface ComponentCategoryMeta {
  id: ComponentCategory
  label: string
  description: string
  icon: string
  count: number
  color: string
}

export interface SupportTier {
  id: string
  name: string
  amount: number
  description: string
  perks: string[]
  emoji: string
  popular?: boolean
}
