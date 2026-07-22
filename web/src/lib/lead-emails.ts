import type { LeadInput } from '@/lib/leads'

const RESEND_API_URL = 'https://api.resend.com/emails'
const DEFAULT_NOTIFICATION_EMAIL = 'info@valore-immobili.it'
const SITE_URL = 'https://valore-immobili.it'
const LOGO_URL = `${SITE_URL}/assets/logo-email.png`
const PRIVACY_URL = 'https://www.iubenda.com/privacy-policy/69451858'

const FONT_BODY = "'Source Sans 3', system-ui, -apple-system, 'Segoe UI', Helvetica, sans-serif"
const FONT_HEAD = "'Bricolage Grotesque', 'Source Sans 3', system-ui, -apple-system, sans-serif"

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
- Tempistica: ${timeframeLabel(input.timeframe)}

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
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light only">
    <title>Grazie per la tua richiesta</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f6fafd;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Ti ricontattiamo entro 1-2 giorni lavorativi per il sopralluogo gratuito.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6fafd;padding:24px 12px;font-family:${FONT_BODY};">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#f8fafc;border:1px solid #dbe4ef;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 0;text-align:center;">
                <img src="${LOGO_URL}" width="210" alt="Valore Immobili" style="display:inline-block;width:210px;max-width:62%;height:auto;border:0;outline:none;text-decoration:none;">
                <div style="margin:18px auto 0;height:3px;width:44px;background-color:#f26522;border-radius:9999px;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0;text-align:center;">
                <h1 style="margin:0;font-family:${FONT_HEAD};font-size:26px;line-height:1.2;font-weight:800;letter-spacing:-0.02em;color:#0f172a;">Grazie, ${firstName}!</h1>
                <p style="margin:10px 0 0;font-size:16px;line-height:1.55;color:#475569;">Abbiamo ricevuto la tua richiesta di valutazione gratuita.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0;">
                <p style="margin:0;font-size:15px;line-height:1.65;color:#171c1f;">Un consulente locale di <strong style="color:#0f172a;">Valore Immobili</strong> ti contatter&agrave; entro <strong style="color:#0f172a;">1-2 giorni lavorativi</strong> per organizzare il sopralluogo sul posto.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eaeef2;border-radius:12px;">
                  <tr>
                    <td style="padding:16px 18px;">
                      <p style="margin:0 0 12px;font-family:${FONT_HEAD};font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#005fac;">Riepilogo richiesta</p>
                      <p style="margin:0 0 6px;font-size:14px;line-height:1.5;color:#171c1f;"><strong style="color:#0f172a;">Zona:</strong> ${city}</p>
                      <p style="margin:0 0 6px;font-size:14px;line-height:1.5;color:#171c1f;"><strong style="color:#0f172a;">Immobile:</strong> ${propertyType} &middot; ${squareMeters} mq</p>
                      <p style="margin:0;font-size:14px;line-height:1.5;color:#171c1f;"><strong style="color:#0f172a;">Tempistica:</strong> ${timeframe}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 0;">
                <p style="margin:0;font-size:14px;line-height:1.6;color:#475569;">La valutazione &egrave; <strong style="color:#0f172a;">gratuita</strong> e <strong style="color:#0f172a;">senza impegno</strong>: nessun costo, nessun obbligo di affidare la vendita.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 32px 30px;">
                <p style="margin:0;font-size:14px;line-height:1.6;color:#171c1f;">A presto,<br><strong style="color:#005fac;">Il team Valore Immobili</strong></p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 26px;border-top:1px solid #dbe4ef;background-color:#eaeef2;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#475569;text-align:center;">
                  <a href="${SITE_URL}" style="color:#005fac;text-decoration:none;">valore-immobili.it</a>
                  &nbsp;&middot;&nbsp;
                  <a href="${PRIVACY_URL}" style="color:#005fac;text-decoration:none;">Privacy Policy</a>
                </p>
              </td>
            </tr>
          </table>
          <p style="margin:16px auto 0;max-width:560px;font-family:${FONT_BODY};font-size:11px;line-height:1.5;color:#475569;text-align:center;">Ricevi questa email perch&eacute; hai richiesto una valutazione su valore-immobili.it.</p>
        </td>
      </tr>
    </table>
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
Tempistica: ${timeframeLabel(input.timeframe)}
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
        <li><strong>Tempistica:</strong> ${timeframe}</li>
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
