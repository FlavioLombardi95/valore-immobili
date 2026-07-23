/* Hallmark · design-system: DESIGN.md · page: valutazione-leaf
 * Macrostructure: conversion document (prosa + form sticky)
 * Variety: Locality.layoutVariant drives block order + unique chrome copy
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import {
  NEAR_MONZA_LOCALITIES,
  getLocality,
  localityPath,
  type Locality,
} from '@/lib/localities'
import {
  PROPERTY_TYPE_PAGES,
  getPropertyType,
  propertyTypePath,
  type PropertyTypePage,
} from '@/lib/property-types'
import { SITE_URL } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [
    ...NEAR_MONZA_LOCALITIES.map((item) => ({ slug: item.slug })),
    ...PROPERTY_TYPE_PAGES.map((item) => ({ slug: item.slug })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const locality = getLocality(slug)
  if (locality) {
    return {
      title: `Valutazione immobiliare a ${locality.name}`,
      description: `Valutazione immobiliare gratuita a ${locality.name}: sopralluogo sul posto e stima basata su vendite reali nella zona, senza impegno.`,
      alternates: { canonical: `${SITE_URL}${localityPath(locality.slug)}` },
    }
  }

  const propertyType = getPropertyType(slug)
  if (propertyType) {
    return {
      title: propertyType.metaTitle,
      description: propertyType.metaDescription,
      alternates: { canonical: `${SITE_URL}${propertyTypePath(propertyType.slug)}` },
    }
  }

  return {}
}

function AngleBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <>
      <h2>{heading}</h2>
      <p>{body}</p>
    </>
  )
}

function LookBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

function ContextLinks({ locality }: { locality: Locality }) {
  if (!locality.contextLinks?.length) return null
  return (
    <p>
      {locality.contextLinksLead ? `${locality.contextLinksLead} ` : null}
      {locality.contextLinks.map((link, index) => {
        const isExternal = link.href.startsWith('http')
        const separator =
          index === 0 ? null : index === locality.contextLinks!.length - 1 ? ' e ' : ', '
        const node = isExternal ? (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ) : (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        )
        return (
          <Fragment key={link.href}>
            {separator}
            {node}
          </Fragment>
        )
      })}
      .
    </p>
  )
}

function ContextBlock({ locality }: { locality: Locality }) {
  return (
    <>
      <h2>{locality.contextHeading}</h2>
      {locality.contextParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      <ContextLinks locality={locality} />
    </>
  )
}

function FaqBlock({
  title,
  faqs,
}: {
  title: string
  faqs: { question: string; answer: string }[]
}) {
  return (
    <>
      <h2>{title}</h2>
      {faqs.map((faq) => (
        <Fragment key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </Fragment>
      ))}
    </>
  )
}

function RequestBlock({ locality }: { locality: Locality }) {
  return (
    <>
      <h2>{locality.requestHeading}</h2>
      <p>{locality.requestNote}</p>
      <p>
        {locality.requestFollowUp}{' '}
        <Link href="/come-funziona">Come funziona</Link>.
      </p>
    </>
  )
}

function SiblingList({ locality, offset = 0 }: { locality: Locality; offset?: number }) {
  const pool = NEAR_MONZA_LOCALITIES.filter((item) => item.slug !== locality.slug)
  const siblings = [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, 3)
  return (
    <ul>
      {siblings.map((item) => (
        <li key={item.slug}>
          <Link href={localityPath(item.slug)}>Valutazione a {item.name}</Link>
        </li>
      ))}
      <li>
        <Link href="/brianza">Tutte le zone in Brianza</Link>
      </li>
    </ul>
  )
}

/** Varianti strutturali del blocco “comuni vicini” per ridurre ritmo clone. */
function SiblingBlock({ locality }: { locality: Locality }) {
  const idx = NEAR_MONZA_LOCALITIES.findIndex((item) => item.slug === locality.slug)

  switch (locality.layoutVariant) {
    case 'faq-led': {
      const pool = NEAR_MONZA_LOCALITIES.filter((item) => item.slug !== locality.slug)
      const rotated = [...pool.slice(idx % pool.length), ...pool.slice(0, idx % pool.length)].slice(0, 3)
      return (
        <>
          <h2>{locality.siblingsHeading}</h2>
          <p>
            Se l’immobile non è a {locality.name}, apri la pagina del comune giusto, ad esempio{' '}
            {rotated.map((item, i, arr) => (
              <Fragment key={item.slug}>
                {i > 0 ? (i === arr.length - 1 ? ' o ' : ', ') : null}
                <Link href={localityPath(item.slug)}>{item.name}</Link>
              </Fragment>
            ))}
            . Panoramica su <Link href="/brianza">Brianza</Link>.
          </p>
        </>
      )
    }
    case 'look-first':
      return (
        <>
          <h2>{locality.siblingsHeading}</h2>
          <SiblingList locality={locality} offset={(idx + 2) % 7} />
          <p>
            Oppure per tipologica:{' '}
            <Link href={propertyTypePath('appartamenti-monza')}>appartamenti</Link>,{' '}
            <Link href={propertyTypePath('ville-brianza')}>ville</Link>.
          </p>
        </>
      )
    case 'compare-monza':
      return (
        <>
          <h2>{locality.siblingsHeading}</h2>
          <p>
            Utile se stai confrontando {locality.name} con Monza o con un comune a ridosso:
          </p>
          <SiblingList locality={locality} offset={idx % 5} />
        </>
      )
    case 'angle-first':
    default:
      return (
        <>
          <h2>{locality.siblingsHeading}</h2>
          <SiblingList locality={locality} offset={(idx + 4) % 7} />
        </>
      )
  }
}

function TipologicheLinks({ currentSlug }: { currentSlug?: string }) {
  return (
    <>
      <h2>Valutazione per tipologia</h2>
      <ul>
        {PROPERTY_TYPE_PAGES.filter((item) => item.slug !== currentSlug).map((item) => (
          <li key={item.slug}>
            <Link href={propertyTypePath(item.slug)}>{item.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/monza">Valutazione a Monza</Link>
        </li>
      </ul>
    </>
  )
}

function localityBody(locality: Locality): ReactNode {
  const angle = <AngleBlock heading={locality.angleHeading} body={locality.angleBody} />
  const look = <LookBlock heading={locality.lookHeading} items={locality.lookItems} />
  const context = <ContextBlock locality={locality} />
  const request = <RequestBlock locality={locality} />
  const siblings = <SiblingBlock locality={locality} />

  switch (locality.layoutVariant) {
    case 'look-first':
      return (
        <>
          {look}
          {context}
          {angle}
          {siblings}
          {request}
        </>
      )
    case 'faq-led':
      return (
        <>
          {locality.faqs?.length ? (
            <FaqBlock title={`Domande frequenti su ${locality.name}`} faqs={locality.faqs} />
          ) : null}
          {context}
          {look}
          {angle}
          {request}
          {siblings}
        </>
      )
    case 'compare-monza':
      return (
        <>
          {angle}
          {context}
          {look}
          {request}
          {siblings}
        </>
      )
    case 'angle-first':
    default:
      return (
        <>
          {angle}
          {look}
          {context}
          {siblings}
          {request}
        </>
      )
  }
}

function propertyTypeBody(page: PropertyTypePage): ReactNode {
  return (
    <>
      <AngleBlock heading={page.angleHeading} body={page.angleBody} />
      <LookBlock heading={page.lookHeading} items={page.lookItems} />
      {page.faqs?.length ? (
        <FaqBlock title={`Domande frequenti su ${page.shortLabel.toLowerCase()}`} faqs={page.faqs} />
      ) : null}
      <h2>Come richiedere la valutazione</h2>
      <p>{page.requestNote}</p>
      <p>
        Compila il modulo: ti ricontattiamo entro 1 o 2 giorni lavorativi. Il servizio è{' '}
        <strong>gratuito</strong> e <strong>senza impegno</strong>. Percorso completo:{' '}
        <Link href="/come-funziona">come funziona</Link>.
      </p>
      <TipologicheLinks currentSlug={page.slug} />
      <h2>Zone in cui operiamo</h2>
      <p>
        Il servizio copre <Link href="/monza">Monza</Link> e i{' '}
        <Link href="/brianza">comuni della Brianza</Link>. Se conosci già il comune, apri la pagina
        dedicata (es.{' '}
        <Link href="/valutazione/lissone">Lissone</Link>,{' '}
        <Link href="/valutazione/brugherio">Brugherio</Link>).
      </p>
    </>
  )
}

export default async function ValutazioneSlugPage({ params }: PageProps) {
  const { slug } = await params
  const locality = getLocality(slug)
  if (locality) {
    return (
      <SeoPageLayout
        title={`Valutazione immobiliare a ${locality.name}`}
        intro={locality.intro}
        sourcePage={localityPath(locality.slug)}
        defaultCity={locality.name}
        breadcrumb={locality.name}
        relatedTitle={locality.relatedTitle}
        related={[
          {
            href: '/brianza',
            label: 'Valutazione in Brianza',
            description: 'Panoramica sui comuni della zona.',
          },
          {
            href: '/monza',
            label: 'Valutazione a Monza',
            description: 'Se l’immobile è nel comune di Monza.',
          },
          {
            href: propertyTypePath('appartamenti-monza'),
            label: 'Valutazione appartamenti',
            description: 'Cosa pesa su piano, spese e condominio.',
          },
          {
            href: propertyTypePath('ville-brianza'),
            label: 'Valutazione ville',
            description: 'Ville e case indipendenti in Brianza.',
          },
        ]}
      >
        {localityBody(locality)}
      </SeoPageLayout>
    )
  }

  const propertyType = getPropertyType(slug)
  if (!propertyType) notFound()

  return (
    <SeoPageLayout
      title={propertyType.title}
      intro={propertyType.intro}
      sourcePage={propertyTypePath(propertyType.slug)}
      defaultCity={propertyType.defaultCity}
      breadcrumb={propertyType.shortLabel}
      relatedTitle={`Da ${propertyType.shortLabel.toLowerCase()} ad altre pagine`}
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Quartieri e mercato cittadino.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Comuni e mercati locali.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Da dove partire prima del prezzo.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Dalla richiesta al sopralluogo.',
        },
      ]}
    >
      {propertyTypeBody(propertyType)}
    </SeoPageLayout>
  )
}
