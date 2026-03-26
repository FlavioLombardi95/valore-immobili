import React, { useEffect, useState } from 'react'
import heroLogo from '../logos/Logo_Valore_Immobili_orrizontale_piccolo-removebg-preview.png'
import mainImg from './assets/main-img.jpg'
import './App.css'

/** URL della Privacy Policy (Iubenda: dal dashboard copia il "Direct link"). */
const PRIVACY_POLICY_URL =
  import.meta.env.VITE_IUBENDA_PRIVACY_URL ||
  'https://www.iubenda.com/privacy-policy/69451858'

const COOKIE_POLICY_URL =
  'https://www.iubenda.com/privacy-policy/69451858/cookie-policy'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const defaultContactValidation = {
  phone: { status: 'idle', message: '' },
  email: { status: 'idle', message: '' },
}

const isContactFieldValid = (fieldValidation) => fieldValidation.status === 'valid'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    phone: '',
    email: '',
    timeframe: '',
    privacyAccepted: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [contactValidation, setContactValidation] = useState(defaultContactValidation)

  const setContactFieldValidation = (field, status, message) => {
    setContactValidation((prev) => ({
      ...prev,
      [field]: { status, message },
    }))
  }

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (field === 'phone' || field === 'email') {
      setContactFieldValidation(field, 'idle', '')
    }
  }

  const handleTimeframeSelect = (value) => {
    setFormData((prev) => ({ ...prev, timeframe: value }))
    setErrors((prev) => ({ ...prev, timeframe: undefined }))
  }

  const handlePrivacyChange = (event) => {
    const checked = event.target.checked
    setFormData((prev) => ({ ...prev, privacyAccepted: checked }))
    setErrors((prev) => ({ ...prev, privacyAccepted: undefined }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.fullName.trim()) nextErrors.fullName = 'Inserisci nome e cognome.'
    if (!formData.city.trim()) nextErrors.city = 'Inserisci la città dell’immobile.'
    if (!formData.phone.trim()) nextErrors.phone = 'Inserisci un numero di telefono.'
    if (!formData.email.trim()) nextErrors.email = 'Inserisci un indirizzo email.'
    if (!formData.timeframe) nextErrors.timeframe = 'Seleziona una tempistica indicativa.'
    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted = 'Devi accettare la privacy policy per proseguire.'
    }
    if (formData.phone.trim() && !isContactFieldValid(contactValidation.phone)) {
      nextErrors.phone = 'Numero di telefono invalido.'
    }
    if (formData.email.trim() && !isContactFieldValid(contactValidation.email)) {
      nextErrors.email = 'Indirizzo email invalido.'
    }
    return nextErrors
  }

  useEffect(() => {
    const trimmedPhone = formData.phone.trim()
    if (!trimmedPhone) {
      setContactFieldValidation('phone', 'idle', '')
      return
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '')
    if (digitsOnly.length < 8) {
      setContactFieldValidation('phone', 'invalid', 'Numero invalido')
      return
    }

    const timeoutId = setTimeout(async () => {
      setContactFieldValidation('phone', 'checking', '')
      try {
        const res = await fetch('/api/contact-verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: trimmedPhone }),
        })
        const data = await res.json().catch(() => ({}))
        const isValid = res.ok && data?.phone?.status === 'valid'
        setContactFieldValidation(
          'phone',
          isValid ? 'valid' : 'invalid',
          isValid ? 'Numero valido' : 'Numero invalido',
        )
      } catch {
        setContactFieldValidation('phone', 'invalid', 'Numero invalido')
      }
    }, 700)

    return () => clearTimeout(timeoutId)
  }, [formData.phone])

  useEffect(() => {
    const trimmedEmail = formData.email.trim()
    if (!trimmedEmail) {
      setContactFieldValidation('email', 'idle', '')
      return
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setContactFieldValidation('email', 'invalid', 'Email invalida')
      return
    }

    const timeoutId = setTimeout(async () => {
      setContactFieldValidation('email', 'checking', '')
      try {
        const res = await fetch('/api/contact-verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmedEmail }),
        })
        const data = await res.json().catch(() => ({}))
        const isValid = res.ok && data?.email?.status === 'valid'
        setContactFieldValidation(
          'email',
          isValid ? 'valid' : 'invalid',
          isValid ? 'Email valida' : 'Email invalida',
        )
      } catch {
        setContactFieldValidation('email', 'invalid', 'Email invalida')
      }
    }, 700)

    return () => clearTimeout(timeoutId)
  }, [formData.email])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setErrors({ submit: data.error || 'Errore durante l’invio. Riprova.' })
        return
      }
      if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'lead_submit_success',
          timeframe: formData.timeframe,
        })
      }
      setSubmitted(true)
    } catch {
      setErrors({ submit: 'Errore di connessione. Riprova.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <div className="page-shell">
        <section className="hero-panel">
          <div>
            <div className="hero-logo-banner">
              <img
                src={heroLogo}
                alt="Valore Immobili"
              />
            </div>

            <br />

            <div className="hero-copy">
              <h1>Richiedi una valutazione reale del tuo immobile.</h1>
              <p className="hero-subtitle">
                Non una stima automatica basata su medie di mercato o dati
                statistici, ma{' '}
                <strong>un’analisi concreta fatta sul posto</strong>.
              </p>
              <p className="hero-note">
                A differenza di tante piattaforme online, che generano valori
                indicativi partendo da dati generici, noi ti forniamo una
                stima precisa, ragionata e aderente al mercato reale in quel
                momento.
                <br />
                <br />
                Un nostro esperto visita personalmente l’immobile, osserva
                ogni dettaglio, valuta il contesto reale e confronta la
                situazione con le compravendite effettive della zona. Il
                risultato è una valutazione costruita su ciò che esiste
                davvero, <strong>non su un algoritmo</strong>.
                <br />
                <br />
                Questo servizio è pensato per proprietari che stanno{' '}
                <strong>valutando concretamente la vendita</strong> entro i
                prossimi 3–12 mesi. Se cerchi solo una stima veloce e indicativa,
                probabilmente non è il servizio giusto.
              </p>

              <div className="hero-desktop-image">
                <img
                  src={mainImg}
                  alt="Immobile"
                />
              </div>
            </div>
          </div>

          <div className="hero-footnotes" aria-label="Informazioni sul servizio">
            <div>
              <div className="hero-footnote-label">Costo servizio</div>
              <div className="hero-footnote-value">
                <span>Valutazione gratuita</span>
                <br />
                Nessun impegno di incarico
              </div>
            </div>
            <div>
              <div className="hero-footnote-label">Modalità servizio</div>
              <div className="hero-footnote-value">
                <span>Su appuntamento</span>
                <br />
                Valutazione sul posto
              </div>
            </div>
            <div>
              <div className="hero-footnote-label">Come funziona</div>
              <div className="hero-footnote-value">
                <span>Sopralluogo sul posto</span>
                <br />
                Analisi comparativa di mercato
              </div>
            </div>
            <div>
              <div className="hero-footnote-label">Dopo la richiesta</div>
              <div className="hero-footnote-value">
                <span>Ti richiamiamo noi</span>
                <br />
                per concordare giorno e orario
              </div>
            </div>
          </div>
        </section>

        <section className="form-panel" aria-label="Richiesta valutazione immobile">
          {!submitted ? (
            <>
              <header className="form-header">
                <div className="form-kicker">Richiedi la valutazione gratuita</div>
                <h2 className="form-title">
                  Compila il form: bastano pochi secondi.
                </h2>
                <p className="form-caption">
                  Ti contatteremo solo per organizzare il sopralluogo del tuo
                  immobile, senza pressioni e senza obbligo di vendita.
                </p>
              </header>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field-group">
                  <label className="field-label" htmlFor="fullName">
                    Nome e cognome<span>*</span>
                  </label>
                  <input
                    id="fullName"
                    className={`field-input ${errors.fullName ? 'error' : ''}`}
                    type="text"
                    autoComplete="name"
                    placeholder="Es. Laura Rossi"
                    value={formData.fullName}
                    onChange={handleChange('fullName')}
                  />
                  {errors.fullName && (
                    <p className="error-text">{errors.fullName}</p>
                  )}
                </div>

                <div className="field-row">
                  <div className="field-group">
                    <label className="field-label" htmlFor="city">
                      Città dell’immobile<span>*</span>
                    </label>
                    <input
                      id="city"
                      className={`field-input ${errors.city ? 'error' : ''}`}
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Es. Comune dell’immobile"
                      value={formData.city}
                      onChange={handleChange('city')}
                    />
                    {errors.city && <p className="error-text">{errors.city}</p>}
                  </div>

                  <div className="field-group">
                    <label className="field-label" htmlFor="phone">
                      Telefono<span>*</span>
                    </label>
                    <input
                      id="phone"
                      className={`field-input ${
                        errors.phone || contactValidation.phone.status === 'invalid'
                          ? 'error'
                          : ''
                      }`}
                      type="tel"
                      autoComplete="tel"
                      placeholder="Es. +39 333 123 4567"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                    />
                    {contactValidation.phone.status === 'valid' && (
                      <p className="valid-text">{contactValidation.phone.message}</p>
                    )}
                    {contactValidation.phone.status === 'invalid' && (
                      <p className="error-text">{contactValidation.phone.message}</p>
                    )}
                    {errors.phone && (
                      <p className="error-text">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label" htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    id="email"
                    className={`field-input ${
                      errors.email || contactValidation.email.status === 'invalid'
                        ? 'error'
                        : ''
                    }`}
                    type="email"
                    autoComplete="email"
                    placeholder="Dove vuoi ricevere la conferma"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                  {contactValidation.email.status === 'valid' && (
                    <p className="valid-text">{contactValidation.email.message}</p>
                  )}
                  {contactValidation.email.status === 'invalid' && (
                    <p className="error-text">{contactValidation.email.message}</p>
                  )}
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="field-group">
                  <div className="field-label">
                    Quando pensi di vendere l’immobile?<span>*</span>
                  </div>
                  <p className="field-description">
                    Indica la tempistica che ti sembra più vicina alla tua
                    situazione attuale.
                  </p>

                  <div className="timeframe-options">
                    {[
                      {
                        value: '3',
                        label: 'Entro 3 mesi',
                        badge: 'Più urgente',
                      },
                      {
                        value: '6',
                        label: 'Entro 6 mesi',
                        badge: 'In programma',
                      },
                      {
                        value: '12',
                        label: 'Entro 12 mesi',
                        badge: 'Sto iniziando a informarmi',
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="timeframe-pill"
                        data-selected={formData.timeframe === option.value}
                      >
                        <input
                          type="radio"
                          name="timeframe"
                          value={option.value}
                          checked={formData.timeframe === option.value}
                          onChange={() => handleTimeframeSelect(option.value)}
                          className="timeframe-hidden-input"
                        />
                        <span>
                          <span className="radio-dot">
                            <span className="radio-dot-inner" />
                          </span>
                          {option.label}
                        </span>
                        <span className="timeframe-pill-badge">
                          {option.badge}
                        </span>
                      </label>
                    ))}
                  </div>

                  {errors.timeframe && (
                    <p className="error-text">{errors.timeframe}</p>
                  )}
                </div>

                {errors.submit && (
                  <p className="error-text" style={{ marginBottom: '1rem' }}>
                    {errors.submit}
                  </p>
                )}
                <div className="form-footer">
                  <div className="privacy-consent">
                    <label className="privacy-consent-label" htmlFor="privacyAccepted">
                      <input
                        id="privacyAccepted"
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={handlePrivacyChange}
                      />
                      <span>
                        Ho letto e accetto la{' '}
                        <a
                          href={PRIVACY_POLICY_URL}
                          className="iubenda-white iubenda-noiframe iubenda-embed"
                          title="Privacy Policy "
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <p className="error-text">{errors.privacyAccepted}</p>
                    )}
                  </div>
                  <div className="button-glow">
                    <button
                      type="submit"
                      className="primary-button"
                      disabled={isSubmitting}
                    >
                      <span>Richiedi la valutazione gratuita</span>
                      <span className="primary-button-icon">→</span>
                    </button>
                  </div>
                  <p className="primary-button-sub">
                    <strong>Sopralluogo e valutazione sono gratuiti</strong> e
                    senza alcun impegno di vendita.
                  </p>
                </div>

                <div className="form-meta">
                  <div className="meta-row">
                    <span className="meta-dot" />
                    <span>
                      Un consulente ti richiamerà entro 1–2 giorni lavorativi.
                    </span>
                  </div>
                  <div className="meta-divider" />
                  <div className="checklist">
                    <div className="checklist-item">
                      <span className="checklist-icon">✓</span>
                      <span>Valutazione reale sul posto, non automatica.</span>
                    </div>
                    <div className="checklist-item">
                      <span className="checklist-icon">✓</span>
                      <span>
                        Nessun obbligo di affidare l’incarico di vendita
                        all’agenzia.
                      </span>
                    </div>
                    <div className="checklist-item">
                      <span className="checklist-icon">✓</span>
                      <span>
                        Dati usati solo per ricontattarti sulla richiesta di
                        valutazione.
                      </span>
                    </div>
                  </div>
                </div>

              </form>
            </>
          ) : (
            <div className="thankyou-panel">
              <div>
                <div className="thankyou-label">Richiesta ricevuta</div>
                <h2 className="thankyou-title">
                  Grazie per esserti registrato su Valore Immobili.
                </h2>
                <p className="thankyou-body">
                  Abbiamo ricevuto la tua richiesta di valutazione sul posto.{' '}
                  <strong>
                    Un consulente verificherà i dati inviati e ti chiamerà per
                    concordare giorno e orario del sopralluogo
                  </strong>{' '}
                  presso l’immobile.
                </p>

                <div className="thankyou-details">
                  <div className="thankyou-pill">
                    <strong>Cosa succede ora</strong>
                    <span>
                      Riceverai una chiamata o un messaggio al numero indicato per
                      fissare l’appuntamento.
                    </span>
                  </div>
                  <div className="thankyou-pill">
                    <strong>Quanto costa</strong>
                    <span>
                      Il sopralluogo e la valutazione dell’immobile sono{' '}
                      <strong>completamente gratuiti</strong> e senza impegno.
                    </span>
                  </div>
                </div>

                <p className="thankyou-actions">
                  Se ti accorgi di aver inserito un dato errato puoi{' '}
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => {
                      setSubmitted(false)
                      setIsSubmitting(false)
                    }}
                  >
                    modificare la tua richiesta
                  </button>
                  .
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
