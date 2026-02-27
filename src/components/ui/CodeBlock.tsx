"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  className,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "relative group rounded-xl overflow-hidden text-sm font-mono",
        className
      )}
      style={{
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-zinc-500 text-xs">{language}</span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
            copied
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-white/5 text-zinc-400 hover:text-white border border-white/[0.06] hover:border-white/10"
          )}
        >
          {copied ? (
            <>
              <Check size={12} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4 max-h-96">
        <pre className="text-zinc-300 leading-relaxed">
          {showLineNumbers ? (
            lines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="select-none text-zinc-700 text-right w-6 shrink-0">
                  {i + 1}
                </span>
                <span>{highlightLine(line)}</span>
              </div>
            ))
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
}

// Simple syntax highlighting via span coloring
function highlightLine(line: string): React.ReactNode {
  // Very basic tokenization for visual effect
  const parts: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  // Strings
  const stringRegex = /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g;
  const keywordRegex = /\b(import|export|from|const|let|var|function|return|if|else|type|interface|class|extends|default|async|await|new|true|false|null|undefined)\b/g;
  const commentRegex = /(\/\/.*$)/;

  if (commentRegex.test(line)) {
    return <span className="text-zinc-600">{line}</span>;
  }

  // Simple replacement for visual nicety
  const colored = line
    .replace(
      /\b(import|export|from|const|let|var|function|return|if|else|type|interface|class|extends|default|async|await|new)\b/g,
      "§KEYWORD§$1§END§"
    )
    .replace(/(["'`][^"'`]*["'`])/g, "§STRING§$1§END§")
    .replace(/\b(true|false|null|undefined)\b/g, "§BOOL§$1§END§")
    .replace(/(\b\d+\b)/g, "§NUM§$1§END§");

  const tokens = colored.split(/§(KEYWORD|STRING|BOOL|NUM|END)§/);
  let currentType = "text";

  return (
    <>
      {tokens.map((token, i) => {
        if (token === "KEYWORD") { currentType = "keyword"; return null; }
        if (token === "STRING") { currentType = "string"; return null; }
        if (token === "BOOL") { currentType = "bool"; return null; }
        if (token === "NUM") { currentType = "num"; return null; }
        if (token === "END") { currentType = "text"; return null; }

        const colors: Record<string, string> = {
          keyword: "#a78bfa",
          string: "#86efac",
          bool: "#f5c842",
          num: "#fb923c",
          text: "#d4d4d8",
        };

        return (
          <span key={i} style={{ color: colors[currentType] || "#d4d4d8" }}>
            {token}
          </span>
        );
      })}
    </>
  );
}
