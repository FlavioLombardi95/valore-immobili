import type { Metadata } from 'next'
import { Bricolage_Grotesque, Source_Sans_3 } from 'next/font/google'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { DeferredAnalytics } from '@/components/DeferredAnalytics'
import { siteGraphSchema } from '@/lib/structured-data'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://valore-immobili.it'),
  title: {
    default: 'Valutazione immobiliare Monza gratuita con sopralluogo',
    template: '%s | Valore Immobili',
  },
  description:
    'Sopralluogo gratuito a Monza e Brianza, senza impegno. Stima basata su vendite reali della zona, non su algoritmi. Richiedi in pochi minuti.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    locale: 'it_IT',
    siteName: 'Valore Immobili',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${bricolage.variable} ${sourceSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-surface text-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphSchema) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <DeferredAnalytics />
      </body>
    </html>
  )
}
