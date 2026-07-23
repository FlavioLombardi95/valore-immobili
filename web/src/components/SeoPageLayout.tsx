/* Hallmark · design-system: DESIGN.md · component: SeoPageLayout
 * Conversion shell: breadcrumb + H1 + prose + optional sticky form
 */
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
  /** Titolo sezione related — evita H2 clone “Continua a leggere” */
  relatedTitle?: string
  /** Se false: niente form sticky, solo CTA verso la richiesta. Default true sugli hub. */
  showForm?: boolean
}

export function SeoPageLayout({
  title,
  intro,
  children,
  sourcePage,
  defaultCity,
  breadcrumb,
  related = [],
  relatedTitle = 'Continua a leggere',
  showForm = true,
}: SeoPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <div
        className={
          showForm
            ? 'grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'
            : 'mx-auto max-w-3xl space-y-6'
        }
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <nav aria-label="Percorso" className="flex items-center gap-2 text-xs font-semibold text-slate">
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-body">{breadcrumb ?? title}</span>
            </nav>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
              {title}
            </h1>
            <p className="text-base text-slate text-pretty md:text-lg">{intro}</p>
          </div>
          <div className="rich-content">{children}</div>
          {!showForm && (
            <div className="border-t border-line pt-5">
              <p className="font-headline text-base font-bold text-ink">Vuoi una valutazione sul posto?</p>
              <p className="mt-1 text-sm text-slate">
                Sopralluogo gratuito a Monza e in Brianza, senza impegno.
              </p>
              <Link
                href={`/?from=${encodeURIComponent(sourcePage)}#richiesta`}
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-brand px-6 font-headline text-sm font-bold text-white transition hover:bg-brand-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:translate-y-px"
              >
                Richiedi la valutazione gratuita
              </Link>
            </div>
          )}
          <RelatedLinks title={relatedTitle} items={related} />
        </div>
        {showForm && (
          <div className="lg:sticky lg:top-6">
            <LeadForm sourcePage={sourcePage} defaultCity={defaultCity} />
          </div>
        )}
      </div>
    </div>
  )
}
