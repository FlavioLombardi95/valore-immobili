/* Hallmark · design-system: DESIGN.md · page: guide SEO [slug]
 * Guide informative acquisto/mercato — showForm false, CTA home
 */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GuideSections } from '@/components/GuideSections'
import { MonzaQuartieriMap } from '@/components/MonzaQuartieriMap'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { GUIDE_SLUGS, getGuideBySlug, guidePath } from '@/lib/guides'
import { SITE_URL } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

/** Solo gli slug del catalogo guide: tutto il resto → 404 */
export const dynamicParams = false

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `${SITE_URL}${guidePath(guide.slug)}` },
  }
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  return (
    <SeoPageLayout
      title={guide.title}
      intro={guide.intro}
      sourcePage={guidePath(guide.slug)}
      defaultCity="Monza"
      breadcrumb={guide.breadcrumb}
      showForm={false}
      ctaVariant="purchase"
      related={guide.related}
      relatedTitle={guide.relatedTitle}
    >
      <GuideSections sections={guide.sections.slice(0, 1)} />
      {guide.slug === 'quartieri-monza' ? <MonzaQuartieriMap /> : null}
      <GuideSections sections={guide.sections.slice(1)} />
    </SeoPageLayout>
  )
}
