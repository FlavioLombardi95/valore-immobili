/**
 * POST /api/lead
 * Aggiunge una riga al Google Sheet (lead dal form).
 * Body: { fullName, city, phone, email, timeframe, privacyAccepted }
 * Env: GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_JSON (JSON della service account)
 */
import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sheetId = process.env.GOOGLE_SHEET_ID
  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!sheetId || !rawCreds) {
    return res.status(503).json({
      error: 'Configurazione mancante',
      hint: 'Imposta GOOGLE_SHEET_ID e GOOGLE_SERVICE_ACCOUNT_JSON in Vercel.',
    })
  }

  let credentials
  try {
    credentials = typeof rawCreds === 'string' ? JSON.parse(rawCreds) : rawCreds
  } catch {
    return res.status(503).json({
      error: 'GOOGLE_SERVICE_ACCOUNT_JSON non valido (deve essere JSON).',
    })
  }

  const { fullName, city, phone, email, timeframe, privacyAccepted } = req.body || {}
  if (!fullName || !city || !phone || !email || !timeframe || privacyAccepted !== true) {
    return res.status(400).json({
      error: 'Dati mancanti',
      required: ['fullName', 'city', 'phone', 'email', 'timeframe', 'privacyAccepted'],
    })
  }

  const sheetName = process.env.GOOGLE_SHEET_NAME
  const range = sheetName ? `${sheetName}!A:G` : 'A:G'
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    String(fullName).trim(),
    String(city).trim(),
    String(phone).trim(),
    String(email).trim(),
    String(timeframe).trim(),
    'accepted',
  ]

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values: [row] },
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Sheets append error:', err.message)
    return res.status(500).json({
      error: 'Errore durante il salvataggio',
      detail: err.message,
    })
  }
}
