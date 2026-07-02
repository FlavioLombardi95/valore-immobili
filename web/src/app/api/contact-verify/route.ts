import { NextResponse } from 'next/server'
import { getPhoneValidation } from '@/lib/contact-verify'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const phone = String(body?.phone ?? '')
    if (!phone.trim()) {
      return NextResponse.json({ phone: { status: 'invalid', message: 'Numero mancante' } })
    }
    const result = await getPhoneValidation(phone)
    const isValid = result.status === 'valid'
    return NextResponse.json({
      phone: {
        status: isValid ? 'valid' : 'invalid',
        message: isValid ? 'Numero valido' : 'Numero invalido',
      },
    })
  } catch {
    return NextResponse.json(
      { phone: { status: 'invalid', message: 'Numero invalido' } },
      { status: 500 },
    )
  }
}
