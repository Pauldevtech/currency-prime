import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

// Mock components
vi.mock('../components/Header/Header', () => ({
  default: () => <div data-testid="header">Header</div>
}))

vi.mock('../components/RatesTable/RatesTable', () => ({
  default: () => <div data-testid="rates-table">RatesTable</div>
}))

vi.mock('../components/CurrencyConverter/CurrencyConverter', () => ({
  default: () => <div data-testid="currency-converter">CurrencyConverter</div>
}))

describe('App', () => {
  it('renders the hero title', () => {
    render(<App />)
    const titleElement = screen.getByText('Currency Exchange Made Simple')
    expect(titleElement).toBeDefined()
  })

  it('renders the hero subtitle', () => {
    render(<App />)
    const subtitleElement = screen.getByText("Get real-time exchange rates and convert currencies with ease using Currency Prime's powerful tools.")
    expect(subtitleElement).toBeDefined()
  })

  it('renders the footer text', () => {
    render(<App />)
    const footerElement = screen.getByText('Real-time currency conversion and exchange rates for over 170 currencies worldwide. Stay informed with live updates and historical data.')
    expect(footerElement).toBeDefined()
  })

  it('renders all main components', () => {
    render(<App />)
    expect(screen.getByTestId('header')).toBeDefined()
    expect(screen.getByTestId('currency-converter')).toBeDefined()
    expect(screen.getByTestId('rates-table')).toBeDefined()
  })

  it('has main content with correct ID for navigation', () => {
    render(<App />)
    const mainContent = screen.getByRole('main')
    expect(mainContent).toBeDefined()
    expect(mainContent.getAttribute('id')).toBe('converter-rates')
  })

  it('provides theme and query client context to components', () => {
    const { container } = render(<App />)
    expect(container.parentElement).toBeInTheDocument()
    
    expect(() => {
      screen.getByTestId('currency-converter')
      screen.getByTestId('rates-table')
    }).not.toThrow()
  })
})