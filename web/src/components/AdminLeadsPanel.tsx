'use client'

import { useCallback, useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import {
  TRATTATIVA_STATUS_LABELS,
  TRATTATIVA_STATUSES,
  type TrattativaStatus,
} from '@/lib/lead-status'

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
  trattativa_status: TrattativaStatus | null
  source_page: string | null
  created_at: string
}

const STATUS_LABELS: Record<Lead['status'], string> = {
  new: 'Nuova',
  contacted: 'Contattata',
  appointment: 'Appuntamento',
  discarded: 'Scartata',
}

const trattativaSelectClass = (value: TrattativaStatus | null) => {
  switch (value) {
    case 'ko':
      return 'border-error/40 bg-error/10 text-error'
    case 'in_trattativa':
      return 'border-amber-400 bg-amber-50 text-amber-900'
    case 'venduta':
      return 'border-emerald-400 bg-emerald-50 text-emerald-900'
    default:
      return 'border-line bg-cloud text-slate'
  }
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

export function AdminLeadsPanel({ preview = false }: { preview?: boolean }) {
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

  const updateLead = async (
    id: string,
    patch: {
      status?: Lead['status']
      trattativaStatus?: TrattativaStatus | null
    },
  ) => {
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
          {preview && (
            <p className="mt-1 text-xs font-semibold text-amber-800">Anteprima locale — modifiche visibili in tempo reale</p>
          )}
        </div>
        {!preview && (
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: '/' })}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-secondary"
          >
            Esci
          </button>
        )}
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
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[960px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-cloud text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="px-3 py-3 font-semibold">Data</th>
                <th scope="col" className="px-3 py-3 font-semibold">Nome</th>
                <th scope="col" className="px-3 py-3 font-semibold">Città</th>
                <th scope="col" className="px-3 py-3 font-semibold">Tipologia</th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">mq</th>
                <th scope="col" className="px-3 py-3 font-semibold">Contatti</th>
                <th scope="col" className="px-3 py-3 font-semibold">Vendita</th>
                <th scope="col" className="px-3 py-3 font-semibold">Stato</th>
                <th scope="col" className="px-3 py-3 font-semibold">Status trattativa</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-line/70 align-top last:border-0 hover:bg-cloud/60">
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-muted">{formatDate(lead.created_at)}</td>
                  <td className="px-3 py-3 font-semibold text-ink">{lead.full_name}</td>
                  <td className="px-3 py-3 text-body">{lead.city}</td>
                  <td className="px-3 py-3 text-body">{lead.property_type}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-right text-body">
                    {lead.square_meters > 0 ? lead.square_meters : '—'}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-col gap-0.5">
                      <a href={`tel:${lead.phone}`} className="font-semibold text-secondary hover:underline">
                        {lead.phone}
                      </a>
                      <a href={`mailto:${lead.email}`} className="text-xs text-slate hover:underline">
                        {lead.email}
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-body">entro {lead.timeframe} mesi</td>
                  <td className="px-3 py-3">
                    <select
                      aria-label={`Stato lead ${lead.full_name}`}
                      value={lead.status}
                      onChange={(e) => void updateLead(lead.id, { status: e.target.value as Lead['status'] })}
                      className="w-full min-w-[130px] rounded-lg border border-line bg-cloud px-2 py-1.5 text-sm font-semibold"
                    >
                      {Object.entries(STATUS_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-3">
                    <select
                      aria-label={`Status trattativa lead ${lead.full_name}`}
                      value={lead.trattativa_status ?? ''}
                      onChange={(e) => {
                        const value = e.target.value
                        void updateLead(lead.id, {
                          trattativaStatus: value ? (value as TrattativaStatus) : null,
                        })
                      }}
                      className={`w-full min-w-[150px] rounded-lg border px-2 py-1.5 text-sm font-semibold ${trattativaSelectClass(lead.trattativa_status)}`}
                    >
                      <option value="">— Da impostare —</option>
                      {TRATTATIVA_STATUSES.map((value) => (
                        <option key={value} value={value}>
                          {TRATTATIVA_STATUS_LABELS[value]}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
