export const SITE_URL = 'https://valore-immobili.it'

export const INDEXABLE_ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/monza', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/brianza', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/come-funziona', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/vendere-casa-monza', priority: 0.85, changeFrequency: 'monthly' as const },
]

export const PRIVACY_POLICY_URL =
  process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL ??
  'https://www.iubenda.com/privacy-policy/69451858'
