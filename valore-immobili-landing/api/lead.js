import {
  getEmailValidation,
  getPhoneValidation,
  STRICT_INVALID_STATUSES,
} from './_lib/contact-verify.js'
import { appendLeadToGoogleSheet, hasGoogleSheetConfig } from './_lib/google-sheet.js'

const isObject = (value) => typeof value === 'object' && value !== null

const validateLeadPayload = (payload) => {
  if (!isObject(payload)) return 'Payload non valido.'
  if (!String(payload.fullName || '').trim()) return 'Inserisci nome e cognome.'
  if (!String(payload.city || '').trim()) return 'Inserisci la città dell’immobile.'
  if (!String(payload.propertyType || '').trim()) return 'Seleziona il tipo di immobile.'
  if (!String(payload.phone || '').trim()) return 'Inserisci un numero di telefono.'
  if (!String(payload.email || '').trim()) return 'Inserisci un indirizzo email.'
  if (!String(payload.timeframe || '').trim()) return 'Seleziona una tempistica indicativa.'
  if (!payload.privacyAccepted) return 'Devi accettare la privacy policy.'
  return null
}

const forwardLead = async (payload, verification) => {
  const forwardUrl = process.env.LEAD_FORWARD_URL
  if (!forwardUrl) {
    if (!hasGoogleSheetConfig()) return
    await appendLeadToGoogleSheet(payload, verification)
    return
  }

  const response = await fetch(forwardUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      verification,
      createdAt: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    throw new Error('Lead forward failed.')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const payload = req.body
  const payloadError = validateLeadPayload(payload)
  if (payloadError) {
    return res.status(400).json({ error: payloadError })
  }

  try {
    const [phone, email] = await Promise.all([
      getPhoneValidation(payload.phone),
      getEmailValidation(payload.email),
    ])

    if (STRICT_INVALID_STATUSES.has(phone.status)) {
      return res.status(400).json({ error: 'Numero di telefono invalido.' })
    }
    if (STRICT_INVALID_STATUSES.has(email.status)) {
      return res.status(400).json({ error: 'Indirizzo email invalido.' })
    }

    await forwardLead(payload, { phone, email })

    return res.status(200).json({
      ok: true,
      verification: { phone, email },
      forwarded: Boolean(process.env.LEAD_FORWARD_URL || hasGoogleSheetConfig()),
    })
  } catch {
    return res.status(500).json({ error: 'Errore durante la verifica dei contatti.' })
  }
}

