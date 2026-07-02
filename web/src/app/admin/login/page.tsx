'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

function AdminLoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/admin'

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-line bg-white p-8 text-center shadow-[0_12px_40px_rgba(23,28,31,0.08)]">
      <h1 className="font-headline text-2xl font-extrabold text-ink">Accesso admin</h1>
      <p className="mt-2 text-sm text-slate">
        Accedi con Google usando un account autorizzato per gestire le lead.
      </p>
      <button
        type="button"
        onClick={() => signIn('google', { callbackUrl })}
        className="mt-6 min-h-12 w-full rounded-full bg-secondary px-4 font-headline font-bold text-white"
      >
        Accedi con Google
      </button>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<p className="text-center text-sm text-slate">Caricamento…</p>}>
      <AdminLoginForm />
    </Suspense>
  )
}
