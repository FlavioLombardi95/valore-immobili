/* Hallmark · design-system: DESIGN.md · page: home
 * Macrostructure: photo hero → conversion (trust + form) → SEO prose
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { RelatedLinks } from '@/components/RelatedLinks'
import heroImage from '../../public/assets/hero-villa-reale-monza.jpg'

export const metadata: Metadata = {
  title: {
    absolute: 'Sopralluogo immobiliare Monza e Brianza | Valore Immobili',
  },
  description:
    'Sopralluogo a Monza e Brianza su vendite reali di zona, non algoritmi. Per la valutazione gratuita a Monza vai alla pagina città. Senza mandato.',
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
    text: 'Un consulente locale ti contatta entro 1 o 2 giorni lavorativi per fissare il sopralluogo.',
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
          quality={75}
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40"
        />
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-2xl space-y-4">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-cloud text-balance md:text-5xl">
              Sopralluogo immobiliare a Monza e in Brianza
            </h1>
            <p className="max-w-xl text-base text-slate-200 text-pretty md:text-lg">
              Stima sul posto su vendite reali della zona: non un algoritmo. Gratuita e senza mandato. Se
              cerchi la valutazione gratuita a Monza, parti dalla{' '}
              <Link
                href="/monza"
                className="font-semibold text-cloud underline underline-offset-2 hover:text-white"
              >
                pagina dedicata
              </Link>
              .
            </p>
            <div className="pt-2">
              <a
                href="#richiesta"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-rust px-6 font-headline text-base font-bold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cloud focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-px"
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
              Compila il modulo: ti richiamiamo entro 1 o 2 giorni lavorativi per organizzare il sopralluogo.
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
              della via, dell’esposizione e della manutenzione.
            </p>
            <p>
              Per questo la stima nasce da un <strong>sopralluogo reale</strong> e dal confronto con vendite e
              domanda locali, non da un unico numero generico di città. È lo stesso motivo per cui, in
              ricerca, ha senso guardare i <Link href="/quartieri-monza">quartieri di Monza</Link> e non
              solo “prezzo medio Monza”.
            </p>

            <h2>Cosa include il sopralluogo (e cosa no)</h2>
            <p>
              Il sopralluogo a Monza e in Brianza è <strong>gratuito</strong> e <strong>senza mandato</strong>:
              non è un calcolatore online né una quotazione OMI da sola. Visita sul posto, lettura dello stato
              reale e confronto con vendite di zona. Per la{' '}
              <Link href="/monza">valutazione gratuita dell’immobile a Monza</Link> usa la pagina città. Se hai
              già una stima automatica, leggi{' '}
              <Link href="/valutazione-online-o-sopralluogo">valutazione online o sopralluogo</Link>.
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
              Il percorso è <strong>gratuito e senza impegno</strong>: nessun obbligo di affidare la vendita
              dopo la stima. Dettagli su <Link href="/come-funziona">come funziona la valutazione</Link>;
              costi, tempi e documenti nelle <Link href="/faq">domande frequenti</Link>.
            </p>

            <h2>Monza e Brianza: mercato locale, non medie provinciali</h2>
            <p>
              Lavoriamo su <Link href="/monza">valutazione gratuita a Monza</Link> e sui comuni della{' '}
              <Link href="/brianza">Brianza</Link>. Valutare un immobile per la sua zona reale (via, tipologica,
              stato) evita di partire da una media provinciale che non descrive né il centro né i comuni più
              esterni.
            </p>
            <p>
              Se sai già la tipologica, parti da{' '}
              <Link href="/valutazione/appartamenti-monza">valutazione appartamenti a Monza</Link> o da{' '}
              <Link href="/valutazione/ville-brianza">valutazione ville in Brianza</Link>. Sul lato ricerca,
              le guide <Link href="/appartamenti-in-vendita-monza">appartamenti in vendita a Monza</Link> e{' '}
              <Link href="/ville-in-vendita-brianza">ville in vendita in Brianza</Link> orientano senza
              confondere listini e stime.
            </p>

            <h2>Per chi vende e per chi compra</h2>
            <p>
              Se stai pensando di vendere, la valutazione con sopralluogo ti dà un punto di partenza prima di
              fissare il prezzo o pubblicare. La guida{' '}
              <Link href="/vendere-casa-monza">vendere casa a Monza</Link> aiuta a mettere in ordine tempi e
              documenti.
            </p>
            <p>
              Se stai cercando casa, parti da <Link href="/comprare-casa-monza">comprare casa a Monza</Link>{' '}
              o da <Link href="/comprare-casa-brianza">comprare casa in Brianza</Link>. Oltre agli annunci
              online puoi anche richiedere una consulenza gratuita sull’acquisto, senza impegno.
            </p>
          </div>

          <RelatedLinks
            title="Approfondimenti utili"
            items={[
              {
                href: '/monza',
                label: 'Valutazione gratuita a Monza',
                description: 'Pagina città: intent gratuita + sopralluogo.',
              },
              {
                href: '/valutazione-online-o-sopralluogo',
                label: 'Online o sopralluogo',
                description: 'Calcolatore vs visita gratuita sul posto.',
              },
              {
                href: '/comprare-casa-monza',
                label: 'Comprare casa a Monza',
                description: 'Se stai cercando casa, non solo vendendo.',
              },
              {
                href: '/valutazione/brugherio',
                label: 'Valutazione a Brugherio',
                description: 'Comune limitrofo verso Milano Est.',
              },
              {
                href: '/valutazione/ville-brianza',
                label: 'Valutazione ville in Brianza',
                description: 'Schiere, bifamiliari e indipendenti.',
              },
              {
                href: '/brianza',
                label: 'Comuni in Brianza',
                description: 'Hub comuni della provincia.',
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
