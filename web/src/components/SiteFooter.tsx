import Link from 'next/link'
import Image from 'next/image'
import { PRIVACY_POLICY_URL } from '@/lib/seo'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink px-4 py-8 text-cloud">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <Image
          src="/assets/logo-white.png"
          alt="Valore Immobili"
          width={200}
          height={44}
          className="h-11 w-auto"
        />
        <p className="max-w-2xl text-sm text-slate-200">
          Valutazione immobiliare gratuita con sopralluogo a Monza e nella provincia di Monza e Brianza.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wide text-slate-300">
          <Link href="/monza" className="hover:text-white">
            Monza
          </Link>
          <Link href="/brianza" className="hover:text-white">
            Brianza
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Valore Immobili</p>
      </div>
    </footer>
  )
}
