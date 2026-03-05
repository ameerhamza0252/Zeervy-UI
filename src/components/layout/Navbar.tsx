'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ZeervyLogo } from '@/components/ui/ZeervyLogo'
import { Menu, X, Search } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/components', label: 'Components' },
  { href: '/support', label: 'Support Us' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(7,8,13,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <ZeervyLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.label === 'Support Us'
                    ? 'text-[#C8FF00] hover:text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
            <Link
              href="/components"
              className="px-5 py-2 bg-[#C8FF00] text-[#07080D] text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all duration-300 hover:scale-105"
            >
              Browse
            </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>
            {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0D0E16] border-b border-[rgba(255,255,255,0.08)] p-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-gray-300 hover:text-white border-b border-[rgba(255,255,255,0.06)]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </>
  )
}
