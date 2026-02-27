'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Copy, Github, Star } from 'lucide-react'
import { CATEGORY_META, MYCOMPONENTS } from '@/data/mycomponents'
import { ComponentCard } from '@/components/showcase/ComponentCard'

// Marquee words
const marqueeWords = ['HERO SECTIONS', 'CARDS', 'TYPOGRAPHY', 'BUTTONS', 'FORMS', 'NAVIGATION', 'SECTIONS', 'ANIMATIONS', 'LOADERS', 'BADGES']

export default function HomePage() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -80])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const featuredComponents = MYCOMPONENTS.filter((c) => c.isNew).slice(0, 6)

  return (
    <div className="bg-[#07080D] min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(200,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className=" text-center px-4 w-full md:mx-auto flex flex-col items-center gap-6 mt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,255,0,0.25)] bg-[rgba(200,255,0,0.05)] text-[#C8FF00] md:text-sm font-mono text-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
            {MYCOMPONENTS.length}+ animated components — free forever
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(10px,10vw,80px)] md:text-[clamp(60px,12vw,130px)] font-display leading-none tracking-wider text-white]"
              style={{ textShadow: '0 0 80px rgba(200,255,0,0.12)' }}
            >
              COMPONENTS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(10px,10vw,80px)] md:text-[clamp(60px,12vw,130px)] font-display leading-none tracking-wider text-white]"
              style={{
                background: 'linear-gradient(135deg, #C8FF00 0%, #7FFF00 50%, #C8FF00 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 3s ease infinite',
              }}
            >
              THAT MOVE.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm"
          >
            Copy-paste animated React components — hero sections, cards, typography effects,
            and full page sections. Built with TypeScript, Tailwind & Framer Motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto z-10"
          >
            <Link
              href="/components"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#C8FF00] text-[#07080D] font-semibold rounded-xl 
              hover:shadow-[0_0_40px_rgba(200,255,0,0.5)] transition-all duration-300 hover:scale-105
              text-sm min-w-[250px] md:text-base font-mono
              "
            >
              Browse All Components
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[rgba(255,255,255,0.15)] text-white rounded-xl hover:border-[rgba(200,255,0,0.4)] transition-all duration-300 min-w-[250px] text-sm md:text-base font-mono"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-2 mt-10"
          >
            {[
              { value: `${MYCOMPONENTS.length}+`, label: 'Components' },
              { value: '8', label: 'Categories' },
              { value: '0', label: 'Dependencies' },
              { value: '∞', label: 'Customizable' },
            ].map((stat) => (
              <div key={stat.label} className="text-center w-32">
                <div className="text-xl md:text-4xl font-display text-[#C8FF00]">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-xs text-gray-600 font-mono uppercase">Scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#C8FF00] to-transparent"
          />
        </motion.div>
        </motion.div>


      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div className="relative py-5 border-y border-[rgba(255,255,255,0.06)] overflow-hidden bg-[#0D0E16]">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 text-sm font-mono text-gray-500 uppercase tracking-widest">
              {word}
              <span className="text-[#C8FF00]">✦</span>
            </span>
          ))}
        </div>
      </div>

            {/* ── FEATURED COMPONENTS ──────────────────────────────── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#C8FF00]" />
              <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-widest">Latest Drops</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-white">FRESH PICKS</h2>
          </div>
          <Link
            href="/components"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-[#C8FF00] transition-colors font-mono"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredComponents.map((c, i) => (
            <ComponentCard key={c.id} component={c} index={i} />
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#C8FF00]" />
            <span className="text-xs font-mono text-[#C8FF00] uppercase tracking-widest">Categories</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-white">
            WHAT'S INSIDE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORY_META.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/components/${cat.id}`}>
                <div
                  className="group relative p-6 rounded-xl bg-[#0D0E16] border border-[rgba(255,255,255,0.06)] hover:border-opacity-50 transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{ '--cat-color': cat.color } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 0% 0%, ${cat.color}10, transparent 70%)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="text-2xl mb-4 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                      style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                    >
                      {cat.icon}
                    </div>
                    <div className="font-semibold text-white mb-1 group-hover:text-white/90">{cat.label}</div>
                    <div className="text-xs text-gray-500 mb-3 leading-relaxed">{cat.description}</div>
                    <div
                      className="text-xs font-mono font-semibold"
                      style={{ color: cat.color }}
                    >
                      {cat.count} components →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0D0E16] border-y border-[rgba(255,255,255,0.06)]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-white mb-16"
          >
            HOW IT WORKS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse & Preview',
                description: 'Explore hundreds of components across categories. Each has a live preview.',
                icon: <Star className="w-6 h-6" />,
              },
              {
                step: '02',
                title: 'Copy the Code',
                description: 'Click the copy button to grab the full TypeScript source code instantly.',
                icon: <Copy className="w-6 h-6" />,
              },
              {
                step: '03',
                title: 'Paste & Customize',
                description: 'Drop it into your project and customize colors, animations, and content.',
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-2xl bg-[#12141F] border border-[rgba(255,255,255,0.06)] text-left"
              >
                <div className="absolute top-6 right-6 text-6xl font-display text-[rgba(200,255,0,0.06)]">{step.step}</div>
                <div className="w-12 h-12 rounded-xl bg-[rgba(200,255,0,0.08)] border border-[rgba(200,255,0,0.2)] text-[#C8FF00] flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            className="relative p-16 rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(200,255,0,0.08) 0%, rgba(255,77,106,0.06) 100%)',
              border: '1px solid rgba(200,255,0,0.2)',
              boxShadow: '0 0 80px rgba(200,255,0,0.08)',
            }}
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-display text-white mb-6">
                START BUILDING
              </h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                No installation. No account. Just pick a component, copy the code, and ship.
              </p>
              <Link
                href="/components"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#C8FF00] text-[#07080D] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(200,255,0,0.6)] transition-all duration-300 hover:scale-105"
              >
                Browse Components
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
