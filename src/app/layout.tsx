import type { Metadata } from 'next';
import '../styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Zeervy UI — Animated Components for Modern Interfaces',
  description: 'Copy-paste animated UI components for developers. Heroes, cards, typography, and full sections with buttery smooth animations.',
  keywords: ['UI components', 'animated', 'React', 'Next.js', 'Tailwind CSS', 'copy paste'],
  openGraph: {
    title: 'Zeervy UI',
    description: 'Animated UI components for developers who refuse to ship boring interfaces.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05080d] text-slate-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
