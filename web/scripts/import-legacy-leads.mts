import { getSql, ensureSchema } from '../src/lib/db.ts'
import { importLeadRecord } from '../src/lib/leads.ts'

const LEGACY_LEADS = [
  {
    fullName: 'MICHELE VERRILLO',
    city: 'ROMA',
    propertyType: 'Non specificato',
    squareMeters: 0,
    phone: '+393483802369',
    email: 'cybercook@gmail.com',
    timeframe: '12',
    createdAt: '2026-03-26T15:39:36.474Z',
  },
  {
    fullName: 'laviano nutarelli',
    city: 'chiusi',
    propertyType: 'Non specificato',
    squareMeters: 0,
    phone: '3336093123',
    email: 'nutarelli2003@libero.it',
    timeframe: '3',
    createdAt: '2026-03-28T12:25:42+00:00',
  },
  {
    fullName: 'Lina tocci',
    city: 'Verano Brianza',
    propertyType: 'Casa indipendente',
    squareMeters: 220,
    phone: '+393284466432',
    email: 'toccilina@libero.it',
    timeframe: '12',
    createdAt: '2026-04-16T08:30:06+00:00',
  },
  {
    fullName: 'VASYL KRUPA',
    city: 'San Gregorio di sasso',
    propertyType: 'Casa indipendente',
    squareMeters: 70,
    phone: '3207113051',
    email: 'vasilkrupa2@gmail.com',
    timeframe: '3',
    createdAt: '2026-05-08T21:43:44+00:00',
  },
] as const

async function main() {
  await ensureSchema()
  const sql = getSql()

  for (const lead of LEGACY_LEADS) {
    const existing = await sql`
      SELECT id FROM leads WHERE lower(email) = lower(${lead.email}) LIMIT 1
    `
    if (existing.length > 0) {
      console.log(`skip ${lead.email} (già presente)`)
      continue
    }

    const row = await importLeadRecord({
      ...lead,
      privacyAccepted: true,
      sourcePage: 'import/google-sheets',
    })
    console.log(`imported ${row.email} (${row.id})`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
