"use client";

import { motion } from "framer-motion";
import { MYCOMPONENTS } from "@/data/mycomponents";
import { ComponentCard } from "@/components/ui/ComponentCard";

export default function SectionsPage() {
  const sectionComponents = MYCOMPONENTS.filter(
    (c) => c.category === "sections" || c.category === "hero"
  );

  return (
    <div className="min-h-screen pt-16" style={{ background: "#04040a" }}>
      <div className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Full Sections
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl">
            Complete, production-ready page sections. Hero areas, feature grids, pricing blocks,
            testimonials, CTAs — all animated and ready to drop in.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌟",
              title: "Hero Sections",
              desc: "Animated full-screen hero areas for landing pages",
              count: 8,
              color: "#00d4ff",
            },
            {
              icon: "📊",
              title: "Feature Grids",
              desc: "Showcase product features with visual impact",
              count: 6,
              color: "#a78bfa",
            },
            {
              icon: "💬",
              title: "Testimonials",
              desc: "Social proof sections with scroll animations",
              count: 4,
              color: "#34d399",
            },
            {
              icon: "💲",
              title: "Pricing Tables",
              desc: "Clear, animated pricing comparison layouts",
              count: 3,
              color: "#f5c842",
            },
            {
              icon: "📣",
              title: "CTA Sections",
              desc: "Conversion-focused call-to-action blocks",
              count: 5,
              color: "#fb923c",
            },
            {
              icon: "👣",
              title: "Footers",
              desc: "Complete footer layouts with animations",
              count: 4,
              color: "#f472b6",
            },
          ].map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl cursor-pointer transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid rgba(${hexToRgb(cat.color)}, 0.12)`,
              }}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-white font-semibold mb-1">{cat.title}</h3>
              <p className="text-zinc-500 text-sm mb-3">{cat.desc}</p>
              <span className="text-xs" style={{ color: cat.color }}>
                {cat.count} sections
              </span>
            </motion.div>
          ))}
        </div>

        {/* Components */}
        <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-syne)" }}>
          Available Sections
        </h2>
        {sectionComponents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectionComponents.map((c, i) => (
              <ComponentCard key={c.id} component={c} index={i} />
            ))}
          </div>
        ) : (
          <div
            className="py-20 rounded-2xl text-center"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-4xl mb-3">🏗️</div>
            <p className="text-zinc-500">Full sections coming soon. Check back weekly!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
