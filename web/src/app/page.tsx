import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { RelatedLinks } from '@/components/RelatedLinks'
import heroImage from '../../public/assets/hero-villa-reale-monza.jpg'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare Monza gratuita | immobile senza impegno',
  description:
    'Valutazione immobiliare a Monza e Brianza: sopralluogo gratuito sul posto e senza impegno. Un consulente locale analizza il tuo immobile e i prezzi reali della zona.',
  alternates: { canonical: 'https://valore-immobili.it/' },
}

const highlights = [
  'Sopralluogo diretto con un consulente della zona, non una stima automatica',
  'Analisi reale di stato, esposizione, piano, contesto e classe energetica',
  'Confronto con vendite recenti nel tuo quartiere, non medie nazionali',
  'Nessun costo e nessun obbligo di affidare la vendita',
]

const steps = [
  {
    title: 'Compili il modulo',
    text: 'Bastano i dati principali dell’immobile e un recapito. Meno di due minuti.',
  },
  {
    title: 'Ti richiamiamo',
    text: 'Un consulente locale ti contatta entro 1-2 giorni lavorativi per fissare il sopralluogo.',
  },
  {
    title: 'Sopralluogo sul posto',
    text: 'Vediamo l’immobile di persona: stato, luminosità, planimetria, contesto condominiale.',
  },
  {
    title: 'Ricevi la valutazione',
    text: 'Una stima motivata sul mercato reale della zona, con cui decidere prezzo e tempi.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero fotografico — conversione sotto, non nello stesso blocco */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={heroImage}
          alt="La Villa Reale di Monza al tramonto, vista dai giardini"
          placeholder="blur"
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40"
        />
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold tracking-wide text-cloud/80">Monza e Brianza</span>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-cloud text-balance md:text-5xl">
              Scopri quanto vale davvero la tua casa
            </h1>
            <p className="max-w-xl text-base text-slate-200 text-pretty md:text-lg">
              Valutazione gratuita con sopralluogo a Monza e in Brianza, basata su vendite reali nella tua
              zona. Un parere concreto prima di decidere se e come vendere.
            </p>
            <div className="pt-2">
              <a
                href="#richiesta"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-headline text-base font-bold text-white transition hover:bg-brand-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cloud focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-px"
              >
                Vai al modulo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blocco conversione: trust breve + form subito dopo l’hero */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:py-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
              Una stima sul posto, non un algoritmo
            </h2>
            <ul className="max-w-xl space-y-2 border-l-2 border-brand pl-4 text-sm text-body md:text-base">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="max-w-xl text-sm leading-relaxed text-slate md:text-base">
              Compila il modulo: ti richiamiamo entro 1–2 giorni lavorativi per organizzare il sopralluogo.
              Gratuito e senza impegno. Dettagli su{' '}
              <Link href="/come-funziona" className="font-semibold text-secondary underline underline-offset-2">
                come funziona
              </Link>
              .
            </p>
          </div>
          <div className="lg:sticky lg:top-6" id="richiesta">
            <LeadForm sourcePage="/" />
          </div>
        </div>
      </section>

      {/* Approfondimento SEO sotto il fold di conversione */}
      <section className="bg-surface-container/40">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="rich-content max-w-3xl">
            <h2>Perché una valutazione sul posto e non online</h2>
            <p>
              Le stime automatiche partono da medie e metrature: non vedono lo stato reale dell’immobile, la
              luminosità, il piano, i lavori fatti, la vista o il contesto condominiale. A Monza e in Brianza
              due appartamenti con gli stessi metri quadri possono valere in modo molto diverso a seconda
              della via, dell’esposizione e della manutenzione. Per questo la stima nasce da un{' '}
              <strong>sopralluogo reale</strong>, non da un algoritmo.
            </p>

            <h2>Come funziona, passo per passo</h2>
            <ol>
              {steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.text}
                </li>
              ))}
            </ol>
            <p>
              Vuoi i dettagli del percorso? Leggi <Link href="/come-funziona">come funziona la valutazione</Link>{' '}
              oppure le <Link href="/faq">domande frequenti</Link> su costi e tempi.
            </p>

            <h2>Un servizio locale, per la tua zona</h2>
            <p>
              Lavoriamo su Monza e sui comuni della Brianza: conoscere il mercato di{' '}
              <Link href="/monza">Monza</Link> e della{' '}
              <Link href="/brianza">provincia di Monza e Brianza</Link> significa valutare un immobile per la
              sua zona reale, non per una media provinciale. Se stai pensando di vendere, puoi partire dalla{' '}
              <Link href="/vendere-casa-monza">guida per vendere casa a Monza</Link>.
            </p>
          </div>

          <RelatedLinks
            title="Approfondimenti utili"
            items={[
              {
                href: '/monza',
                label: 'Valutazione a Monza',
                description: 'Come cambia il valore tra i quartieri della città.',
              },
              {
                href: '/brianza',
                label: 'Valutazione in Brianza',
                description: 'Il servizio nei comuni della provincia.',
              },
              {
                href: '/come-funziona',
                label: 'Come funziona',
                description: 'Dalla richiesta al sopralluogo, passo per passo.',
              },
              {
                href: '/vendere-casa-monza',
                label: 'Vendere casa a Monza',
                description: 'Da dove partire prima di fissare il prezzo.',
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
