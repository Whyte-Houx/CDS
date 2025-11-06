import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Logo } from './logo'

describe('Logo', () => {
  it('renders text variant correctly', () => {
    const { container } = render(<Logo variant="text" />)
    expect(container.firstChild).toHaveTextContent('CATALYST')
  })

  it('renders symbol variant correctly', () => {
    const { container } = render(<Logo variant="symbol" />)
    // Query within the rendered Logo to avoid accidental global matches
    expect(container.firstChild).toHaveTextContent(/^C$/)
  })

  it('symbol variant can be labeled with role=img + aria-label', async () => {
    const { container } = render(
      <Logo variant="symbol" role="img" aria-label="Catalyst" />
    )
    const img = screen.getByRole('img', { name: /catalyst/i })
    expect(img).toBeInTheDocument()
    const results = await axe(container)
    expect(results.violations.length).toBe(0)
  })

  it('decorative logo inside link uses link accessible name and hides logo', async () => {
    const { container } = render(
      <a href="/" aria-label="Catalyst home">
        <Logo variant="symbol" aria-hidden="true" />
      </a>
    )
    const link = screen.getByRole('link', { name: /catalyst home/i })
    expect(link).toBeInTheDocument()
    const logoEl = link.querySelector('div')
    expect(logoEl).toHaveAttribute('aria-hidden', 'true')
    const results = await axe(container)
    expect(results.violations.length).toBe(0)
  })

  it('text variant provides accessible name when used as link content', () => {
    render(
      <a href="/">
        <Logo variant="text" />
      </a>
    )
    const link = screen.getByRole('link', { name: /catalyst/i })
    expect(link).toBeInTheDocument()
  })
})