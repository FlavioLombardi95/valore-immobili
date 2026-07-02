import { ensureSchema, getSql } from '@/lib/db'
import {
  type LeadStatus,
  type TrattativaStatus,
} from '@/lib/lead-status'

export type { LeadStatus, TrattativaStatus } from '@/lib/lead-status'
export {
  TRATTATIVA_STATUSES,
  TRATTATIVA_STATUS_LABELS,
  isTrattativaStatus,
} from '@/lib/lead-status'

export type LeadRow = {
  id: string
  full_name: string
  city: string
  property_type: string
  square_meters: number
  phone: string
  email: string
  timeframe: string
  privacy_accepted: boolean
  status: LeadStatus
  trattativa_status: TrattativaStatus | null
  notes: string | null
  source_page: string | null
  created_at: string
  updated_at: string
}

export type LeadInput = {
  fullName: string
  city: string
  propertyType: string
  squareMeters: number
  phone: string
  email: string
  timeframe: string
  privacyAccepted: boolean
  sourcePage?: string
}

export async function insertLead(input: LeadInput) {
  await ensureSchema()
  const sql = getSql()
  const rows = await sql`
    INSERT INTO leads (
      full_name, city, property_type, square_meters, phone, email,
      timeframe, privacy_accepted, source_page
    ) VALUES (
      ${input.fullName},
      ${input.city},
      ${input.propertyType},
      ${input.squareMeters},
      ${input.phone},
      ${input.email},
      ${input.timeframe},
      ${input.privacyAccepted},
      ${input.sourcePage ?? null}
    )
    RETURNING *
  `
  return rows[0] as LeadRow
}

export async function importLeadRecord(
  input: LeadInput & { createdAt?: string; status?: LeadStatus },
) {
  await ensureSchema()
  const sql = getSql()

  if (input.createdAt) {
    const rows = await sql`
      INSERT INTO leads (
        full_name, city, property_type, square_meters, phone, email,
        timeframe, privacy_accepted, source_page, status, created_at, updated_at
      ) VALUES (
        ${input.fullName},
        ${input.city},
        ${input.propertyType},
        ${input.squareMeters},
        ${input.phone},
        ${input.email},
        ${input.timeframe},
        ${input.privacyAccepted},
        ${input.sourcePage ?? 'import/legacy'},
        ${input.status ?? 'new'},
        ${input.createdAt}::timestamptz,
        ${input.createdAt}::timestamptz
      )
      RETURNING *
    `
    return rows[0] as LeadRow
  }

  return insertLead(input)
}

export async function listLeads(filters?: { status?: LeadStatus; q?: string }) {
  await ensureSchema()
  const sql = getSql()
  const status = filters?.status
  const q = filters?.q?.trim()

  if (status && q) {
    const pattern = `%${q}%`
    return (await sql`
      SELECT * FROM leads
      WHERE status = ${status}
        AND (
          full_name ILIKE ${pattern}
          OR city ILIKE ${pattern}
          OR email ILIKE ${pattern}
          OR phone ILIKE ${pattern}
        )
      ORDER BY created_at DESC
      LIMIT 200
    `) as LeadRow[]
  }

  if (status) {
    return (await sql`
      SELECT * FROM leads WHERE status = ${status}
      ORDER BY created_at DESC LIMIT 200
    `) as LeadRow[]
  }

  if (q) {
    const pattern = `%${q}%`
    return (await sql`
      SELECT * FROM leads
      WHERE full_name ILIKE ${pattern}
         OR city ILIKE ${pattern}
         OR email ILIKE ${pattern}
         OR phone ILIKE ${pattern}
      ORDER BY created_at DESC LIMIT 200
    `) as LeadRow[]
  }

  return (await sql`
    SELECT * FROM leads ORDER BY created_at DESC LIMIT 200
  `) as LeadRow[]
}

export async function updateLead(
  id: string,
  patch: {
    status?: LeadStatus
    trattativaStatus?: TrattativaStatus | null
    notes?: string | null
  },
) {
  await ensureSchema()
  const sql = getSql()
  const existing = await sql`SELECT * FROM leads WHERE id = ${id}::uuid LIMIT 1`
  const current = existing[0] as LeadRow | undefined
  if (!current) return null

  const nextStatus = patch.status ?? current.status
  const nextNotes = patch.notes !== undefined ? patch.notes : current.notes
  const nextTrattativaStatus =
    patch.trattativaStatus !== undefined ? patch.trattativaStatus : current.trattativa_status

  const rows = await sql`
    UPDATE leads
    SET
      status = ${nextStatus},
      trattativa_status = ${nextTrattativaStatus},
      notes = ${nextNotes},
      updated_at = NOW()
    WHERE id = ${id}::uuid
    RETURNING *
  `
  return (rows[0] as LeadRow | undefined) ?? null
}
