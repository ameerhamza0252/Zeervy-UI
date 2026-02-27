"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Zap, ArrowRight } from "lucide-react";
import type { ComponentItem } from "@/types";
import { cn } from "@/lib/utils";

const ANIMATION_COLORS: Record<string, string> = {
  fade: "#60a5fa",
  slide: "#34d399",
  scale: "#a78bfa",
  rotate: "#f472b6",
  morph: "#fb923c",
  particle: "#00d4ff",
};

interface ComponentCardProps {
  component: ComponentItem;
  index?: number;
}

export function ComponentCard({ component, index = 0 }: ComponentCardProps) {
  const animColor = component.animationType
    ? ANIMATION_COLORS[component.animationType]
    : "#71717a";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/component/${component.id}`} className="block group">
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          {/* Hover glow border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ border: "1px solid rgba(0,212,255,0.2)" }}
          />

          {/* Preview area */}
          <div
            className="relative h-44 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Grid background in preview */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Animated preview placeholder */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              className="relative z-10"
            >
              <div
                className="px-6 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: `rgba(${hexToRgb(animColor)}, 0.1)`,
                  border: `1px solid rgba(${hexToRgb(animColor)}, 0.3)`,
                  color: animColor,
                }}
              >
                Preview
              </div>
            </motion.div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              {component.isNew && (
                <span
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    color: "#00d4ff",
                  }}
                >
                  <Sparkles size={9} />
                  New
                </span>
              )}
            </div>

            {/* Animation type badge */}
            {component.animationType && (
              <div
                className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                style={{
                  background: `rgba(${hexToRgb(animColor)}, 0.08)`,
                  border: `1px solid rgba(${hexToRgb(animColor)}, 0.2)`,
                  color: animColor,
                }}
              >
                <Zap size={9} />
                {component.animationType}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-cyan-300 transition-colors">
              {component.name}
            </h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
              {component.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {component.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-xs text-zinc-500 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {component.dependencies?.map((dep) => (
                  <span
                    key={dep}
                    className="px-2 py-0.5 rounded text-xs text-zinc-600"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {dep}
                  </span>
                ))}
              </div>

              <span className="flex items-center gap-1 text-xs text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                View code <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
