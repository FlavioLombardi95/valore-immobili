import type { LeadInput } from '@/lib/leads'

const RESEND_API_URL = 'https://api.resend.com/emails'
const DEFAULT_NOTIFICATION_EMAIL = 'info@valore-immobili.it'

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const firstNameFrom = (fullName: string) => fullName.trim().split(/\s+/)[0] || 'grazie'

const timeframeLabel = (timeframe: string) => {
  const labels: Record<string, string> = {
    '3': 'Entro 3 mesi',
    '6': 'Entro 6 mesi',
    '12': 'Entro 12 mesi',
  }

  return labels[timeframe] ?? timeframe
}

const getResendConfig = () => {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    return null
  }

  return {
    apiKey,
    from,
    replyTo: process.env.RESEND_REPLY_TO_EMAIL || from,
  }
}

const sendResendEmail = async (options: {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
}) => {
  const config = getResendConfig()
  if (!config) {
    console.warn('Resend non configurato: email non inviata.')
    return
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: config.from,
      to: options.to,
      reply_to: options.replyTo ?? config.replyTo,
      subject: options.subject,
      html: options.html,
      text: options.text,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Resend email failed: ${response.status} ${error}`)
  }
}

const thankYouTextBody = (input: LeadInput) => `Ciao ${firstNameFrom(input.fullName)},

grazie per aver richiesto una valutazione gratuita con Valore Immobili.

Riepilogo richiesta:
- Zona: ${input.city}
- Immobile: ${input.propertyType} - ${input.squareMeters} mq
- Tempistica vendita: ${timeframeLabel(input.timeframe)}

Un consulente locale ti contattera entro 1-2 giorni lavorativi per organizzare il sopralluogo sul posto.

La valutazione e gratuita e senza impegno: nessun costo, nessun obbligo di affidare la vendita.

A presto,
Il team Valore Immobili
https://valore-immobili.it`

const thankYouHtmlBody = (input: LeadInput) => {
  const firstName = escapeHtml(firstNameFrom(input.fullName))
  const city = escapeHtml(input.city)
  const propertyType = escapeHtml(input.propertyType)
  const squareMeters = escapeHtml(String(input.squareMeters))
  const timeframe = escapeHtml(timeframeLabel(input.timeframe))

  return `<!doctype html>
<html lang="it">
  <body>
    <main>
      <p>Valore Immobili - Monza e Brianza</p>
      <h1>Grazie, ${firstName}!</h1>
      <p>Abbiamo ricevuto la tua richiesta di valutazione gratuita.</p>

      <p>
        Un consulente locale di <strong>Valore Immobili</strong> ti contattera entro
        <strong>1-2 giorni lavorativi</strong> per organizzare il sopralluogo sul posto.
      </p>

      <h2>Riepilogo richiesta</h2>
      <ul>
        <li><strong>Zona:</strong> ${city}</li>
        <li><strong>Immobile:</strong> ${propertyType} - ${squareMeters} mq</li>
        <li><strong>Tempistica vendita:</strong> ${timeframe}</li>
      </ul>

      <p>
        La valutazione e <strong>gratuita</strong> e <strong>senza impegno</strong>:
        nessun costo, nessun obbligo di affidare la vendita.
      </p>

      <p>A presto,<br><strong>Il team Valore Immobili</strong></p>

      <hr>
      <p>
        <a href="https://valore-immobili.it">valore-immobili.it</a>
        -
        <a href="https://www.iubenda.com/privacy-policy/69451858">Privacy Policy</a>
      </p>
    </main>
  </body>
</html>`
}

const notificationTextBody = (input: LeadInput) => `Nuova richiesta di valutazione su valore-immobili.it

Nome: ${input.fullName}
Telefono: ${input.phone}
Email: ${input.email}
Zona: ${input.city}
Tipologia: ${input.propertyType}
Metratura: ${input.squareMeters} mq
Tempistica vendita: ${timeframeLabel(input.timeframe)}
Pagina: ${input.sourcePage ?? '/'}
Privacy accettata: si

Pannello admin: https://valore-immobili.it/admin`

const notificationHtmlBody = (input: LeadInput) => {
  const fullName = escapeHtml(input.fullName)
  const phone = escapeHtml(input.phone)
  const email = escapeHtml(input.email)
  const city = escapeHtml(input.city)
  const propertyType = escapeHtml(input.propertyType)
  const squareMeters = escapeHtml(String(input.squareMeters))
  const timeframe = escapeHtml(timeframeLabel(input.timeframe))
  const sourcePage = escapeHtml(input.sourcePage ?? '/')

  return `<!doctype html>
<html lang="it">
  <body>
    <main>
      <h1>Nuova richiesta di valutazione</h1>
      <p>Arrivata una nuova lead da <strong>valore-immobili.it</strong>.</p>
      <ul>
        <li><strong>Nome:</strong> ${fullName}</li>
        <li><strong>Telefono:</strong> <a href="tel:${phone}">${phone}</a></li>
        <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
        <li><strong>Zona:</strong> ${city}</li>
        <li><strong>Tipologia:</strong> ${propertyType}</li>
        <li><strong>Metratura:</strong> ${squareMeters} mq</li>
        <li><strong>Tempistica vendita:</strong> ${timeframe}</li>
        <li><strong>Pagina:</strong> ${sourcePage}</li>
      </ul>
      <p><a href="https://valore-immobili.it/admin">Apri pannello admin</a></p>
    </main>
  </body>
</html>`
}

export async function sendLeadThankYouEmail(input: LeadInput) {
  await sendResendEmail({
    to: input.email,
    subject: `Grazie ${firstNameFrom(input.fullName)}, richiesta ricevuta`,
    html: thankYouHtmlBody(input),
    text: thankYouTextBody(input),
  })
}

export async function sendLeadNotificationEmail(input: LeadInput) {
  const to = process.env.LEAD_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL

  await sendResendEmail({
    to,
    subject: `Nuova lead: ${input.fullName} - ${input.city}`,
    html: notificationHtmlBody(input),
    text: notificationTextBody(input),
    replyTo: input.email,
  })
}

export async function sendLeadEmails(input: LeadInput) {
  await Promise.all([
    sendLeadThankYouEmail(input),
    sendLeadNotificationEmail(input),
  ])
}
