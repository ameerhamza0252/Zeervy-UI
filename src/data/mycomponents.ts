import { ZeervyComponent, ComponentCategoryMeta } from '@/types'
import { defaultConfig } from 'next/dist/server/config-shared'

export const CATEGORY_META: ComponentCategoryMeta[] = [
  {
    id: 'hero',
    label: 'Hero Sections',
    description: 'Stunning landing page heroes with animations',
    icon: '⚡',
    count: 8,
    color: '#C8FF00',
  },
  {
    id: 'cards',
    label: 'Cards',
    description: 'Product, profile, pricing, and feature cards',
    icon: '▦',
    count: 12,
    color: '#FF4D6A',
  },
  {
    id: 'typography',
    label: 'Typography',
    description: 'Animated headings, text reveals, and type effects',
    icon: 'Aa',
    count: 9,
    color: '#7C3AED',
  },
  {
    id: 'buttons',
    label: 'Buttons',
    description: 'Interactive buttons with micro-animations',
    icon: '◉',
    count: 11,
    color: '#F59E0B',
  },
  {
    id: 'navigation',
    label: 'Navigation',
    description: 'Navbars, sidebars, and menu components',
    icon: '≡',
    count: 6,
    color: '#06B6D4',
  },
  {
    id: 'sections',
    label: 'Full Sections',
    description: 'Complete page sections ready to drop in',
    icon: '⊞',
    count: 7,
    color: '#10B981',
  },
  {
    id: 'forms',
    label: 'Forms',
    description: 'Input fields, search bars, and form layouts',
    icon: '◻',
    count: 8,
    color: '#EC4899',
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Loaders, badges, tags, and more',
    icon: '✦',
    count: 10,
    color: '#8B5CF6',
  },
]

 const MYCOMPONENTS: ZeervyComponent[] = [
  {
    slug: 'hero-1',
    name: 'Animated Orbital Particles',
    description: 'Orbital partical animations, revoles around cursor movement, creating an interactive and dynamic background effect.',
    category: 'hero',
    tags: ['Cursor Motion', 'Orbital Particles'],
    code: `<section class="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient">
  <h1 class="text-5xl font-bold text-white opacity-0 animate-fadeIn">Welcome to Zeervy UI</h1>
</section>`,
    isNew: true,
    id: '1',
    preview: 'https://ameer-hamza-nine.vercel.app/',
    createdAt: ''
  },
]
export {MYCOMPONENTS};
export function getComponentsByCategory(category: string): ZeervyComponent[] {
  return MYCOMPONENTS.filter((c) => c.category === category)
}

export function getComponentBySlug(slug: string): ZeervyComponent | undefined {
  return MYCOMPONENTS.find((c) => c.slug === slug)
}
