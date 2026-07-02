import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { updateLead } from '@/lib/leads'
import { isLeadStatus, isTrattativaStatus } from '@/lib/lead-status'

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await requireAdmin()
  if (!session) {
    return NextResponse.json({ error: 'Non autorizzato.' }, { status: 401 })
  }

  const { id } = await context.params
  const body = await request.json()
  const status = typeof body.status === 'string' && isLeadStatus(body.status)
    ? body.status
    : undefined
  const notes = typeof body.notes === 'string' ? body.notes : body.notes === null ? null : undefined
  const trattativaStatus =
    typeof body.trattativaStatus === 'string' && isTrattativaStatus(body.trattativaStatus)
      ? body.trattativaStatus
      : body.trattativaStatus === null
        ? null
        : undefined

  const lead = await updateLead(id, { status, trattativaStatus, notes })
  if (!lead) {
    return NextResponse.json({ error: 'Lead non trovata.' }, { status: 404 })
  }
  return NextResponse.json({ lead })
}
