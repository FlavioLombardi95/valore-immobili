/* Hallmark · design-system: DESIGN.md · page: faq */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: 'FAQ valutazione immobiliare Monza',
  description:
    'Domande su costi, tempi, documenti e stima online vs sopralluogo a Monza e Brianza. Per la valutazione gratuita a Monza usa la pagina città.',
  alternates: { canonical: 'https://valore-immobili.it/faq' },
}

const faqs = [
  {
    q: 'Quanto costa una valutazione immobiliare a Monza?',
    a: 'La valutazione con sopralluogo è gratuita. Non c’è costo iniziale, nessun obbligo di mandato e nessuna pubblicità obbligatoria. L’obiettivo è darti un parere concreto sul mercato della tua zona.',
  },
  {
    q: 'Come funziona la valutazione del mio immobile?',
    a: 'Compili il modulo con i dati principali dell’immobile. Ti richiamiamo entro 1 o 2 giorni lavorativi per fissare un sopralluogo gratuito sul posto. Dopo la visita ricevi una stima motivata basata sullo stato reale e sul mercato locale.',
  },
  {
    q: 'Meglio una valutazione online o sul posto?',
    a: 'Per un immobile a Monza e in Brianza la valutazione sul posto è più affidabile. Le stime automatiche partono da medie e metrature; in visita si vedono stato, esposizione, piano, contesto condominiale e dettagli che spostano il valore.',
  },
  {
    q: 'In quanto tempo vengo ricontattato?',
    a: 'In genere entro 1 o 2 giorni lavorativi dalla richiesta, per concordare giorno e orario del sopralluogo.',
  },
  {
    q: 'Sono obbligato ad affidarvi la vendita dopo la valutazione?',
    a: 'No. La valutazione serve a darti un punto di partenza concreto. Non c’è alcun obbligo di affidare l’incarico: puoi fermarti al parere o decidere dopo con calma.',
  },
  {
    q: 'Devo aver già deciso di vendere per richiedere la valutazione?',
    a: 'No. Molte richieste arrivano proprio per capire se e quando ha senso vendere, o a che prezzo partire. Puoi chiedere la stima anche in fase di riflessione.',
  },
  {
    q: 'Quali documenti servono per la valutazione?',
    a: 'Non sono obbligatori, ma velocizzano la stima: planimetria e visura catastale, attestato di prestazione energetica (APE) se disponibile e, per gli appartamenti, ultime spese condominiali. Se manca qualcosa, si può comunque partire e integrare dopo.',
  },
  {
    q: 'Valutate anche fuori Monza, in Brianza?',
    a: 'Sì. Operiamo su Monza e nei comuni della provincia di Monza e Brianza, con lo stesso approccio basato sul sopralluogo sul posto e sulla lettura del mercato di zona.',
  },
  {
    q: 'Quali immobili valutate?',
    a: 'Appartamenti, ville, case indipendenti, box e altre tipologie residenziali nella zona di Monza e Brianza.',
  },
  {
    q: 'Offrite anche supporto a chi vuole comprare casa?',
    a: 'Sì. Oltre alla valutazione per chi vende, puoi richiedere una consulenza gratuita sull’acquisto a Monza e in Brianza, senza impegno di acquisto. È un percorso separato rispetto al sopralluogo di stima.',
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
      intro="Risposte dirette su **costi, tempi, documenti** e su cosa cambia tra stima online e sopralluogo a Monza e in Brianza. Senza giri di parole."
      sourcePage="/faq"
      breadcrumb="FAQ"
      showForm={false}
      relatedTitle="Approfondisci"
      related={[
        {
          href: '/monza',
          label: 'Valutazione gratuita a Monza',
          description: 'Pagina città: intent gratuita + sopralluogo.',
        },
        {
          href: '/valutazione-online-o-sopralluogo',
          label: 'Online o sopralluogo',
          description: 'Dopo una stima automatica: cosa fare.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso completo, passo per passo.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Tipologica dedicata (non FAQ).',
        },
        {
          href: '/brianza',
          label: 'Comuni in Brianza',
          description: 'Hub comuni della provincia.',
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

      <p>
        Qui trovi i dubbi più frequenti su costi, tempi di richiamo e obblighi. Per richiedere la{' '}
        <Link href="/monza">valutazione gratuita dell’immobile a Monza</Link> usa la pagina città. Percorso
        completo: <Link href="/come-funziona">come funziona la valutazione</Link>.
      </p>

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

      <h2>Non trovi la tua domanda?</h2>
      <p>
        Se stai valutando di vendere a Monza, parti dalla{' '}
        <Link href="/monza">valutazione gratuita a Monza</Link> o dalla guida{' '}
        <Link href="/vendere-casa-monza">vendere casa a Monza</Link>. Se invece stai cercando casa,{' '}
        <Link href="/comprare-casa-monza">comprare casa a Monza</Link> e la{' '}
        <Link href="/?from=faq&intent=acquisto#richiesta">consulenza gratuita sull’acquisto</Link> sono il
        percorso giusto.
      </p>
    </SeoPageLayout>
  )
}
