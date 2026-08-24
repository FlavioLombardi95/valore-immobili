'use client'

/* Hallmark · design-system: DESIGN.md · component: LeadForm
 * Conversion form: elevated shell, fields, primary pill submit (DESIGN.md)
 */
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { PRIVACY_POLICY_URL } from '@/lib/seo'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = Partial<Record<string, string>>

type LeadFormProps = {
  sourcePage?: string
  defaultCity?: string
  /** Override H2 del form (es. home: evita “valutazione gratuita” fuori da /monza). */
  heading?: string
}

export function LeadForm(props: LeadFormProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[480px] animate-pulse rounded-3xl border border-line bg-surface p-6" aria-hidden="true" />
      }
    >
      <LeadFormInner {...props} />
    </Suspense>
  )
}

function LeadFormInner({ sourcePage = '/', defaultCity = '', heading }: LeadFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const purchaseIntent = searchParams.get('intent') === 'acquisto'
  const fromPage = searchParams.get('from')
  const effectiveSourcePage = fromPage
    ? purchaseIntent
      ? `${fromPage}?intent=acquisto`
      : fromPage
    : purchaseIntent
      ? `${sourcePage}?intent=acquisto`
      : sourcePage
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    city: defaultCity,
    squareMeters: '',
    propertyType: '',
    timeframe: '',
    phone: '',
    email: '',
    privacyAccepted: false,
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [phoneStatus, setPhoneStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid'>('idle')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const trimmed = form.phone.trim()
    if (!trimmed || trimmed.replace(/\D/g, '').length < 8) {
      setPhoneStatus(trimmed ? 'invalid' : 'idle')
      return
    }

    const timeout = setTimeout(async () => {
      setPhoneStatus('checking')
      try {
        const res = await fetch('/api/contact-verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: trimmed }),
        })
        const data = await res.json()
        setPhoneStatus(data?.phone?.status === 'valid' ? 'valid' : 'invalid')
      } catch {
        setPhoneStatus('invalid')
      }
    }, 700)

    return () => clearTimeout(timeout)
  }, [form.phone])

  const updateField = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined, submit: undefined }))
  }

  const validate = () => {
    const next: FieldErrors = {}
    if (!form.firstName.trim()) next.firstName = 'Inserisci il nome.'
    if (!form.lastName.trim()) next.lastName = 'Inserisci il cognome.'
    if (!form.city.trim()) next.city = purchaseIntent ? 'Inserisci la zona che ti interessa.' : 'Inserisci la città dell’immobile.'
    if (!form.propertyType) next.propertyType = 'Seleziona il tipo di immobile.'
    const sq = Number(form.squareMeters)
    if (!Number.isInteger(sq) || sq < 1) next.squareMeters = 'Inserisci i metri quadri.'
    if (!form.timeframe) next.timeframe = 'Seleziona una tempistica.'
    if (!form.phone.trim()) next.phone = 'Inserisci un numero di telefono.'
    if (!form.email.trim()) next.email = 'Inserisci un indirizzo email.'
    if (form.email.trim() && !EMAIL_REGEX.test(form.email.trim())) {
      next.email = 'Formato email non valido.'
    }
    if (phoneStatus === 'invalid') next.phone = 'Numero di telefono invalido.'
    if (!form.privacyAccepted) next.privacyAccepted = 'Devi accettare la privacy policy.'
    return next
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
          city: form.city.trim(),
          propertyType: form.propertyType,
          squareMeters: Number(form.squareMeters),
          phone: form.phone.trim(),
          email: form.email.trim(),
          timeframe: form.timeframe,
          privacyAccepted: form.privacyAccepted,
          sourcePage: effectiveSourcePage,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrors({ submit: data.error || 'Errore durante l’invio.' })
        return
      }
      router.push('/grazie')
    } catch {
      setErrors({ submit: 'Errore di connessione. Riprova.' })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (field: string) =>
    `w-full min-h-12 rounded-xl border bg-surface px-4 py-3 text-body transition focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 active:border-secondary/50 disabled:cursor-not-allowed disabled:opacity-60 ${
      errors[field] ? 'border-error' : 'border-line'
    }`

  return (
    <LeadFormShell
      purchaseIntent={purchaseIntent}
      heading={heading}
      submitting={submitting}
      phoneStatus={phoneStatus}
      form={form}
      errors={errors}
      fieldClass={fieldClass}
      updateField={updateField}
      handleSubmit={handleSubmit}
    />
  )
}

type FormState = {
  firstName: string
  lastName: string
  city: string
  squareMeters: string
  propertyType: string
  timeframe: string
  phone: string
  email: string
  privacyAccepted: boolean
}

type LeadFormShellProps = {
  purchaseIntent: boolean
  heading?: string
  submitting: boolean
  phoneStatus: 'idle' | 'checking' | 'valid' | 'invalid'
  form: FormState
  errors: FieldErrors
  fieldClass: (field: string) => string
  updateField: (field: keyof FormState, value: string | boolean) => void
  handleSubmit: (e: React.FormEvent) => void
}

function LeadFormShell({
  purchaseIntent,
  heading,
  submitting,
  phoneStatus,
  form,
  errors,
  fieldClass,
  updateField,
  handleSubmit,
}: LeadFormShellProps) {
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-3xl border border-line bg-surface p-5 shadow-[0_8px_28px_rgba(23,28,31,0.06)] md:p-6">
      <div>
        <h2 className="font-headline text-2xl font-extrabold text-secondary md:text-3xl">
          {purchaseIntent
            ? 'Richiedi una consulenza per l’acquisto'
            : heading ?? 'Richiedi una valutazione gratuita'}
        </h2>
        <p className="mt-2 text-sm text-slate">
          {purchaseIntent
            ? 'Raccontaci cosa cerchi: ti richiamiamo anche per immobili non pubblicati online, senza impegno.'
            : 'Compila il modulo: ti richiamiamo per organizzare il sopralluogo sul posto.'}
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-headline text-sm font-bold text-secondary">
          {purchaseIntent ? 'Cosa cerchi' : 'Il tuo immobile'}
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block space-y-1 md:col-span-2">
            <span className="text-xs font-semibold text-body">Comune / zona</span>
            <input
              className={fieldClass('city')}
              name="city"
              value={form.city}
              onChange={(e) => updateField('city', e.target.value)}
              placeholder="Es. Monza"
              autoComplete="address-level2"
              required
            />
            {errors.city && <p className="text-xs text-error">{errors.city}</p>}
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-body">Superficie (mq)</span>
            <input
              className={fieldClass('squareMeters')}
              name="squareMeters"
              type="number"
              min={1}
              value={form.squareMeters}
              onChange={(e) => updateField('squareMeters', e.target.value)}
              placeholder="Es. 85"
              required
            />
            {errors.squareMeters && <p className="text-xs text-error">{errors.squareMeters}</p>}
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-body">Tipologia</span>
            <select
              className={fieldClass('propertyType')}
              name="propertyType"
              value={form.propertyType}
              onChange={(e) => updateField('propertyType', e.target.value)}
              required
            >
              <option value="">Seleziona</option>
              <option>Appartamento</option>
              <option>Villa</option>
              <option>Casa indipendente</option>
              <option>Garage</option>
              <option>Altro</option>
            </select>
            {errors.propertyType && <p className="text-xs text-error">{errors.propertyType}</p>}
          </label>
          <label className="block space-y-1 md:col-span-2">
            <span className="text-xs font-semibold text-body">
              {purchaseIntent ? 'Quando prevedi di comprare?' : 'Quando prevedi di comprare/vendere?'}
            </span>
            <select
              className={fieldClass('timeframe')}
              name="timeframe"
              value={form.timeframe}
              onChange={(e) => updateField('timeframe', e.target.value)}
              required
            >
              <option value="">Seleziona</option>
              <option value="3">Entro 3 mesi</option>
              <option value="6">Entro 6 mesi</option>
              <option value="12">Entro 12 mesi</option>
            </select>
            {errors.timeframe && <p className="text-xs text-error">{errors.timeframe}</p>}
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-headline text-sm font-bold text-secondary">I tuoi contatti</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-body">Nome</span>
            <input
              className={fieldClass('firstName')}
              name="firstName"
              value={form.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              autoComplete="given-name"
              required
            />
            {errors.firstName && <p className="text-xs text-error">{errors.firstName}</p>}
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-body">Cognome</span>
            <input
              className={fieldClass('lastName')}
              name="lastName"
              value={form.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              autoComplete="family-name"
              required
            />
            {errors.lastName && <p className="text-xs text-error">{errors.lastName}</p>}
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-body">Email</span>
            <input
              className={fieldClass('email')}
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              autoComplete="email"
              required
            />
            {errors.email && <p className="text-xs text-error">{errors.email}</p>}
          </label>
          <div className="space-y-1">
            <label className="block space-y-1">
              <span className="text-xs font-semibold text-body">Telefono</span>
              <input
                className={fieldClass('phone')}
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                autoComplete="tel"
                required
              />
            </label>
            {phoneStatus === 'valid' && <p className="text-xs text-success">Numero valido</p>}
            {phoneStatus === 'invalid' && form.phone.trim() && (
              <p className="text-xs text-error">Numero invalido</p>
            )}
            {errors.phone && <p className="text-xs text-error">{errors.phone}</p>}
          </div>
        </div>
      </div>

      <label className="flex items-start gap-2 text-xs leading-relaxed text-slate">
        <input
          type="checkbox"
          checked={form.privacyAccepted}
          onChange={(e) => updateField('privacyAccepted', e.target.checked)}
          className="mt-0.5 min-h-5 min-w-5 rounded border-line"
          required
        />
        <span>
          Acconsento al trattamento dei dati come indicato nella{' '}
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-rust underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.privacyAccepted && <p className="text-xs text-error">{errors.privacyAccepted}</p>}

      <button
        type="submit"
        disabled={submitting || phoneStatus === 'checking'}
        className="min-h-[52px] w-full rounded-full bg-brand-rust font-headline text-lg font-bold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Invio in corso…' : purchaseIntent ? 'Richiedi la consulenza gratuita' : 'Richiedi sopralluogo gratuito'}
      </button>
      <p className="text-center text-xs text-slate">
        {purchaseIntent
          ? 'Consulenza gratuita, senza impegno di acquisto.'
          : 'Nessun obbligo di mandato, nessun costo, nessuna pubblicità.'}
      </p>
      {errors.submit && <p className="text-center text-sm text-error">{errors.submit}</p>}
    </form>
  )
}
