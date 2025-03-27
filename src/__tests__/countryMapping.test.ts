import { describe, it, expect } from 'vitest'
import { getCountryName, currencyToCode, CurrencyCode } from '../utils/countryMapping'

describe('countryMapping', () => {
  describe('getCountryName', () => {
    it('returns correct country name for USD', () => {
      expect(getCountryName('USD' as CurrencyCode)).toBe('United States')
    })

    it('returns correct country name for EUR', () => {
      expect(getCountryName('EUR' as CurrencyCode)).toBe('European Union')
    })

    it('returns currency code if country not found', () => {
      const unknownCurrency = 'XXX'
      expect(getCountryName(unknownCurrency)).toBe('XXX')
    })

    it('returns correct names for major currencies', () => {
      expect(getCountryName('GBP' as CurrencyCode)).toBe('United Kingdom')
      expect(getCountryName('JPY' as CurrencyCode)).toBe('Japan')
      expect(getCountryName('CHF' as CurrencyCode)).toBe('Switzerland')
      expect(getCountryName('AUD' as CurrencyCode)).toBe('Australia')
      expect(getCountryName('CAD' as CurrencyCode)).toBe('Canada')
    })

    it('handles special cases correctly', () => {
      expect(getCountryName('XDR' as CurrencyCode)).toBe('IMF')
      expect(getCountryName('TRY' as CurrencyCode)).toBe('Türkiye')
    })

    it('handles empty string input', () => {
      expect(getCountryName('')).toBe('')
    })

    it('is case sensitive', () => {
      const invalidCase = 'usd'
      expect(getCountryName(invalidCase)).toBe('usd')  // Should return input for incorrect case
      expect(getCountryName('USD' as CurrencyCode)).toBe('United States')
    })

    it('returns correct names for all supported currencies', () => {
      const expectedMappings: Record<CurrencyCode, string> = {
        'AUD': 'Australia',
        'BGN': 'Bulgaria',
        'BRL': 'Brazil',
        'CAD': 'Canada',
        'CHF': 'Switzerland',
        'CNY': 'China',
        'DKK': 'Denmark',
        'EUR': 'European Union',
        'GBP': 'United Kingdom',
        'HKD': 'Hong Kong',
        'HRK': 'Croatia',
        'HUF': 'Hungary',
        'IDR': 'Indonesia',
        'ILS': 'Israel',
        'INR': 'India',
        'ISK': 'Iceland',
        'JPY': 'Japan',
        'KRW': 'South Korea',
        'MXN': 'Mexico',
        'MYR': 'Malaysia',
        'NOK': 'Norway',
        'NZD': 'New Zealand',
        'PHP': 'Philippines',
        'PLN': 'Poland',
        'RON': 'Romania',
        'SEK': 'Sweden',
        'SGD': 'Singapore',
        'THB': 'Thailand',
        'TRY': 'Türkiye',
        'USD': 'United States',
        'XDR': 'IMF',
        'ZAR': 'South Africa'
      }

      Object.entries(expectedMappings).forEach(([currency, country]) => {
        expect(getCountryName(currency as CurrencyCode)).toBe(country)
      })
    })
  })

  describe('currencyToCode', () => {
    it('returns correct country code for USD', () => {
      expect(currencyToCode['USD']).toBe('US')
    })

    it('returns correct codes for major currencies', () => {
      expect(currencyToCode['EUR']).toBe('EU')
      expect(currencyToCode['GBP']).toBe('GB')
      expect(currencyToCode['JPY']).toBe('JP')
      expect(currencyToCode['CHF']).toBe('CH')
    })

    it('handles special case for XDR', () => {
      expect(currencyToCode['XDR']).toBe('XDR')
    })

    it('returns undefined for unknown currency', () => {
      // Using type assertion to bypass TypeScript check for testing purposes
      expect((currencyToCode as Record<string, string | undefined>)['XXX']).toBeUndefined()
    })

    it('verifies all currency to code mappings', () => {
      const expectedMappings: Record<CurrencyCode, string> = {
        'AUD': 'AU',
        'BGN': 'BG',
        'BRL': 'BR',
        'CAD': 'CA',
        'CHF': 'CH',
        'CNY': 'CN',
        'DKK': 'DK',
        'EUR': 'EU',
        'GBP': 'GB',
        'HKD': 'HK',
        'HRK': 'HR',
        'HUF': 'HU',
        'IDR': 'ID',
        'ILS': 'IL',
        'INR': 'IN',
        'ISK': 'IS',
        'JPY': 'JP',
        'KRW': 'KR',
        'MXN': 'MX',
        'MYR': 'MY',
        'NOK': 'NO',
        'NZD': 'NZ',
        'PHP': 'PH',
        'PLN': 'PL',
        'RON': 'RO',
        'SEK': 'SE',
        'SGD': 'SG',
        'THB': 'TH',
        'TRY': 'TR',
        'USD': 'US',
        'XDR': 'XDR',
        'ZAR': 'ZA'
      }

      Object.entries(expectedMappings).forEach(([currency, code]) => {
        expect(currencyToCode[currency as CurrencyCode]).toBe(code)
      })
    })
  })
})