import { NextResponse } from 'next/server'
import {
  getEmailValidation,
  getPhoneValidation,
  STRICT_INVALID_STATUSES,
} from '@/lib/contact-verify'
import { sendLeadThankYouEmail } from '@/lib/lead-thank-you-email'
import { insertLead } from '@/lib/leads'

const validatePayload = (payload: Record<string, unknown>) => {
  const fullName = String(payload.fullName ?? '').trim()
  const city = String(payload.city ?? '').trim()
  const propertyType = String(payload.propertyType ?? '').trim()
  const squareMeters = Number(payload.squareMeters)
  const phone = String(payload.phone ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const timeframe = String(payload.timeframe ?? '').trim()
  const privacyAccepted = Boolean(payload.privacyAccepted)
  const sourcePage = String(payload.sourcePage ?? '').trim() || undefined

  if (!fullName) return 'Inserisci nome e cognome.'
  if (!city) return 'Inserisci la città dell’immobile.'
  if (!propertyType) return 'Seleziona il tipo di immobile.'
  if (!Number.isInteger(squareMeters) || squareMeters < 1 || squareMeters > 99999) {
    return 'Inserisci i metri quadri come numero intero.'
  }
  if (!phone) return 'Inserisci un numero di telefono.'
  if (!email) return 'Inserisci un indirizzo email.'
  if (!timeframe) return 'Seleziona una tempistica indicativa.'
  if (!privacyAccepted) return 'Devi accettare la privacy policy.'

  return {
    fullName,
    city,
    propertyType,
    squareMeters,
    phone,
    email,
    timeframe,
    privacyAccepted,
    sourcePage,
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const validated = validatePayload(payload)
    if (typeof validated === 'string') {
      return NextResponse.json({ error: validated }, { status: 400 })
    }

    const [phone, email] = await Promise.all([
      getPhoneValidation(validated.phone),
      getEmailValidation(validated.email),
    ])

    if (STRICT_INVALID_STATUSES.has(phone.status)) {
      return NextResponse.json({ error: 'Numero di telefono invalido.' }, { status: 400 })
    }
    if (STRICT_INVALID_STATUSES.has(email.status)) {
      return NextResponse.json({ error: 'Indirizzo email invalido.' }, { status: 400 })
    }

    const lead = await insertLead(validated)
    await sendLeadThankYouEmail(validated).catch((error) => {
      console.error('thank-you email failed', error)
    })

    return NextResponse.json({ ok: true, id: lead.id })
  } catch (error) {
    console.error('lead submit failed', error)
    return NextResponse.json(
      { error: 'Errore durante l’invio. Riprova.' },
      { status: 500 },
    )
  }
}
