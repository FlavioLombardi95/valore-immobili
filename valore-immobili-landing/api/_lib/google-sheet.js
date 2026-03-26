import { google } from 'googleapis'

const getGoogleSheetConfig = () => {
  const sheetId = process.env.GOOGLE_SHEET_ID
  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const sheetName = process.env.GOOGLE_SHEET_NAME
  const range = sheetName ? `${sheetName}!A:G` : 'A:G'

  if (!sheetId || !rawCreds) {
    return null
  }

  let credentials
  try {
    credentials = typeof rawCreds === 'string' ? JSON.parse(rawCreds) : rawCreds
  } catch {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON non valido.')
  }

  return { sheetId, credentials, range }
}

export const hasGoogleSheetConfig = () =>
  Boolean(process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_JSON)

export const appendLeadToGoogleSheet = async (payload, verification) => {
  const config = getGoogleSheetConfig()
  if (!config) {
    throw new Error('Google Sheet non configurato.')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: config.credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    String(payload.fullName).trim(),
    String(payload.city).trim(),
    String(payload.phone).trim(),
    String(payload.email).trim(),
    String(payload.timeframe).trim(),
    verification ? JSON.stringify(verification) : 'accepted',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.sheetId,
    range: config.range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: { values: [row] },
  })
}

