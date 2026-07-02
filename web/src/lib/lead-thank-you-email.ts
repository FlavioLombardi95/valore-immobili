import type { LeadInput } from '@/lib/leads'

const RESEND_API_URL = 'https://api.resend.com/emails'
const DEFAULT_WHATSAPP_NUMBER = '393342737505'

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

const whatsappHref = (input: LeadInput) => {
  const phone = (process.env.WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
  const message = [
    `Ciao, sono ${firstNameFrom(input.fullName)},`,
    `ho appena inviato una richiesta di valutazione per un ${input.propertyType}`,
    `a ${input.city} (${input.squareMeters} mq).`,
    'Vorrei organizzare il sopralluogo gratuito. Grazie!',
  ].join(' ')

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

const textBody = (input: LeadInput) => `Ciao ${firstNameFrom(input.fullName)},

grazie per aver richiesto una valutazione gratuita con Valore Immobili.

Riepilogo richiesta:
- Zona: ${input.city}
- Immobile: ${input.propertyType} - ${input.squareMeters} mq
- Tempistica vendita: ${timeframeLabel(input.timeframe)}

Un consulente locale ti contattera entro 1-2 giorni lavorativi per organizzare il sopralluogo sul posto.

La valutazione e gratuita e senza impegno: nessun costo, nessun obbligo di affidare la vendita.

Hai urgenza? Scrivici su WhatsApp:
${whatsappHref(input)}

A presto,
Il team Valore Immobili
https://valore-immobili.it`

const htmlBody = (input: LeadInput) => {
  const firstName = escapeHtml(firstNameFrom(input.fullName))
  const city = escapeHtml(input.city)
  const propertyType = escapeHtml(input.propertyType)
  const squareMeters = escapeHtml(String(input.squareMeters))
  const timeframe = escapeHtml(timeframeLabel(input.timeframe))
  const whatsappUrl = whatsappHref(input)

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

      <p>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          Scrivici su WhatsApp
        </a>
      </p>

      <p>Hai urgenza? Apri WhatsApp e inviaci subito il messaggio precompilato.</p>
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

export async function sendLeadThankYouEmail(input: LeadInput) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    console.warn('Resend non configurato: email di ringraziamento non inviata.')
    return
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: input.email,
      reply_to: process.env.RESEND_REPLY_TO_EMAIL || from,
      subject: `Grazie ${firstNameFrom(input.fullName)}, richiesta ricevuta`,
      html: htmlBody(input),
      text: textBody(input),
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Resend email failed: ${response.status} ${error}`)
  }
}
