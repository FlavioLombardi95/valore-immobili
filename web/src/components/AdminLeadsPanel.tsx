'use client'

import { useCallback, useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'

type Lead = {
  id: string
  full_name: string
  city: string
  property_type: string
  square_meters: number
  phone: string
  email: string
  timeframe: string
  status: 'new' | 'contacted' | 'appointment' | 'discarded'
  notes: string | null
  source_page: string | null
  created_at: string
}

const STATUS_LABELS: Record<Lead['status'], string> = {
  new: 'Nuova',
  contacted: 'Contattata',
  appointment: 'Appuntamento',
  discarded: 'Scartata',
}

export function AdminLeadsPanel() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [status, setStatus] = useState('')
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadLeads = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      if (status) params.set('status', status)
      if (q.trim()) params.set('q', q.trim())
      const res = await fetch(`/api/admin/leads?${params.toString()}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Errore caricamento lead.')
      setLeads(data.leads)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore caricamento lead.')
    } finally {
      setLoading(false)
    }
  }, [status, q])

  useEffect(() => {
    void loadLeads()
  }, [loadLeads])

  const updateLead = async (id: string, patch: { status?: Lead['status']; notes?: string | null }) => {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Aggiornamento non riuscito.')
      return
    }
    setLeads((prev) => prev.map((lead) => (lead.id === id ? data.lead : lead)))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-headline text-2xl font-extrabold text-ink">Lead</h1>
          <p className="text-sm text-slate">Gestione richieste di valutazione immobiliare.</p>
        </div>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: '/' })}
          className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-secondary"
        >
          Esci
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[180px_1fr_auto]">
        <label className="block space-y-1">
          <span className="text-xs font-semibold text-body">Stato</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm"
          >
            <option value="">Tutte</option>
            <option value="new">Nuove</option>
            <option value="contacted">Contattate</option>
            <option value="appointment">Appuntamento</option>
            <option value="discarded">Scartate</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-semibold text-body">Cerca</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nome, città, email, telefono"
            className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          onClick={() => void loadLeads()}
          className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white"
        >
          Aggiorna
        </button>
      </div>

      {error && <p className="rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">{error}</p>}
      {loading ? (
        <p className="text-sm text-slate">Caricamento…</p>
      ) : leads.length === 0 ? (
        <p className="rounded-2xl border border-line bg-white p-6 text-sm text-slate">Nessuna lead trovata.</p>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <article key={lead.id} className="rounded-2xl border border-line bg-white p-4 md:p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="font-headline text-lg font-bold text-ink">{lead.full_name}</h2>
                  <p className="text-sm text-slate">
                    {lead.city} · {lead.property_type} · {lead.square_meters} mq · vendita entro {lead.timeframe} mesi
                  </p>
                  <p className="mt-1 text-sm text-body">
                    <a href={`tel:${lead.phone}`} className="font-semibold text-secondary hover:underline">
                      {lead.phone}
                    </a>
                    {' · '}
                    <a href={`mailto:${lead.email}`} className="font-semibold text-secondary hover:underline">
                      {lead.email}
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {new Date(lead.created_at).toLocaleString('it-IT')}
                    {lead.source_page ? ` · ${lead.source_page}` : ''}
                  </p>
                </div>
                <label className="block min-w-[180px] space-y-1">
                  <span className="text-xs font-semibold text-body">Stato</span>
                  <select
                    value={lead.status}
                    onChange={(e) => void updateLead(lead.id, { status: e.target.value as Lead['status'] })}
                    className="w-full rounded-xl border border-line bg-cloud px-3 py-2 text-sm font-semibold"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-4 block space-y-1">
                <span className="text-xs font-semibold text-body">Note interne</span>
                <textarea
                  defaultValue={lead.notes ?? ''}
                  rows={2}
                  className="w-full rounded-xl border border-line bg-cloud px-3 py-2 text-sm"
                  onBlur={(e) => {
                    const next = e.target.value.trim()
                    if (next !== (lead.notes ?? '')) {
                      void updateLead(lead.id, { notes: next || null })
                    }
                  }}
                />
              </label>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
