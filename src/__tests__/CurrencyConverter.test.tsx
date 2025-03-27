import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter'
import { theme } from '../styles/theme'
import { useExchangeRates } from '../hooks/useExchangeRates'

// Mock the custom hook
vi.mock('../hooks/useExchangeRates')

const mockRates = [
  {
    code: 'EUR',
    currency: 'euro',
    amount: 1,
    rate: 25.67
  },
  {
    code: 'USD',
    currency: 'dollar',
    amount: 1,
    rate: 23.45
  }
]

describe('CurrencyConverter', () => {
  it('renders basic elements', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })
  
    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )
    
    // Change this line to match the other tests
    expect(screen.getByText('Currency Converter')).toBeDefined()
    expect(screen.getByLabelText('Amount in CZK')).toBeDefined()
    expect(screen.getByLabelText('Convert to')).toBeDefined()
  })

  it('shows loading state', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: true,
      error: null,
      data: null
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Currency Converter')).toBeDefined()
    expect(screen.getByTestId('loading-spinner')).toBeDefined()
  })

  it('shows error state', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
      data: null
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Currency Converter')).toBeDefined()
    expect(screen.getByText('Error loading exchange rates')).toBeDefined()
  })

  it('handles amount input correctly', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )

    const amountInput = screen.getByLabelText('Amount in CZK') as HTMLInputElement

    // Test regular input
    fireEvent.change(amountInput, { target: { value: '100' } })
    expect(amountInput.value).toBe('100')

    // Test leading zeros are removed
    fireEvent.change(amountInput, { target: { value: '00123' } })
    expect(amountInput.value).toBe('123')

    // Test maximum length (22 characters)
    const longNumber = '1'.repeat(25)
    fireEvent.change(amountInput, { target: { value: longNumber } })
    expect(amountInput.value.length).toBe(22)

    // Test empty input
    fireEvent.change(amountInput, { target: { value: '' } })
    expect(amountInput.value).toBe('')
  })

  it('renders currency options and handles selection', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )

    const currencySelect = screen.getByLabelText('Select currency') as HTMLSelectElement

    // Check if currency options are rendered
    expect(screen.getByText('EUR')).toBeDefined()
    expect(screen.getByText('USD')).toBeDefined()

    // Test currency selection
    fireEvent.change(currencySelect, { target: { value: 'USD' } })
    expect(currencySelect.value).toBe('USD')
  })

  it('performs currency conversion', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )

    const amountInput = screen.getByLabelText('Amount in CZK') as HTMLInputElement
    const currencySelect = screen.getByLabelText('Select currency') as HTMLSelectElement

    // Enter amount and select currency
    fireEvent.change(amountInput, { target: { value: '100' } })
    fireEvent.change(currencySelect, { target: { value: 'EUR' } })

    // Check the result using data-testid
    const resultValue = screen.getByTestId('result-value')
    expect(resultValue).toBeDefined()
    expect(resultValue.textContent).toContain('3.90')
    expect(resultValue.textContent).toContain('EUR')

    // Check the exchange rate
    const exchangeRate = screen.getByTestId('exchange-rate')
    expect(exchangeRate).toBeDefined()
    expect(exchangeRate.textContent).toContain('1 CZK =')
    expect(exchangeRate.textContent).toContain('EUR')
  })

  it('updates conversion when switching currencies', () => {
    (useExchangeRates as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockRates
    })

    render(
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    )

    const amountInput = screen.getByLabelText('Amount in CZK') as HTMLInputElement
    const currencySelect = screen.getByLabelText('Select currency') as HTMLSelectElement

    // Set initial amount
    fireEvent.change(amountInput, { target: { value: '100' } })

    // Test EUR conversion
    fireEvent.change(currencySelect, { target: { value: 'EUR' } })
    let resultValue = screen.getByTestId('result-value')
    expect(resultValue.textContent).toContain('3.90')
    expect(resultValue.textContent).toContain('EUR')

    // Switch to USD and verify conversion updates
    fireEvent.change(currencySelect, { target: { value: 'USD' } })
    resultValue = screen.getByTestId('result-value')
    expect(resultValue.textContent).toContain('4.26')
    expect(resultValue.textContent).toContain('USD')
  })
})