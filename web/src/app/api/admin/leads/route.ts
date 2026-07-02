import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { listLeads, type LeadStatus } from '@/lib/leads'

const isLeadStatus = (value: string): value is LeadStatus =>
  ['new', 'contacted', 'appointment', 'discarded'].includes(value)

export async function GET(request: Request) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Non autorizzato.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const statusParam = searchParams.get('status') ?? undefined
  const q = searchParams.get('q') ?? undefined
  const status = statusParam && isLeadStatus(statusParam) ? statusParam : undefined

  const leads = await listLeads({ status, q })
  return NextResponse.json({ leads })
}
