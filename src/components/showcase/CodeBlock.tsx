'use client';
import { useState } from 'react';

interface Props {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl overflow-scroll border border-white/10">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="ml-3 text-zinc-500 text-xs font-mono">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            copied
              ? 'bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/30'
              : 'bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
          }`}
        >
          {copied ? '✓ Copied' : '⎘ Copy'}
        </button>
      </div>

      {/* Code content */}
      <div className="bg-[#0a0e17] overflow-scroll">
        <pre className="p-5 text-sm font-mono leading-7 text-zinc-300 whitespace-pre">
          <code className="text-zinc-300">
            {code.split('\n').map((line, i) => (
              <span key={i} className="block">
                <span className="select-none text-zinc-700 mr-4 text-right inline-block w-6">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: highlightLine(line) }} />
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightLine(line: string): string {
  return line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Keywords
    .replace(/\b(export|default|import|from|const|let|var|function|return|if|else|type|interface|extends|useState|useEffect|useRef|async|await|class|new|typeof|instanceof)\b/g, '<span style="color:#ff79c6">$1</span>')
    // Strings
    .replace(/('.*?'|".*?"|`.*?`)/g, '<span style="color:#f1fa8c">$1</span>')
    // Comments
    .replace(/(\/\/.*)/g, '<span style="color:#6272a4">$1</span>')
    // JSX tags
    .replace(/(&lt;\/?[A-Z][A-Za-z]*)/g, '<span style="color:#50fa7b">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span style="color:#bd93f9">$1</span>');
}
