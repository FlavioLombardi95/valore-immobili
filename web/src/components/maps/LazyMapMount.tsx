'use client'

/* Mount Leaflet solo dopo gesto utente (evita tile OSM in Lighthouse LCP/BP). */
import { type ReactNode, useState } from 'react'

type LazyMapMountProps = {
  children: ReactNode
  className?: string
  label?: string
  buttonLabel?: string
}

export function LazyMapMount({
  children,
  className = 'flex h-[min(70vw,420px)] w-full flex-col items-center justify-center gap-3 bg-surface-container px-4 text-center text-sm text-slate sm:h-[440px]',
  label = 'La mappa interattiva si carica solo se la richiedi.',
  buttonLabel = 'Mostra mappa',
}: LazyMapMountProps) {
  const [visible, setVisible] = useState(false)

  if (!visible) {
    return (
      <div className={className}>
        <p>{label}</p>
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-rust px-5 text-sm font-bold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          {buttonLabel}
        </button>
      </div>
    )
  }

  return <>{children}</>
}
