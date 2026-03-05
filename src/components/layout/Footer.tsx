import Link from 'next/link'
import { ZeervyLogo } from '@/components/ui/ZeervyLogo'
import { Github, Twitter, Heart } from 'lucide-react'

const footerLinks = {
  Components: [
    { label: 'Hero Sections', href: '/components/hero' },
    { label: 'Cards', href: '/components/cards' },
    { label: 'Typography', href: '/components/typography' },
    { label: 'Buttons', href: '/components/buttons' },
    { label: 'Full Sections', href: '/components/sections' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'GitHub', href: 'https://github.com/ameerhamza0252/Zeervy-UI' },
    { label: 'Support Us', href: '/support' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0D0E16] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <ZeervyLogo className="h-8 w-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A curated collection of animated, copy-paste ready components for modern developers.
              Built with React, TypeScript, and Framer Motion.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="p-2 text-gray-500 hover:text-[#C8FF00] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-500 hover:text-[#C8FF00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Zeervy UI. License.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#FF4D6A] fill-[#FF4D6A] mx-1" /> for the developer community
          </p>
        </div>
      </div>
    </footer>
  )
}
