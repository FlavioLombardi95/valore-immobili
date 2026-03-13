/**
 * GET /api/sheet
 * Legge i dati dal Google Sheet (foglio pubblicato come CSV).
 * Env: GOOGLE_SHEET_ID (opzionale, per lettura senza auth)
 * Il foglio deve essere "Pubblicato sul web" (File > Condividi > Pubblica sul web > CSV).
 */
import { parseCsv } from '../lib/csvParse.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sheetId = process.env.GOOGLE_SHEET_ID
  if (!sheetId) {
    return res.status(503).json({
      error: 'GOOGLE_SHEET_ID non configurato',
      hint: 'Imposta la variabile in Vercel e pubblica il foglio sul web (CSV).',
    })
  }

  const gid = process.env.GOOGLE_SHEET_GID || '0'
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`

  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) {
      const text = await response.text()
      return res.status(502).json({
        error: 'Errore nel recupero del foglio',
        detail: response.status === 403 ? 'Foglio non pubblicato sul web o ID errato.' : text.slice(0, 200),
      })
    }
    const csv = await response.text()
    const rows = parseCsv(csv)
    return res.status(200).json({ rows })
  } catch (err) {
    console.error('Sheet fetch error:', err.message)
    return res.status(500).json({ error: 'Errore di lettura', detail: err.message })
  }
}
