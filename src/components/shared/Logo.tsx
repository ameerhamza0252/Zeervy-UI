import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "full" | "mark";
}

export function Logo({ size = 32, className, variant = "mark" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        className={cn("shrink-0", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#f5c842" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="48" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5c842" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer hexagon */}
        <path
          d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z"
          fill="url(#logoGrad2)"
          stroke="url(#logoGrad)"
          strokeWidth="1.5"
        />

        {/* Circuit lines - decorative */}
        <line x1="24" y1="2" x2="24" y2="8" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="44" y1="13.5" x2="38.5" y2="16.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="44" y1="34.5" x2="38.5" y2="31.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="24" y1="46" x2="24" y2="40" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="4" y1="34.5" x2="9.5" y2="31.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="4" y1="13.5" x2="9.5" y2="16.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.5" />

        {/* Corner dots */}
        <circle cx="24" cy="4.5" r="1.5" fill="#00d4ff" opacity="0.8" />
        <circle cx="42" cy="14.5" r="1.5" fill="#00d4ff" opacity="0.6" />
        <circle cx="42" cy="33.5" r="1.5" fill="#f5c842" opacity="0.6" />
        <circle cx="24" cy="43.5" r="1.5" fill="#f5c842" opacity="0.8" />
        <circle cx="6" cy="33.5" r="1.5" fill="#f5c842" opacity="0.6" />
        <circle cx="6" cy="14.5" r="1.5" fill="#00d4ff" opacity="0.6" />

        {/* Z letterform */}
        <path
          d="M14 16H30L14 28H30"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Accent line under Z */}
        <line x1="14" y1="32" x2="30" y2="32" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Logo size={size} variant="mark" />
      <span
        className="font-bold text-white tracking-tight"
        style={{
          fontSize: size * 0.6,
          fontFamily: "var(--font-syne)",
        }}
      >
        Zeervy{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #00d4ff, #f5c842)",
          }}
        >
          UI
        </span>
      </span>
    </div>
  );
}
