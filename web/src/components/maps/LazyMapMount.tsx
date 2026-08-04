'use client'

/* Lazy-mount Leaflet only when the map enters the viewport (Perf / BP). */
import { type ReactNode, useEffect, useRef, useState } from 'react'

type LazyMapMountProps = {
  children: ReactNode
  /** Placeholder height classes — match map canvas */
  className?: string
  label?: string
}

export function LazyMapMount({
  children,
  className = 'flex h-[min(70vw,420px)] w-full items-center justify-center bg-surface-container text-sm text-slate sm:h-[440px]',
  label = 'Caricamento mappa…',
}: LazyMapMountProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  if (!visible) {
    return (
      <div ref={ref} className={className} aria-hidden="true">
        {label}
      </div>
    )
  }

  return <>{children}</>
}
