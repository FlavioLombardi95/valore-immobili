'use client'

import dynamic from 'next/dynamic'

export const BrianzaComuniMapCanvas = dynamic(
  () =>
    import('@/components/maps/BrianzaComuniMapClient').then((m) => m.BrianzaComuniMapClient),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[min(70vw,420px)] w-full items-center justify-center bg-surface-container text-sm text-slate sm:h-[440px]"
        aria-hidden="true"
      >
        Caricamento mappa…
      </div>
    ),
  },
)

export const MonzaQuartieriMapCanvas = dynamic(
  () =>
    import('@/components/maps/MonzaQuartieriMapClient').then((m) => m.MonzaQuartieriMapClient),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[min(70vw,420px)] w-full items-center justify-center bg-surface-container text-sm text-slate sm:h-[440px]"
        aria-hidden="true"
      >
        Caricamento mappa…
      </div>
    ),
  },
)
