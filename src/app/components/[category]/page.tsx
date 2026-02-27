'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { CATEGORY_META, getComponentsByCategory } from '@/data/mycomponents'
import { ComponentCard } from '@/components/showcase/ComponentCard'

interface PageProps {
  params: { category: string }
}

export default function CategoryPage({ params }: PageProps) {
  const meta = CATEGORY_META.find((c) => c.id === params.category)
  if (!meta) notFound()

  const components = getComponentsByCategory(params.category)

  return (
    <div className="min-h-screen bg-[#07080D] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back */}
        <Link
          href="/components"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-8 transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          All components
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl mb-6"
            style={{ background: `${meta.color}15`, border: `1px solid ${meta.color}30` }}
          >
            {meta.icon}
          </div>
          <h1 className="text-6xl md:text-8xl font-display text-white mb-4">{meta.label.toUpperCase()}</h1>
          <p className="text-gray-400 text-lg max-w-xl">{meta.description}</p>
          <div className="mt-4 text-sm font-mono" style={{ color: meta.color }}>
            {components.length} components in this category
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((c, i) => (
            <ComponentCard key={c.id} component={c} index={i} />
          ))}
        </div>

        {components.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🚧</div>
            <h3 className="text-2xl font-display text-white mb-2">COMING SOON</h3>
            <p className="text-gray-500">We're working on components in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
