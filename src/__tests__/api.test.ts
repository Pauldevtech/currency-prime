import { describe, it, expect, vi } from 'vitest'
import { fetchExchangeRates } from '../services/api'

describe('api', () => {
  it('successfully fetches and parses exchange rates', async () => {
    const mockResponse = `02 Jan 2024 #1
Country|Currency|Amount|Code|Rate
United States|dollar|1|USD|23.45`

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockResponse),
    }))

    const rates = await fetchExchangeRates()

    expect(rates).toEqual([
      {
        country: 'United States',
        currency: 'dollar',
        amount: 1,
        code: 'USD',
        rate: 23.45,
      }
    ])
  })

  it('handles network errors', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(
      new Error('Network error')
    ))

    await expect(fetchExchangeRates()).rejects.toThrow('Network error')
  })

  it('parses multiple currencies correctly', async () => {
    const mockResponse = `02 Jan 2024 #1
Country|Currency|Amount|Code|Rate
United States|dollar|1|USD|23.45
European Union|euro|1|EUR|25.67
Japan|yen|100|JPY|16.89`

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockResponse),
    }))

    const rates = await fetchExchangeRates()

    expect(rates).toEqual([
      {
        country: 'United States',
        currency: 'dollar',
        amount: 1,
        code: 'USD',
        rate: 23.45,
      },
      {
        country: 'European Union',
        currency: 'euro',
        amount: 1,
        code: 'EUR',
        rate: 25.67,
      },
      {
        country: 'Japan',
        currency: 'yen',
        amount: 100,
        code: 'JPY',
        rate: 16.89,
      }
    ])
  })

  it('handles empty response', async () => {
    const mockResponse = ''
    
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockResponse),
    }))

    const rates = await fetchExchangeRates()
    expect(rates).toEqual([])
  })

  it('handles malformed data', async () => {
    const mockResponse = `02 Jan 2024 #1
Country|Currency|Amount|Code|Rate
United States|dollar|invalid|USD|not_number`

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockResponse),
    }))

    const rates = await fetchExchangeRates()
    expect(rates[0]).toEqual({
      country: 'United States',
      currency: 'dollar',
      amount: NaN,
      code: 'USD',
      rate: NaN,
    })
  })

  it('handles missing fields', async () => {
    const mockResponse = `02 Jan 2024 #1
Country|Currency|Amount|Code|Rate
United States|dollar`

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockResponse),
    }))

    const rates = await fetchExchangeRates()
    expect(rates[0]).toEqual({
      country: 'United States',
      currency: 'dollar',
      amount: NaN,
      code: undefined,
      rate: NaN,
    })
  })
})