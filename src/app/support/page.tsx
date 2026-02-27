'use client'
import { motion } from 'framer-motion'
import { Heart, Check, Zap, Github, Twitter } from 'lucide-react'
import { SUPPORT_TIERS } from '@/data/support'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#07080D] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[rgba(255,77,106,0.1)] border border-[rgba(255,77,106,0.2)] text-4xl mb-8"
          >
            ❤️
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display text-white mb-6">
            SUPPORT THE
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #FF4D6A, #FF8C94)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              COMMUNITY
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Zeervy UI is free and open source. If it saves you time and helps you build better
            products, consider supporting our work. Every contribution keeps this project alive.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {SUPPORT_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.popular
                  ? 'border-2 border-[#C8FF00] bg-[rgba(200,255,0,0.04)]'
                  : 'border border-[rgba(255,255,255,0.08)] bg-[#0D0E16] hover:border-[rgba(255,255,255,0.2)]'
              }`}
              style={tier.popular ? { boxShadow: '0 0 50px rgba(200,255,0,0.1)' } : {}}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C8FF00] text-[#07080D] text-xs font-bold rounded-full font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-5xl mb-6">{tier.emoji}</div>
              <h3 className="text-2xl font-display text-white mb-2">{tier.name.toUpperCase()}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{tier.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-display ${tier.popular ? 'text-[#C8FF00]' : 'text-white'}`}>
                  ${tier.amount}
                </span>
                <span className="text-gray-500 text-sm">one-time</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? 'text-[#C8FF00]' : 'text-green-400'}`} />
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#C8FF00] text-[#07080D] hover:shadow-[0_0_30px_rgba(200,255,0,0.5)]'
                    : 'bg-[#1A1C2A] text-white border border-[rgba(255,255,255,0.1)] hover:border-[rgba(200,255,0,0.3)] hover:text-[#C8FF00]'
                }`}
              >
                Support — ${tier.amount}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Other ways to support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-display text-white mb-4">OTHER WAYS TO HELP</h2>
          <p className="text-gray-400 mb-10">Can&apos;t contribute financially&rsquo; Here are other ways to support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              className="flex items-center gap-3 px-8 py-4 bg-[#0D0E16] border border-[rgba(255,255,255,0.1)] text-white rounded-xl hover:border-[rgba(200,255,0,0.3)] transition-all"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center gap-3 px-8 py-4 bg-[#0D0E16] border border-[rgba(255,255,255,0.1)] text-white rounded-xl hover:border-[rgba(200,255,0,0.3)] transition-all"
            >
              <Twitter className="w-5 h-5" />
              Share on Twitter
            </a>
            <a
              href="https://github.com"
              className="flex items-center gap-3 px-8 py-4 bg-[#0D0E16] border border-[rgba(255,255,255,0.1)] text-white rounded-xl hover:border-[rgba(200,255,0,0.3)] transition-all"
            >
              <Zap className="w-5 h-5" />
              Contribute a Component
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
