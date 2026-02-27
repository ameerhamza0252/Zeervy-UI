interface LogoProps {
  className?: string
  variant?: 'full' | 'icon'
}

export function ZeervyLogo({ className = 'h-8 w-auto', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect width="48" height="48" rx="10" fill="#0D0E16" />
        {/* Z letterform built from geometric slashes */}
        <line x1="10" y1="10" x2="38" y2="10" stroke="#C8FF00" strokeWidth="4" strokeLinecap="round" />
        <line x1="38" y1="10" x2="10" y2="38" stroke="#C8FF00" strokeWidth="4" strokeLinecap="round" />
        <line x1="10" y1="38" x2="38" y2="38" stroke="#C8FF00" strokeWidth="4" strokeLinecap="round" />
        {/* Accent dot */}
        <circle cx="38" cy="38" r="4" fill="#FF4D6A" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon mark */}
      <rect width="48" height="48" rx="10" fill="#0D0E16" />
      <line x1="10" y1="10" x2="38" y2="10" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="38" y1="10" x2="10" y2="38" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="10" y1="38" x2="38" y2="38" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="38" cy="38" r="3.5" fill="#FF4D6A" />

      {/* Wordmark "ZEERVY" */}
      <text
        x="60"
        y="33"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="28"
        letterSpacing="3"
        fill="white"
      >
        ZEERVY
      </text>
      {/* "UI" accent */}
      <text
        x="190"
        y="33"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="28"
        letterSpacing="2"
        fill="#C8FF00"
      >
        UI
      </text>
    </svg>
  )
}
