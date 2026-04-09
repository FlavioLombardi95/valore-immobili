const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const STRICT_INVALID_STATUSES = new Set(['invalid', 'risky', 'unknown', 'missing'])

const BLOCKED_EMAIL_DOMAINS = new Set([
  'example.com',
  'example.org',
  'example.net',
  'mailinator.com',
  'guerrillamail.com',
  '10minutemail.com',
  'tempmail.com',
  'yopmail.com',
])

const BLOCKED_EMAIL_LOCALS = new Set([
  'test',
  'prova',
  'fake',
  'falso',
  'qwerty',
  'asdf',
  'abc123',
  'utente',
  'user',
  'nome',
  'mail',
  'ciao',
])

const normalizeItalianPhone = (rawPhone = '') => {
  const trimmed = String(rawPhone).trim()
  if (!trimmed) return ''
  if (trimmed.startsWith('+')) return trimmed
  if (trimmed.startsWith('00')) return `+${trimmed.slice(2)}`
  return `+39${trimmed.replace(/\D/g, '')}`
}

const getNationalDigits = (normalizedPhone) => {
  const digits = String(normalizedPhone || '').replace(/\D/g, '')
  if (digits.startsWith('39') && digits.length >= 11) {
    return digits.slice(2)
  }
  return digits
}

const isSequentialRun = (digits) => {
  if (!digits || digits.length < 6) return false
  const asc = '01234567890123456789'
  const desc = '98765432109876543210'
  return asc.includes(digits) || desc.includes(digits)
}

const isDummyPhone = (normalizedPhone) => {
  const national = getNationalDigits(normalizedPhone)
  if (!national) return true

  // Strong anti-dummy guards for fake lead patterns.
  if (/^(\d)\1+$/.test(national)) return true
  if (/0{6,}/.test(national)) return true
  if (/(\d)\1{6,}/.test(national)) return true
  if (isSequentialRun(national)) return true
  if (/^3\d0{7,8}$/.test(national)) return true

  return false
}

const isDummyEmail = (email) => {
  const normalized = String(email || '').trim().toLowerCase()
  if (!normalized) return true
  const [local = '', domain = ''] = normalized.split('@')
  if (!local || !domain) return true
  if (BLOCKED_EMAIL_DOMAINS.has(domain)) return true
  if (BLOCKED_EMAIL_LOCALS.has(local)) return true
  if (/(.)\1{4,}/.test(local)) return true
  if (/^(test|prova|fake|mail|user|nome)[._-]?\d{0,4}$/.test(local)) return true
  return false
}

const getPhoneValidationFromTwilio = async ({ accountSid, authToken, normalizedPhone }) => {
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
    return { status: 'unknown', reason: 'twilio_lookup_failed' }
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

const getPhoneValidationFromTelesign = async ({ customerId, apiKey, normalizedPhone }) => {
  const endpoint = `https://rest-api.telesign.com/v1/phoneid/${encodeURIComponent(normalizedPhone)}`
  const auth = Buffer.from(`${customerId}:${apiKey}`).toString('base64')
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    return { status: 'unknown', reason: 'telesign_lookup_failed' }
  }

  const payload = await response.json()
  const code = Number(payload?.status?.code)
  if (!Number.isNaN(code) && code !== 200) {
    return { status: 'unknown', reason: 'telesign_status_not_ok' }
  }

  const phoneType = String(payload?.phone_type?.description || '').toLowerCase()
  if (phoneType.includes('disconnected') || phoneType.includes('invalid')) {
    return { status: 'invalid', reason: 'telesign_invalid' }
  }

  return {
    status: 'valid',
    reason: phoneType || 'telesign_valid',
    normalized: normalizedPhone,
  }
}

export const getPhoneValidation = async (phone) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const telesignCustomerId = process.env.TELESIGN_CUSTOMER_ID
  const telesignApiKey = process.env.TELESIGN_API_KEY

  if ((!accountSid || !authToken) && (!telesignCustomerId || !telesignApiKey)) {
    throw new Error('Missing phone verification credentials.')
  }

  const normalizedPhone = normalizeItalianPhone(phone)
  const digitsCount = normalizedPhone.replace(/\D/g, '').length
  if (digitsCount < 8) {
    return { status: 'invalid', reason: 'too_short' }
  }
  if (isDummyPhone(normalizedPhone)) {
    return { status: 'invalid', reason: 'dummy_pattern' }
  }

  if (accountSid && authToken) {
    const twilioResult = await getPhoneValidationFromTwilio({ accountSid, authToken, normalizedPhone })
    if (twilioResult.status !== 'unknown' || !telesignCustomerId || !telesignApiKey) {
      return twilioResult
    }
  }

  return getPhoneValidationFromTelesign({
    customerId: telesignCustomerId,
    apiKey: telesignApiKey,
    normalizedPhone,
  })
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
  if (isDummyEmail(trimmedEmail)) {
    return { status: 'invalid', reason: 'dummy_pattern' }
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

