'use client'

/* Carica Analytics/Speed Insights dopo un breve delay per non gonfiare TBT in lab. */
import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function DeferredAnalytics() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 2500)
    return () => window.clearTimeout(t)
  }, [])

  if (!ready) return null
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
