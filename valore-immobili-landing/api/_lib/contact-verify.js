const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const STRICT_INVALID_STATUSES = new Set(['invalid', 'risky', 'unknown', 'missing'])

const normalizeItalianPhone = (rawPhone = '') => {
  const trimmed = String(rawPhone).trim()
  if (!trimmed) return ''
  if (trimmed.startsWith('+')) return trimmed
  if (trimmed.startsWith('00')) return `+${trimmed.slice(2)}`
  return `+39${trimmed.replace(/\D/g, '')}`
}

export const getPhoneValidation = async (phone) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN

  if (!accountSid || !authToken) {
    throw new Error('Missing Twilio credentials.')
  }

  const normalizedPhone = normalizeItalianPhone(phone)
  const digitsCount = normalizedPhone.replace(/\D/g, '').length
  if (digitsCount < 8) {
    return { status: 'invalid', reason: 'too_short' }
  }

  const lookupUrl = `https://lookups.twilio.com/v2/PhoneNumbers/${encodeURIComponent(normalizedPhone)}?Fields=line_type_intelligence`
  const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString('base64')

  const response = await fetch(lookupUrl, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    return { status: 'invalid', reason: 'lookup_failed' }
  }

  const payload = await response.json()
  if (!payload?.valid || !payload?.phone_number) {
    return { status: 'invalid', reason: 'not_valid' }
  }

  return {
    status: 'valid',
    reason: payload?.line_type_intelligence?.type || 'valid',
    normalized: payload.phone_number,
  }
}

export const getEmailValidation = async (email) => {
  const kickboxApiKey = process.env.KICKBOX_API_KEY

  if (!kickboxApiKey) {
    throw new Error('Missing Kickbox API key.')
  }

  const trimmedEmail = String(email || '').trim().toLowerCase()
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { status: 'invalid', reason: 'syntax' }
  }

  const query = new URLSearchParams({
    apikey: kickboxApiKey,
    email: trimmedEmail,
  })
  const response = await fetch(`https://api.kickbox.com/v2/verify?${query.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    return { status: 'invalid', reason: 'validation_failed' }
  }

  const payload = await response.json()
  const result = String(payload?.result || '').toLowerCase()
  const reason = String(payload?.reason || '').toLowerCase()
  const isDisposable = Boolean(payload?.disposable)

  if (result === 'deliverable' && !isDisposable) {
    return { status: 'valid', reason: reason || 'deliverable' }
  }

  if (result === 'undeliverable' || isDisposable) {
    return { status: 'invalid', reason: reason || 'undeliverable' }
  }

  if (result === 'risky') {
    return { status: 'risky', reason: reason || 'risky' }
  }

  if (result === 'unknown') {
    return { status: 'unknown', reason: reason || 'unknown' }
  }

  return { status: 'unknown', reason: 'unknown' }
}

