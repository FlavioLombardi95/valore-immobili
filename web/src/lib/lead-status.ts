export type LeadStatus = 'new' | 'contacted' | 'appointment' | 'discarded'

export type TrattativaStatus = 'ko' | 'in_trattativa' | 'venduta'

export const TRATTATIVA_STATUSES: TrattativaStatus[] = ['ko', 'in_trattativa', 'venduta']

export const TRATTATIVA_STATUS_LABELS: Record<TrattativaStatus, string> = {
  ko: 'Ko',
  in_trattativa: 'In trattativa',
  venduta: 'Venduta',
}

export const isTrattativaStatus = (value: string): value is TrattativaStatus =>
  TRATTATIVA_STATUSES.includes(value as TrattativaStatus)

export const isLeadStatus = (value: string): value is LeadStatus =>
  ['new', 'contacted', 'appointment', 'discarded'].includes(value)
