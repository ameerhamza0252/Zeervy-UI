'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07080D] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div
          className="text-[clamp(120px,25vw,240px)] font-display leading-none mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(200,255,0,0.2), rgba(200,255,0,0.05))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <h1 className="text-4xl font-display text-white mb-4">PAGE NOT FOUND</h1>
        <p className="text-gray-400 mb-10 max-w-sm">
          &quot;The component or page you&apos;re looking for doesn&apos;t exist yet. Check back soon!&quot;
          </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8FF00] text-[#07080D] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(200,255,0,0.4)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
