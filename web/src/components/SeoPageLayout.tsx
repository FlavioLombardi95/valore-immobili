import type { ReactNode } from 'react'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { RelatedLinks, type RelatedLink } from '@/components/RelatedLinks'

type SeoPageProps = {
  title: string
  intro: string
  children: ReactNode
  sourcePage: string
  defaultCity?: string
  breadcrumb?: string
  related?: RelatedLink[]
}

export function SeoPageLayout({
  title,
  intro,
  children,
  sourcePage,
  defaultCity,
  breadcrumb,
  related = [],
}: SeoPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="order-2 space-y-6 lg:order-1">
          <div className="space-y-3">
            <nav aria-label="Percorso" className="flex items-center gap-2 text-xs font-semibold text-slate">
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-body">{breadcrumb ?? title}</span>
            </nav>
            <span className="inline-flex rounded-full bg-surface-container px-3 py-1 text-xs font-semibold text-secondary">
              Monza e Brianza
            </span>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-ink md:text-4xl text-balance">
              {title}
            </h1>
            <p className="text-base text-slate text-pretty md:text-lg">{intro}</p>
          </div>
          <div className="rich-content">{children}</div>
          <RelatedLinks items={related} />
        </div>
        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <LeadForm sourcePage={sourcePage} defaultCity={defaultCity} />
        </div>
      </div>
    </div>
  )
}
