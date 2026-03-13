#!/usr/bin/env node
/**
 * Smoke test delle API (GET /api/sheet, POST /api/lead).
 * Esegui: npm run test:api
 * Opzionale: BASE_URL=https://valore-immobili-az2m.vercel.app npm run test:api
 */
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

async function get(url) {
  const res = await fetch(url)
  const text = await res.text()
  let json
  try {
    json = JSON.parse(text)
  } catch {
    json = null
  }
  return { status: res.status, json, text }
}

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const text = await res.text()
  let json
  try {
    json = JSON.parse(text)
  } catch {
    json = null
  }
  return { status: res.status, json, text }
}

async function main() {
  console.log('Base URL:', BASE_URL)

  // GET /api/sheet: senza env restituisce 503
  const sheetRes = await get(`${BASE_URL}/api/sheet`)
  const sheetInfo = sheetRes.json?.error ?? (sheetRes.json?.rows ? sheetRes.json.rows.length : 'N/A')
  console.log('GET /api/sheet:', sheetRes.status, sheetInfo)
  if (sheetRes.status !== 503 && sheetRes.status !== 200 && sheetRes.status !== 502) {
    console.error('Unexpected status:', sheetRes.status, sheetRes.text)
    process.exit(1)
  }

  // POST /api/lead senza body: deve dare 400 (o 405 se il metodo non è accettato)
  const leadEmpty = await post(`${BASE_URL}/api/lead`, {})
  console.log('POST /api/lead (empty):', leadEmpty.status, leadEmpty.json?.error || '')
  if (leadEmpty.status !== 400 && leadEmpty.status !== 405) {
    console.error('Expected 400 or 405 for empty body, got:', leadEmpty.status)
    process.exit(1)
  }

  // POST /api/lead con campi mancanti: 400 o 503 (config non pronta)
  const leadPartial = await post(`${BASE_URL}/api/lead`, { fullName: 'Test', city: 'Monza' })
  console.log('POST /api/lead (partial):', leadPartial.status)
  const okStatuses = [400, 405, 503]
  if (!okStatuses.includes(leadPartial.status)) {
    console.error('Expected 400, 405 or 503 for partial body, got:', leadPartial.status)
    process.exit(1)
  }

  console.log('Smoke test OK')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
