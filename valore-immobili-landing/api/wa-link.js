const DEFAULT_MESSAGE =
  'Ciao, ho visto la vostra pagina e vorrei informazioni per fissare un sopralluogo gratuito per la valutazione del mio immobile.'

const sanitizePhone = (value) => String(value || '').replace(/\D/g, '')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const phone = sanitizePhone(process.env.WHATSAPP_NUMBER)
  if (!phone) {
    return res.status(500).json({ error: 'Missing WHATSAPP_NUMBER.' })
  }

  const step = String(req.query?.step || 'unknown').replace(/[^a-zA-Z0-9_-]/g, '')
  const message = req.query?.msg ? String(req.query.msg) : DEFAULT_MESSAGE
  const target = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  res.setHeader('Cache-Control', 'no-store')
  return res.redirect(302, target)
}
