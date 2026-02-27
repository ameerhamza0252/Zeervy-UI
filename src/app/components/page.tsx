'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, X } from 'lucide-react'
import { COMPONENTS, CATEGORY_META } from '@/data/components'
import { ComponentCard } from '@/components/showcase/ComponentCard'
import { ComponentCategory } from '@/types'

export default function ComponentsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | 'all'>('all')

  const filtered = COMPONENTS.filter((c) => {
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory
    const matchesSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#07080D] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C8FF00]" />
            <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-widest">Library</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display text-white mb-4">ALL COMPONENTS</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Browse our full collection of animated, copy-paste ready components.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search components…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[#0D0E16] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(200,255,0,0.4)] font-body text-sm transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#C8FF00] text-[#07080D]'
                : 'bg-[#0D0E16] text-gray-400 border border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.2)]'
            }`}
          >
            All ({COMPONENTS.length})
          </button>
          {CATEGORY_META.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'text-[#07080D]'
                  : 'bg-[#0D0E16] text-gray-400 border border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.2)]'
              }`}
              style={
                activeCategory === cat.id
                  ? { background: cat.color }
                  : {}
              }
            >
              {cat.icon} {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-gray-500 font-mono">
          {filtered.length} component{filtered.length !== 1 ? 's' : ''} found
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <ComponentCard key={c.id} component={c} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No components found</h3>
            <p className="text-gray-500">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
