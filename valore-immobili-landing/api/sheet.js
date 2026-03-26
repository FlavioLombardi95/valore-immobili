import { appendLeadToGoogleSheet, hasGoogleSheetConfig } from './_lib/google-sheet.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!hasGoogleSheetConfig()) {
    return res.status(503).json({
      error: 'Configurazione mancante',
      hint: 'Imposta GOOGLE_SHEET_ID e GOOGLE_SERVICE_ACCOUNT_JSON in Vercel.',
    })
  }

  const { fullName, city, phone, email, timeframe, privacyAccepted, verification } = req.body || {}
  if (!fullName || !city || !phone || !email || !timeframe || privacyAccepted !== true) {
    return res.status(400).json({
      error: 'Dati mancanti',
      required: ['fullName', 'city', 'phone', 'email', 'timeframe', 'privacyAccepted'],
    })
  }

  try {
    await appendLeadToGoogleSheet(
      { fullName, city, phone, email, timeframe },
      verification || null,
    )
    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({
      error: 'Errore durante il salvataggio su Google Sheet',
      detail: err.message,
    })
  }
}

