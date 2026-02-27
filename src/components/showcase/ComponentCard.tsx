'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { ZeervyComponent } from '@/data/components';

interface Props {
  component: ZeervyComponent;
  showCategory?: boolean;
}

export function ComponentCard({ component, showCategory = false }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#00ff9d]/20 transition-all duration-200 overflow-hidden hover:-translate-y-1">
      {/* Preview area */}
      <div className="relative h-48 bg-zinc-950/80 border-b border-white/5 flex items-center justify-center overflow-hidden grid-bg">
      
       <iframe src={component.preview}></iframe>
       

        {/* Type label */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-md bg-black/40 text-[#00ff9d] text-xs font-mono border border-[#00ff9d]/20">
            {component.animationType}
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-1">
          {component.isNew && (
            <span className="px-2 py-0.5 rounded-full bg-[#00ff9d]/15 text-[#00ff9d] text-xs font-mono border border-[#00ff9d]/30">
              NEW
            </span>
          )}
        </div>

        {/* Quick copy on hover */}
        <button
          onClick={handleCopy}
          className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/60 backdrop-blur-sm"
        >
          <span className={`px-5 py-2.5 rounded-xl font-display font-bold text-sm border transition-all ${
            copied
              ? 'bg-[#00ff9d] text-zinc-950 border-[#00ff9d]'
              : 'bg-zinc-800 text-white border-white/20 hover:border-[#00ff9d]/40'
          }`}>
            {copied ? '✓ Copied!' : '⎘ Copy Code'}
          </span>
        </button>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-bold text-white text-lg leading-tight">{component.name}</h3>
          {showCategory && (
            <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs capitalize">{component.category}</span>
          )}
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">{component.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {component.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-500 text-xs font-mono">
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/components/${component.category}/${component.slug}`}
            className="flex-1 py-2.5 text-center text-sm font-display font-bold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={handleCopy}
            className={`flex-1 py-2.5 text-sm font-display font-bold rounded-xl transition-all ${
              copied
                ? 'bg-[#00ff9d] text-zinc-950'
                : 'bg-[#00ff9d]/15 text-[#00ff9d] hover:bg-[#00ff9d]/25'
            }`}
          >
            {copied ? '✓ Copied' : '⎘ Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
