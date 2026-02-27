"use client";

import { motion } from "framer-motion";
import { COMPONENTS } from "@/data/components";
import { ComponentCard } from "@/components/ui/ComponentCard";

export default function TypographyPage() {
  const typographyComponents = COMPONENTS.filter((c) => c.category === "typography");

  return (
    <div className="min-h-screen pt-16" style={{ background: "#04040a" }}>
      {/* Header */}
      <div className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.25)",
              }}
            >
              <span className="text-xl">Aa</span>
            </div>
            <span
              className="text-zinc-500 font-mono text-sm px-3 py-1 rounded-lg"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              category / typography
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Typography
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              that moves.
            </span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Animated headings, shimmer effects, typewriter animations, and display
            typography components — all ready to drop in.
          </p>
        </motion.div>

        {/* Typography preview showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20 p-12 rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, rgba(167,139,250,0.06), rgba(96,165,250,0.03))",
            border: "1px solid rgba(167,139,250,0.12)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative space-y-8">
            {/* Shimmer heading */}
            <div>
              <span className="text-zinc-600 text-xs font-mono mb-2 block">ShimmerText</span>
              <span
                className="text-5xl font-bold"
                style={{
                  fontFamily: "var(--font-syne)",
                  backgroundImage: "linear-gradient(90deg, #52525b 0%, #ffffff 25%, #52525b 50%, #ffffff 75%, #52525b 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Design that dazzles
              </span>
            </div>

            {/* Gradient heading */}
            <div>
              <span className="text-zinc-600 text-xs font-mono mb-2 block">GradientHeading</span>
              <h2
                className="text-5xl font-bold"
                style={{
                  fontFamily: "var(--font-syne)",
                  background: "linear-gradient(135deg, #00d4ff 0%, #a78bfa 50%, #f5c842 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Build the future
              </h2>
            </div>

            {/* Typewriter effect */}
            <div>
              <span className="text-zinc-600 text-xs font-mono mb-2 block">TypewriterText</span>
              <p
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ship
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 text-cyan-400"
                >
                  |
                </motion.span>
              </p>
            </div>

            {/* Split char animation */}
            <div>
              <span className="text-zinc-600 text-xs font-mono mb-2 block">SplitCharReveal</span>
              <div className="flex gap-1">
                {"ANIMATED".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: `hsl(${i * 30 + 180}, 70%, 70%)`,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Component grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-syne)" }}>
            Typography Components ({typographyComponents.length > 0 ? typographyComponents.length : "Coming soon"})
          </h2>

          {typographyComponents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {typographyComponents.map((c, i) => (
                <ComponentCard key={c.id} component={c} index={i} />
              ))}
            </div>
          ) : (
            <div
              className="py-20 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-4xl mb-3">✍️</div>
              <p className="text-zinc-500">Typography components coming very soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
