import { describe, it, expect } from 'vitest'
import { getCountryFlag } from '../utils/flags'

describe('getCountryFlag', () => {
  it('returns correct flag emoji for US', () => {
    expect(getCountryFlag('US')).toBe('🇺🇸')
  })

  it('returns correct flag emoji for other countries', () => {
    expect(getCountryFlag('GB')).toBe('🇬🇧')
    expect(getCountryFlag('DE')).toBe('🇩🇪')
    expect(getCountryFlag('FR')).toBe('🇫🇷')
  })

  it('handles lowercase input', () => {
    expect(getCountryFlag('us')).toBe('🇺🇸')
    expect(getCountryFlag('gb')).toBe('🇬🇧')
  })

  it('handles mixed case input', () => {
    expect(getCountryFlag('Us')).toBe('🇺🇸')
    expect(getCountryFlag('gB')).toBe('🇬🇧')
  })

  it('handles edge cases', () => {
    expect(getCountryFlag('')).toBe('')  // Empty string
    expect(getCountryFlag('A')).toBe('🇦')  // Single character
    expect(getCountryFlag('AAA')).toBe('🇦🇦🇦')  // More than 2 characters
  })

  it('returns correct flags for common currency codes', () => {
    expect(getCountryFlag('EU')).toBe('🇪🇺')  // Euro
    expect(getCountryFlag('US')).toBe('🇺🇸')  // US Dollar
    expect(getCountryFlag('GB')).toBe('🇬🇧')  // British Pound
    expect(getCountryFlag('JP')).toBe('🇯🇵')  // Japanese Yen
    expect(getCountryFlag('CH')).toBe('🇨🇭')  // Swiss Franc
    expect(getCountryFlag('AU')).toBe('🇦🇺')  // Australian Dollar
    expect(getCountryFlag('CA')).toBe('🇨🇦')  // Canadian Dollar
  })

  it('returns correct flags for Czech National Bank currencies', () => {
    expect(getCountryFlag('AU')).toBe('🇦🇺')  // Australian Dollar
    expect(getCountryFlag('BR')).toBe('🇧🇷')  // Brazilian Real
    expect(getCountryFlag('BG')).toBe('🇧🇬')  // Bulgarian Lev
    expect(getCountryFlag('CN')).toBe('🇨🇳')  // Chinese Yuan
    expect(getCountryFlag('DK')).toBe('🇩🇰')  // Danish Krone
    expect(getCountryFlag('EU')).toBe('🇪🇺')  // Euro
    expect(getCountryFlag('PH')).toBe('🇵🇭')  // Philippine Peso
    expect(getCountryFlag('HK')).toBe('🇭🇰')  // Hong Kong Dollar
    expect(getCountryFlag('HR')).toBe('🇭🇷')  // Croatian Kuna
    expect(getCountryFlag('IN')).toBe('🇮🇳')  // Indian Rupee
    expect(getCountryFlag('ID')).toBe('🇮🇩')  // Indonesian Rupiah
    expect(getCountryFlag('IS')).toBe('🇮🇸')  // Icelandic Krona
    expect(getCountryFlag('IL')).toBe('🇮🇱')  // Israeli Shekel
    expect(getCountryFlag('JP')).toBe('🇯🇵')  // Japanese Yen
    expect(getCountryFlag('ZA')).toBe('🇿🇦')  // South African Rand
    expect(getCountryFlag('KR')).toBe('🇰🇷')  // South Korean Won
    expect(getCountryFlag('CA')).toBe('🇨🇦')  // Canadian Dollar
    expect(getCountryFlag('HU')).toBe('🇭🇺')  // Hungarian Forint
    expect(getCountryFlag('MY')).toBe('🇲🇾')  // Malaysian Ringgit
    expect(getCountryFlag('MX')).toBe('🇲🇽')  // Mexican Peso
    expect(getCountryFlag('NO')).toBe('🇳🇴')  // Norwegian Krone
    expect(getCountryFlag('NZ')).toBe('🇳🇿')  // New Zealand Dollar
    expect(getCountryFlag('PL')).toBe('🇵🇱')  // Polish Zloty
    expect(getCountryFlag('RO')).toBe('🇷🇴')  // Romanian Leu
    expect(getCountryFlag('SG')).toBe('🇸🇬')  // Singapore Dollar
    expect(getCountryFlag('SE')).toBe('🇸🇪')  // Swedish Krona
    expect(getCountryFlag('CH')).toBe('🇨🇭')  // Swiss Franc
    expect(getCountryFlag('TH')).toBe('🇹🇭')  // Thai Baht
    expect(getCountryFlag('TR')).toBe('🇹🇷')  // Turkish Lira
    expect(getCountryFlag('GB')).toBe('🇬🇧')  // British Pound
    expect(getCountryFlag('US')).toBe('🇺🇸')  // US Dollar
  })
})