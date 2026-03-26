import { getEmailValidation, getPhoneValidation } from './_lib/contact-verify.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const { phone, email } = req.body || {}

    if (!phone && !email) {
      return res.status(400).json({ error: 'Missing phone or email.' })
    }

    const result = {}

    if (phone) {
      result.phone = await getPhoneValidation(phone)
    }
    if (email) {
      result.email = await getEmailValidation(email)
    }

    return res.status(200).json(result)
  } catch {
    return res.status(500).json({ error: 'Validation service error.' })
  }
}

