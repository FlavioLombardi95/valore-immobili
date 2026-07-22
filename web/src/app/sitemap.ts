import type { MetadataRoute } from 'next'
import { NEAR_MONZA_LOCALITIES, localityPath } from '@/lib/localities'
import { INDEXABLE_ROUTES, SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const core = INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const localities = NEAR_MONZA_LOCALITIES.map((item) => ({
    url: `${SITE_URL}${localityPath(item.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...core, ...localities]
}
