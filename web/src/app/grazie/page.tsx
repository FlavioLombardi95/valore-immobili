/* Hallmark · design-system: DESIGN.md · page: grazie · noindex */
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Richiesta ricevuta',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://valore-immobili.it/' },
}

export default function GraziePage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="font-headline text-3xl font-extrabold text-secondary">Grazie, abbiamo ricevuto la tua richiesta</h1>
      <p className="mt-4 text-base text-slate">
        Un consulente di Valore Immobili ti contatterà entro 1 o 2 giorni lavorativi per organizzare il
        sopralluogo gratuito.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-rust px-6 font-headline font-bold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:translate-y-px"
      >
        Torna alla home
      </Link>
    </div>
  )
}
