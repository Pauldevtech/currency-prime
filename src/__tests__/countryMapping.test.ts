import { describe, it, expect } from 'vitest'
import { getCountryName, currencyToCode } from '../utils/countryMapping'

describe('countryMapping', () => {
  describe('getCountryName', () => {
    it('returns correct country name for USD', () => {
      expect(getCountryName('USD')).toBe('United States')
    })

    it('returns correct country name for EUR', () => {
      expect(getCountryName('EUR')).toBe('European Union')
    })

    it('returns currency code if country not found', () => {
      expect(getCountryName('XXX')).toBe('XXX')
    })

    it('returns correct names for major currencies', () => {
      expect(getCountryName('GBP')).toBe('United Kingdom')
      expect(getCountryName('JPY')).toBe('Japan')
      expect(getCountryName('CHF')).toBe('Switzerland')
      expect(getCountryName('AUD')).toBe('Australia')
      expect(getCountryName('CAD')).toBe('Canada')
    })

    it('handles special cases correctly', () => {
      expect(getCountryName('XDR')).toBe('IMF')
      expect(getCountryName('TRY')).toBe('Türkiye')
    })

    // New tests
    it('handles empty string input', () => {
      expect(getCountryName('')).toBe('')
    })

    it('is case sensitive', () => {
      expect(getCountryName('usd')).toBe('usd')  // Should return input for incorrect case
      expect(getCountryName('USD')).toBe('United States')
    })

    // Test all currencies in the mapping
    it('returns correct names for all supported currencies', () => {
      const expectedMappings = {
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
        expect(getCountryName(currency)).toBe(country)
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
      expect(currencyToCode['XXX']).toBeUndefined()
    })

    // New test
    it('verifies all currency to code mappings', () => {
      const expectedMappings = {
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
        expect(currencyToCode[currency]).toBe(code)
      })
    })
  })
})