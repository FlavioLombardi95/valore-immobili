import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

let sqlClient: NeonQueryFunction<false, false> | null = null

export function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('DATABASE_URL non configurato.')
  }
  if (!sqlClient) {
    sqlClient = neon(url)
  }
  return sqlClient
}

let schemaReady: Promise<void> | null = null

export async function ensureSchema() {
  const sql = getSql()
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          full_name TEXT NOT NULL,
          city TEXT NOT NULL,
          property_type TEXT NOT NULL,
          square_meters INTEGER NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL,
          timeframe TEXT NOT NULL,
          privacy_accepted BOOLEAN NOT NULL DEFAULT true,
          status TEXT NOT NULL DEFAULT 'new',
          notes TEXT,
          source_page TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `
      await sql`CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status)`
      await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`
      await sql`CREATE INDEX IF NOT EXISTS leads_city_idx ON leads (city)`
    })()
  }
  return schemaReady
}
