/* Hallmark · design-system: DESIGN.md · page: faq */
import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'FAQ valutazione immobiliare Monza',
  description:
    'Domande frequenti sulla valutazione immobiliare gratuita a Monza e Brianza: costi, tempi, documenti, differenza tra stima online e sopralluogo, obblighi.',
  alternates: { canonical: 'https://valore-immobili.it/faq' },
}

const faqs = [
  {
    q: 'Quanto costa una valutazione immobiliare a Monza?',
    a: 'La valutazione con sopralluogo è gratuita: nessun costo iniziale, nessun obbligo di mandato e nessuna pubblicità.',
  },
  {
    q: 'Come funziona la valutazione del mio immobile?',
    a: 'Compili il modulo con i dati del tuo immobile; ti contattiamo per fissare un sopralluogo gratuito sul posto con un consulente immobiliare, poi ricevi una stima motivata.',
  },
  {
    q: 'Meglio una valutazione online o sul posto?',
    a: 'Per un immobile a Monza e in Brianza la valutazione sul posto è più affidabile: valutiamo di persona stato, esposizione, piano e contesto, oltre ai dati di mercato della zona.',
  },
  {
    q: 'In quanto tempo vengo ricontattato?',
    a: 'In genere entro 1 o 2 giorni lavorativi dalla richiesta, per concordare giorno e orario del sopralluogo.',
  },
  {
    q: 'Sono obbligato ad affidarvi la vendita dopo la valutazione?',
    a: 'No. La valutazione serve a darti un punto di partenza concreto. Non c’è alcun obbligo di affidare l’incarico.',
  },
  {
    q: 'Quali documenti servono per la valutazione?',
    a: 'Non sono obbligatori, ma velocizzano la stima: planimetria e visura catastale, attestato di prestazione energetica (APE) e, per gli appartamenti, ultime spese condominiali.',
  },
  {
    q: 'Valutate anche fuori Monza, in Brianza?',
    a: 'Sì. Operiamo su Monza e nei comuni della provincia di Monza e Brianza, con lo stesso approccio basato sul sopralluogo sul posto.',
  },
  {
    q: 'Quali immobili valutate?',
    a: 'Appartamenti, ville, case indipendenti, box e altre tipologie residenziali nella zona di Monza e Brianza.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FaqPage() {
  return (
    <SeoPageLayout
      title="Domande frequenti"
      intro="Risposte chiare su costi, tempi, documenti e modalità del servizio di valutazione immobiliare locale."
      sourcePage="/faq"
      breadcrumb="FAQ"
      showForm={false}
      related={[
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso completo, passo per passo.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Come cambia il valore tra i quartieri.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Il servizio nei comuni della provincia.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Da dove iniziare prima di vendere.',
        },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.q} className="group rounded-2xl border border-line bg-white p-4">
            <summary className="flex cursor-pointer items-center justify-between gap-3 font-headline font-bold text-secondary">
              {faq.q}
              <span
                aria-hidden="true"
                className="text-slate transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-slate">{faq.a}</p>
          </details>
        ))}
      </div>
    </SeoPageLayout>
  )
}
