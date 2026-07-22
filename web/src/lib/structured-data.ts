import { SITE_URL } from '@/lib/seo'

/** Organization + Service — JSON-LD globale (layout). */
export const siteGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Valore Immobili',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/logo-dark.png`,
      },
      areaServed: [
        { '@type': 'City', name: 'Monza' },
        { '@type': 'AdministrativeArea', name: 'Monza e Brianza' },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'Valutazione immobiliare con sopralluogo',
      description:
        'Valutazione immobiliare gratuita a Monza e in Brianza con sopralluogo sul posto e confronto con vendite reali della zona, senza obbligo di mandato.',
      url: SITE_URL,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Monza' },
        { '@type': 'AdministrativeArea', name: 'Monza e Brianza' },
      ],
      serviceType: 'Valutazione immobiliare',
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'EUR',
        description: 'Sopralluogo e stima gratuiti, senza impegno',
      },
    },
  ],
}
