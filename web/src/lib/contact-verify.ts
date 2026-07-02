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
])

const normalizeItalianPhone = (rawPhone = '') => {
  const trimmed = String(rawPhone).trim()
  if (!trimmed) return ''
  if (trimmed.startsWith('+')) return trimmed
  if (trimmed.startsWith('00')) return `+${trimmed.slice(2)}`
  return `+39${trimmed.replace(/\D/g, '')}`
}

const getNationalDigits = (normalizedPhone: string) => {
  const digits = String(normalizedPhone || '').replace(/\D/g, '')
  if (digits.startsWith('39') && digits.length >= 11) {
    return digits.slice(2)
  }
  return digits
}

const isSequentialRun = (digits: string) => {
  if (!digits || digits.length < 6) return false
  const asc = '01234567890123456789'
  const desc = '98765432109876543210'
  return asc.includes(digits) || desc.includes(digits)
}

const isDummyPhone = (normalizedPhone: string) => {
  const national = getNationalDigits(normalizedPhone)
  if (!national) return true
  if (/^(\d)\1+$/.test(national)) return true
  if (/0{6,}/.test(national)) return true
  if (/(\d)\1{6,}/.test(national)) return true
  if (isSequentialRun(national)) return true
  if (/^3\d0{7,8}$/.test(national)) return true
  return false
}

const isDummyEmail = (email: string) => {
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

const getPhoneValidationFromTwilio = async ({
  accountSid,
  authToken,
  normalizedPhone,
}: {
  accountSid: string
  authToken: string
  normalizedPhone: string
}) => {
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
    return { status: 'unknown' as const, reason: 'twilio_lookup_failed' }
  }
  const payload = await response.json()
  if (!payload?.valid || !payload?.phone_number) {
    return { status: 'invalid' as const, reason: 'not_valid' }
  }
  return {
    status: 'valid' as const,
    reason: payload?.line_type_intelligence?.type || 'valid',
    normalized: payload.phone_number as string,
  }
}

export const getPhoneValidation = async (phone: string) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  if (!accountSid || !authToken) {
    throw new Error('Credenziali verifica telefono mancanti.')
  }
  const normalizedPhone = normalizeItalianPhone(phone)
  const digitsCount = normalizedPhone.replace(/\D/g, '').length
  if (digitsCount < 8) {
    return { status: 'invalid' as const, reason: 'too_short' }
  }
  if (isDummyPhone(normalizedPhone)) {
    return { status: 'invalid' as const, reason: 'dummy_pattern' }
  }
  return getPhoneValidationFromTwilio({ accountSid, authToken, normalizedPhone })
}

export const getEmailValidation = async (email: string) => {
  const trimmedEmail = String(email || '').trim().toLowerCase()
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { status: 'invalid' as const, reason: 'syntax' }
  }
  if (isDummyEmail(trimmedEmail)) {
    return { status: 'invalid' as const, reason: 'dummy_pattern' }
  }
  return { status: 'valid' as const, reason: 'syntax_only' }
}
