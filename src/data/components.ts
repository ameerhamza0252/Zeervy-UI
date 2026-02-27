import { ZeervyComponent, ComponentCategoryMeta } from '@/types'

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

export const COMPONENTS: ZeervyComponent[] = [
  // ─── HERO SECTIONS ───────────────────────────────────────────
  {
    id: 'hero-1',
    slug: 'gradient-hero',
    name: 'Gradient Glow Hero',
    description: 'Full-screen hero with animated gradient background, glowing headline, and floating CTA buttons.',
    category: 'hero',
    tags: ['hero', 'gradient', 'animated', 'fullscreen'],
    isNew: true,
    preview: `<section className="hero-gradient-glow" />`,
    code: `'use client'
import { motion } from 'framer-motion'

export function GradientGlowHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07080D]">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #C8FF00, transparent)' }}
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #FF4D6A, transparent)', right: '10%', top: '20%' }}
        animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,255,0,0.3)] text-[#C8FF00] text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          Now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-9xl font-display tracking-wider mb-6"
          style={{ textShadow: '0 0 60px rgba(200,255,0,0.3)' }}
        >
          BUILD FAST.
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #C8FF00, #7FFF00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            SHIP FASTER.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-body"
        >
          A curated library of animated, copy-paste ready components for modern web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-[#C8FF00] text-[#07080D] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(200,255,0,0.5)] transition-all duration-300 hover:scale-105">
            Browse Components
          </button>
          <button className="px-8 py-4 border border-[rgba(255,255,255,0.2)] text-white rounded-lg hover:border-[rgba(200,255,0,0.5)] transition-all duration-300">
            View on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  )
}`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-01',
  },
  {
    id: 'hero-2',
    slug: 'split-screen-hero',
    name: 'Split Screen Hero',
    description: 'Two-column hero with animated text on left and an interactive component demo on right.',
    category: 'hero',
    tags: ['hero', 'split', 'two-column', 'animated'],
    isNew: true,
    preview: `<section className="split-hero" />`,
    code: `'use client'
import { motion } from 'framer-motion'

export function SplitScreenHero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#07080D]">
      {/* Left */}
      <div className="flex flex-col justify-center px-12 py-20 border-r border-[rgba(255,255,255,0.05)]">
        {['DESIGN', 'BUILD', 'SHIP'].map((word, i) => (
          <motion.div
            key={word}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-8xl font-display tracking-wider leading-none"
            style={{ color: i === 1 ? '#C8FF00' : 'white' }}
          >
            {word}
          </motion.div>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 max-w-md text-lg"
        >
          Components that look incredible and work even better.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <button className="px-6 py-3 bg-[#C8FF00] text-[#07080D] font-semibold rounded-md">
            Get Started
          </button>
          <span className="text-gray-500 text-sm">Free forever. No account needed.</span>
        </motion.div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center bg-[#0D0E16] p-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md aspect-square rounded-2xl border border-[rgba(200,255,0,0.15)] bg-[#12141F] p-6 flex items-center justify-center"
          style={{ boxShadow: '0 0 60px rgba(200,255,0,0.08)' }}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-2xl font-display text-[#C8FF00]">LIVE PREVIEW</div>
            <div className="text-gray-500 mt-2 text-sm">Interactive demos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-01',
  },

  // ─── CARDS ───────────────────────────────────────────────────
  {
    id: 'card-1',
    slug: 'glow-card',
    name: 'Magnetic Glow Card',
    description: 'Card with a cursor-tracking glow effect that follows mouse movement.',
    category: 'cards',
    tags: ['card', 'glow', 'interactive', 'mouse-tracking'],
    isNew: true,
    preview: `<div className="glow-card" />`,
    code: `'use client'
import { useRef, useState } from 'react'

export function GlowCard({ title, description, icon }: {
  title: string
  description: string
  icon: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#12141F] p-6 cursor-pointer group"
      style={{
        background: \`radial-gradient(circle at \${glowPos.x}% \${glowPos.y}%, rgba(200,255,0,0.08) 0%, transparent 60%), #12141F\`,
        transition: 'background 0.1s',
      }}
    >
      <div className="absolute inset-0 rounded-xl border border-[rgba(200,255,0,0)] group-hover:border-[rgba(200,255,0,0.3)] transition-all duration-500" />
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}`,
    dependencies: [],
    createdAt: '2024-07-01',
  },
  {
    id: 'card-2',
    slug: 'flip-card',
    name: '3D Flip Card',
    description: 'Card with smooth 3D flip animation revealing content on the back.',
    category: 'cards',
    tags: ['card', '3d', 'flip', 'animation'],
    preview: `<div className="flip-card" />`,
    code: `'use client'
import { useState } from 'react'

export function FlipCard({ front, back }: {
  front: { title: string; icon: string; color: string }
  back: { description: string; cta: string }
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-64 h-80 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6 border border-[rgba(255,255,255,0.1)]"
          style={{ backfaceVisibility: 'hidden', background: '#12141F' }}
        >
          <div className="text-5xl mb-4">{front.icon}</div>
          <h3 className="text-xl font-semibold text-white">{front.title}</h3>
          <p className="text-gray-500 text-xs mt-3">Click to reveal</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: \`linear-gradient(135deg, \${front.color}22, #12141F)\`,
            border: \`1px solid \${front.color}44\`,
          }}
        >
          <p className="text-gray-300 text-sm text-center leading-relaxed mb-6">
            {back.description}
          </p>
          <button
            className="px-5 py-2 rounded-lg text-sm font-semibold"
            style={{ background: front.color, color: '#07080D' }}
          >
            {back.cta}
          </button>
        </div>
      </div>
    </div>
  )
}`,
    dependencies: [],
    createdAt: '2024-07-02',
  },

  // ─── TYPOGRAPHY ──────────────────────────────────────────────
  {
    id: 'typo-1',
    slug: 'split-text-reveal',
    name: 'Split Text Reveal',
    description: 'Text that splits by character and animates in from below, perfect for headings.',
    category: 'typography',
    tags: ['typography', 'animation', 'text-reveal', 'heading'],
    isNew: true,
    preview: `<h1 className="split-text" />`,
    code: `'use client'
import { motion } from 'framer-motion'

interface SplitTextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function SplitTextReveal({ text, className = '', delay = 0 }: SplitTextRevealProps) {
  const words = text.split(' ')

  return (
    <div className={\`overflow-hidden \${className}\`}>
      <div className="flex flex-wrap gap-x-4">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="overflow-hidden">
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + wordIndex * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Usage:
// <SplitTextReveal
//   text="Build beautiful interfaces faster"
//   className="text-6xl font-display"
//   delay={0.2}
// />`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-01',
  },
  {
    id: 'typo-2',
    slug: 'typewriter-text',
    name: 'Typewriter Effect',
    description: 'Classic typewriter animation with cursor blink and optional loop.',
    category: 'typography',
    tags: ['typography', 'typewriter', 'animation', 'cursor'],
    preview: `<span className="typewriter" />`,
    code: `'use client'
import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export function TypewriterText({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = '',
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1))
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(currentWord.slice(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-0.5 h-[1em] bg-[#C8FF00] ml-1 align-middle animate-pulse" />
    </span>
  )
}

// Usage:
// <TypewriterText
//   words={['Build Faster.', 'Ship Earlier.', 'Look Amazing.']}
//   className="text-4xl font-display text-[#C8FF00]"
// />`,
    dependencies: [],
    createdAt: '2024-07-02',
  },

  // ─── BUTTONS ─────────────────────────────────────────────────
  {
    id: 'btn-1',
    slug: 'shimmer-button',
    name: 'Shimmer Button',
    description: 'Button with an animated shimmer sweep effect on hover.',
    category: 'buttons',
    tags: ['button', 'shimmer', 'hover', 'animation'],
    isNew: true,
    preview: `<button className="shimmer-btn" />`,
    code: `'use client'
import { ReactNode } from 'react'

interface ShimmerButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
}

export function ShimmerButton({ children, onClick, variant = 'primary', className = '' }: ShimmerButtonProps) {
  const base = "relative overflow-hidden px-8 py-3 rounded-lg font-semibold transition-all duration-300 group"
  const variants = {
    primary: "bg-[#C8FF00] text-[#07080D] hover:shadow-[0_0_30px_rgba(200,255,0,0.5)]",
    outline: "border border-[rgba(200,255,0,0.5)] text-[#C8FF00] hover:border-[#C8FF00]",
  }

  return (
    <button onClick={onClick} className={\`\${base} \${variants[variant]} \${className}\`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }}
      />
    </button>
  )
}`,
    dependencies: [],
    createdAt: '2024-07-01',
  },
  {
    id: 'btn-2',
    slug: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'Button that magnetically attracts to the cursor on hover with smooth spring animation.',
    category: 'buttons',
    tags: ['button', 'magnetic', 'spring', 'physics'],
    preview: `<button className="magnetic-btn" />`,
    code: `'use client'
import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.4)
    y.set((e.clientY - centerY) * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        className={\`px-8 py-4 rounded-full font-semibold transition-all duration-200 \${
          hovered
            ? 'bg-[#C8FF00] text-[#07080D] shadow-[0_0_40px_rgba(200,255,0,0.6)]'
            : 'bg-transparent border border-[rgba(200,255,0,0.4)] text-white'
        } \${className}\`}
      >
        {children}
      </button>
    </motion.div>
  )
}`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-02',
  },

  // ─── SECTIONS ────────────────────────────────────────────────
  {
    id: 'section-1',
    slug: 'features-bento',
    name: 'Bento Features Grid',
    description: 'A bento-grid style features section with animated cards of varying sizes.',
    category: 'sections',
    tags: ['section', 'features', 'bento', 'grid', 'animated'],
    isNew: true,
    preview: `<section className="bento-features" />`,
    code: `'use client'
import { motion } from 'framer-motion'

const features = [
  { title: 'Lightning Fast', description: 'Optimized for performance out of the box', icon: '⚡', span: 'col-span-2' },
  { title: 'Animated', description: 'Every component ships with smooth animations', icon: '✨', span: 'col-span-1' },
  { title: 'TypeScript', description: 'Full type safety with comprehensive types', icon: '📘', span: 'col-span-1' },
  { title: 'Accessible', description: 'WCAG 2.1 AA compliant components', icon: '♿', span: 'col-span-1' },
  { title: 'Open Source', description: 'MIT licensed, free forever for everyone', icon: '🔓', span: 'col-span-2' },
]

export function BentoFeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-[#07080D]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-display text-center mb-16 text-white"
        >
          EVERYTHING YOU NEED
        </motion.h2>

        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className={\`\${feature.span} bg-[#12141F] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:border-[rgba(200,255,0,0.3)] transition-all duration-300\`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-01',
  },

  // ─── OTHER ───────────────────────────────────────────────────
  {
    id: 'other-1',
    slug: 'animated-badge',
    name: 'Animated Badge',
    description: 'Status badge with pulsing dot indicator and subtle glow.',
    category: 'other',
    tags: ['badge', 'status', 'indicator', 'pulse'],
    preview: `<span className="animated-badge" />`,
    code: `interface BadgeProps {
  label: string
  status?: 'active' | 'beta' | 'new' | 'deprecated'
}

const statusConfig = {
  active: { color: '#22C55E', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)' },
  beta: { color: '#C8FF00', bg: 'rgba(200,255,0,0.1)', border: 'rgba(200,255,0,0.3)' },
  new: { color: '#818CF8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.3)' },
  deprecated: { color: '#FF4D6A', bg: 'rgba(255,77,106,0.1)', border: 'rgba(255,77,106,0.3)' },
}

export function AnimatedBadge({ label, status = 'active' }: BadgeProps) {
  const { color, bg, border } = statusConfig[status]

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium"
      style={{ background: bg, border: \`1px solid \${border}\`, color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: color, boxShadow: \`0 0 6px \${color}\` }}
      />
      {label}
    </span>
  )
}`,
    dependencies: [],
    createdAt: '2024-07-01',
  },
  {
    id: 'other-2',
    slug: 'scroll-progress',
    name: 'Scroll Progress Bar',
    description: 'A thin progress bar at the top of the page that tracks scroll position.',
    category: 'other',
    tags: ['scroll', 'progress', 'indicator', 'top-bar'],
    preview: `<div className="scroll-progress" />`,
    code: `'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((scrollTop / docHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-[rgba(255,255,255,0.05)]">
      <motion.div
        className="h-full bg-[#C8FF00]"
        style={{
          width: smoothProgress.get() + '%',
          boxShadow: '0 0 10px rgba(200,255,0,0.8)',
        }}
      />
    </div>
  )
}`,
    dependencies: ['framer-motion'],
    createdAt: '2024-07-02',
  },
]

export function getComponentsByCategory(category: string): ZeervyComponent[] {
  return COMPONENTS.filter((c) => c.category === category)
}

export function getComponentBySlug(slug: string): ZeervyComponent | undefined {
  return COMPONENTS.find((c) => c.slug === slug)
}
