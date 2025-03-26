import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import RatesTable from '../components/RatesTable/RatesTable'
import { theme } from '../styles/theme'
import { useExchangeRates } from '../hooks/useExchangeRates'

// Mock the custom hook
vi.mock('../hooks/useExchangeRates')

const mockRates = [
  {
    code: 'USD',
    currency: 'dollar',
    amount: 1,
    rate: 23.45
  },
  {
    code: 'EUR',
    currency: 'euro',
    amount: 1,
    rate: 25.67
  },
  {
    code: 'XDR',
    currency: 'special drawing right',
    amount: 1,
    rate: 30.123
  }
]

describe('RatesTable', () => {
  it('renders the header component', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: null
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Exchange Rates')).toBeDefined()
  })

  it('shows loading state', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: true,
      error: null,
      data: null
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    const loadingElement = screen.getByRole('status')
    expect(loadingElement).toBeDefined()
  })

  it('shows error state', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
      data: null
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Error loading exchange rates')).toBeDefined()
  })

  it('renders table with data', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    // Check table headers
    expect(screen.getByText('Currency')).toBeDefined()
    expect(screen.getByText('Country')).toBeDefined()
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Unit')).toBeDefined()
    expect(screen.getByText('Rate (CZK)')).toBeDefined()

    // Check if mock data is rendered
    expect(screen.getByText('USD')).toBeDefined()
    expect(screen.getByText('EUR')).toBeDefined()
    expect(screen.getByText('23.45')).toBeDefined()
    expect(screen.getByText('25.67')).toBeDefined()
  })

  it('capitalizes currency names', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Dollar')).toBeDefined()
    expect(screen.getByText('Euro')).toBeDefined()
    expect(screen.getByText('Special drawing right')).toBeDefined()
  })

  it('formats rate numbers to 2 decimal places', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: [{ ...mockRates[2] }] // Using XDR with 3 decimal places
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('30.12')).toBeDefined()
  })

  it('handles empty data array', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: []
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Exchange Rates')).toBeDefined()
    expect(screen.getByRole('table')).toBeDefined()
  })

  it('renders SDR currency with custom logo', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: [mockRates[2]] // XDR data
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    const sdrLogo = screen.getByAltText('SDR')
    expect(sdrLogo).toBeDefined()
    expect(sdrLogo.tagName.toLowerCase()).toBe('img')
  })

  it('renders country names correctly', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates.slice(0, 2)  // Using only USD and EUR
    })

    render(
      <ThemeProvider theme={theme}>
        <RatesTable />
      </ThemeProvider>
    )
    
    expect(screen.getByText('United States')).toBeDefined()
    expect(screen.getByText('European Union')).toBeDefined()
  })
})