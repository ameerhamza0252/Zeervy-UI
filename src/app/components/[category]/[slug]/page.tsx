'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Eye, Code2, Copy, Check } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getComponentBySlug, CATEGORY_META } from '@/data/mycomponents'
import { CodeBlock } from '@/components/showcase/CodeBlock'
import { copyToClipboard } from '@/lib/utils'
import toast from 'react-hot-toast'

interface PageProps {
  params: { category: string; slug: string }
}

export default function ComponentDetailPage({ params }: PageProps) {
  const component = getComponentBySlug(params.slug)
  if (!component) notFound()

  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [copied, setCopied] = useState(false)

  const meta = CATEGORY_META.find((c) => c.id === component.category)

  const handleCopy = async () => {
    await copyToClipboard(component.code)
    setCopied(true)
    toast.success('Component code copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#07080D] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500 font-mono">
          <Link href="/components" className="hover:text-white transition-colors">Components</Link>
          <span>/</span>
          <Link href={ `/components/${component.category}` } className="hover:text-white transition-colors capitalize">
            {meta?.label}
          </Link>
          <span>/</span>
          <span className="text-gray-300">{component.name}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap gap-2 mb-3">
              {component.isNew && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[rgba(200,255,0,0.1)] text-[#C8FF00] border border-[rgba(200,255,0,0.2)]">
                  NEW
                </span>
              )}
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-mono border capitalize"
                style={{ background: `${meta?.color}15`, color: meta?.color, borderColor: `${meta?.color}30` }}
              >
                {meta?.label}
              </span>
            </div>
            <h1 className="text-5xl font-display text-white mb-3">{component.name.toUpperCase()}</h1>
            <p className="text-gray-400 max-w-xl leading-relaxed">{component.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {component.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-[#0D0E16] text-gray-500 border border-[rgba(255,255,255,0.06)]">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Copy CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shrink-0 transition-all duration-300 ${
              copied
                ? 'bg-[rgba(200,255,0,0.15)] text-[#C8FF00] border border-[rgba(200,255,0,0.4)]'
                : 'bg-[#C8FF00] text-[#07080D] hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Code'}
          </motion.button>
        </div>

        {/* Dependencies */}
        {component.dependencies && component.dependencies.length > 0 && (
          <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-[#0D0E16] border border-[rgba(255,255,255,0.06)]">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Dependencies:</span>
            {component.dependencies.map((dep) => (
              <code key={dep} className="px-2 py-0.5 rounded text-xs bg-[rgba(200,255,0,0.08)] text-[#C8FF00] font-mono">
                {dep}
              </code>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-0 bg-[#0D0E16] rounded-xl p-1 w-fit border border-[rgba(255,255,255,0.06)]">
          {(['preview', 'code'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'bg-[#1A1C2A] text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'preview' ? <Eye className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-0 rounded-b-xl rounded-tr-xl overflow-hidden border border-[rgba(255,255,255,0.08)] w-full h-[80vh] overflow-scroll content-editable">
          {activeTab === 'preview' ? (
            <iframe src={component.preview} className="w-full h-full border-0" />
          ) : (
            <CodeBlock
              code={component.code}
              language={`${component.slug}.tsx`}
            />
          )}
        </div>

        {/* Related components placeholder */}
        <div className="mt-16">
          <h2 className="text-3xl font-display text-white mb-8">MORE IN THIS CATEGORY</h2>
          <div className="text-center py-10 bg-[#0D0E16] rounded-xl border border-[rgba(255,255,255,0.06)]">
            <Link
              href={`/components/${component.category}`}
              className="inline-flex items-center gap-2 text-[#C8FF00] font-mono hover:underline"
            >
              Browse all {meta?.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
