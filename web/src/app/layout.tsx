import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://valore-immobili.it'),
  title: {
    default: 'Valutazione immobiliare Monza gratuita | Valore Immobili',
    template: '%s | Valore Immobili',
  },
  description:
    'Valutazione immobiliare a Monza e Brianza: sopralluogo gratuito sul posto e senza impegno. Richiedi online in pochi minuti.',
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
    <html lang="it" className={`${inter.variable} ${plusJakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-surface text-body antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
