"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Zap, Tag, Calendar, Box } from "lucide-react";
import { COMPONENTS } from "@/data/components";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { formatDate } from "@/lib/utils";

export default function ComponentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const component = COMPONENTS.find((c) => c.id === id);

  if (!component) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16" style={{ background: "#04040a" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-zinc-600 mb-8"
        >
          <Link href="/components" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <ArrowLeft size={14} />
            Components
          </Link>
          <span>/</span>
          <span className="text-zinc-400">{component.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                {component.isNew && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.3)",
                      color: "#00d4ff",
                    }}
                  >
                    New
                  </span>
                )}
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#a1a1aa",
                  }}
                >
                  {component.category}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {component.name}
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">{component.description}</p>
            </motion.div>

            {/* Preview area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="relative h-64 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="text-zinc-600 text-sm mb-2">Live Preview</div>
                  <div
                    className="px-6 py-3 rounded-xl text-sm font-semibold inline-block"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: "#00d4ff",
                    }}
                  >
                    ✦ Connect your CMS to add live previews
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Code tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Source Code
              </h2>
              <CodeBlock code={component.code.tsx} language="tsx" />
              {component.code.css && (
                <div className="mt-4">
                  <CodeBlock code={component.code.css} language="css" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-white font-semibold mb-5">Details</h3>
              <div className="space-y-4 text-sm">
                {component.animationType && (
                  <div className="flex items-start gap-3">
                    <Zap size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-zinc-500 mb-0.5">Animation</div>
                      <div className="text-white capitalize">{component.animationType}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Calendar size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-zinc-500 mb-0.5">Added</div>
                    <div className="text-white">{formatDate(component.createdAt)}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-zinc-500 mb-2">Tags</div>
                    <div className="flex flex-wrap gap-1.5">
                      {component.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs text-zinc-500 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dependencies */}
            {component.dependencies && component.dependencies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3 className="text-white font-semibold mb-4">Dependencies</h3>
                <div className="space-y-2">
                  {component.dependencies.map((dep) => (
                    <div
                      key={dep}
                      className="flex items-center justify-between py-2 px-3 rounded-lg text-sm"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <div className="flex items-center gap-2">
                        <Box size={13} className="text-zinc-600" />
                        <span className="text-zinc-300 font-mono">{dep}</span>
                      </div>
                      <a
                        href={`https://www.npmjs.com/package/${dep}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-zinc-300 transition-colors"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 p-3 rounded-lg font-mono text-xs"
                  style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-zinc-500">npm install </span>
                  <span className="text-cyan-400">{component.dependencies.join(" ")}</span>
                </div>
              </motion.div>
            )}

            {/* Related components */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-white font-semibold mb-4">More in {component.category}</h3>
              <div className="space-y-2">
                {COMPONENTS.filter(
                  (c) => c.category === component.category && c.id !== component.id
                )
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.id}
                      href={`/component/${related.id}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg text-sm group transition-all hover:bg-white/5"
                    >
                      <span className="text-zinc-400 group-hover:text-white transition-colors">
                        {related.name}
                      </span>
                      <ArrowLeft
                        size={12}
                        className="text-zinc-600 group-hover:text-cyan-400 transition-colors rotate-180"
                      />
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
