type LogoProps = {
  variant?: 'dark' | 'light'
  className?: string
  markClassName?: string
}

/**
 * Local valuation mark: a clean, empty place pin (soglia locale) in the brand
 * orange, readable one-color on both light and dark. No house/roof, no arrow.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path
        d="M20 45C20 45 6 30.5 6 18C6 10.27 12.27 4 20 4C27.73 4 34 10.27 34 18C34 30.5 20 45 20 45Z"
        stroke="var(--brand-orange, #f26522)"
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({ variant = 'dark', className, markClassName }: LogoProps) {
  const strong = variant === 'light' ? 'text-cloud' : 'text-ink'
  const soft = variant === 'light' ? 'text-slate-300' : 'text-slate'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className={`${markClassName ?? 'h-9 w-auto'} shrink-0 ${strong}`} />
      <span className="font-headline leading-none">
        <span className={`text-[1.35rem] font-extrabold tracking-[-0.03em] ${strong}`}>Valore</span>{' '}
        <span className={`text-[1.35rem] font-medium tracking-[-0.02em] ${soft}`}>Immobili</span>
      </span>
    </span>
  )
}
