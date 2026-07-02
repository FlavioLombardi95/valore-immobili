import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { PRIVACY_POLICY_URL } from '@/lib/seo'

const columns = [
  {
    title: 'Servizio',
    links: [
      { href: '/come-funziona', label: 'Come funziona' },
      { href: '/vendere-casa-monza', label: 'Vendere casa a Monza' },
      { href: '/faq', label: 'Domande frequenti' },
    ],
  },
  {
    title: 'Zone',
    links: [
      { href: '/monza', label: 'Valutazione a Monza' },
      { href: '/brianza', label: 'Valutazione in Brianza' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink px-4 py-10 text-cloud">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo variant="light" />
          <p className="max-w-sm text-sm text-slate-300">
            Valutazione immobiliare gratuita con sopralluogo a Monza e nella provincia di Monza e Brianza.
            Nessun obbligo di mandato.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="space-y-2 text-sm">
            <p className="font-headline text-xs font-bold uppercase tracking-wide text-slate-400">{col.title}</p>
            {col.links.map((link) => (
              <Link key={link.href} href={link.href} className="block text-slate-200 hover:text-cloud">
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Valore Immobili · Monza e Brianza</p>
        <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cloud">
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
