import type { Metadata } from 'next'
import { LeadForm } from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare Monza gratuita | immobile senza impegno',
  description:
    'Valutazione immobiliare a Monza: sopralluogo gratuito sul posto e senza impegno. Richiedi online in pochi minuti.',
  alternates: { canonical: 'https://valore-immobili.it/' },
}

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-surface to-surface-container">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <section className="order-2 space-y-6 lg:order-1">
          <div className="space-y-3 text-center lg:text-left">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary">
              Monza e Brianza
            </span>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-ink md:text-5xl text-balance">
              Scopri quanto vale realmente la tua casa
            </h1>
            <p className="text-base text-slate text-pretty md:text-lg">
              Sopralluogo gratuito a Monza e in Brianza, basato su vendite reali nella tua zona.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-body md:text-base">
            {[
              'Sopralluogo diretto da un consulente immobiliare',
              'Analisi reale del tuo immobile sul posto',
              'Stima di mercato aggiornata, senza impegno',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-success" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-line bg-white p-5">
            <h2 className="font-headline text-lg font-bold text-secondary">Perché non una valutazione online?</h2>
            <p className="mt-2 text-sm text-slate">
              Le stime automatiche non vedono lo stato dell’immobile, la luminosità, i lavori fatti o il contesto
              condominiale. Per questo valutiamo sul posto, senza costi e senza obbligo di mandato.
            </p>
          </div>
        </section>

        <div className="order-1 lg:order-2 lg:sticky lg:top-6" id="richiesta">
          <LeadForm sourcePage="/" />
        </div>
      </div>
    </div>
  )
}
