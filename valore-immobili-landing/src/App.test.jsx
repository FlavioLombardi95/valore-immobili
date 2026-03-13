import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
  it('mostra il titolo hero', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/valutazione reale/i)
  })

  it('mostra errori di validazione se si invia il form vuoto', async () => {
    const user = userEvent.setup()
    render(<App />)
    const [submit] = screen.getAllByRole('button', { name: /richiedi la valutazione gratuita/i })
    await user.click(submit)
    expect(screen.getByText(/inserisci nome e cognome/i)).toBeInTheDocument()
  })
})
