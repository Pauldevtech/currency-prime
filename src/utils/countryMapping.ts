interface CountryInfo {
  code: string;
  name: string;
}

export const CURRENCY_CODES = {
  AUD: 'AUD',
  BGN: 'BGN',
  BRL: 'BRL',
  CAD: 'CAD',
  CHF: 'CHF',
  CNY: 'CNY',
  DKK: 'DKK',
  EUR: 'EUR',
  GBP: 'GBP',
  HKD: 'HKD',
  HRK: 'HRK',
  HUF: 'HUF',
  IDR: 'IDR',
  ILS: 'ILS',
  INR: 'INR',
  ISK: 'ISK',
  JPY: 'JPY',
  KRW: 'KRW',
  MXN: 'MXN',
  MYR: 'MYR',
  NOK: 'NOK',
  NZD: 'NZD',
  PHP: 'PHP',
  PLN: 'PLN',
  RON: 'RON',
  SEK: 'SEK',
  SGD: 'SGD',
  THB: 'THB',
  TRY: 'TRY',
  USD: 'USD',
  XDR: 'XDR',
  ZAR: 'ZAR',
} as const;

export type CurrencyCode = keyof typeof CURRENCY_CODES;

export const currencyToCode: Record<CurrencyCode, string> = {
  AUD: 'AU',
  BGN: 'BG',
  BRL: 'BR',
  CAD: 'CA',
  CHF: 'CH',
  CNY: 'CN',
  DKK: 'DK',
  EUR: 'EU',
  GBP: 'GB',
  HKD: 'HK',
  HRK: 'HR',
  HUF: 'HU',
  IDR: 'ID',
  ILS: 'IL',
  INR: 'IN',
  ISK: 'IS',
  JPY: 'JP',
  KRW: 'KR',
  MXN: 'MX',
  MYR: 'MY',
  NOK: 'NO',
  NZD: 'NZ',
  PHP: 'PH',
  PLN: 'PL',
  RON: 'RO',
  SEK: 'SE',
  SGD: 'SG',
  THB: 'TH',
  TRY: 'TR',
  USD: 'US',
  XDR: 'XDR',
  ZAR: 'ZA'
};

export const currencyMapping: Record<CurrencyCode, CountryInfo> = {
  AUD: { code: 'AU', name: 'Australia' },
  BGN: { code: 'BG', name: 'Bulgaria' },
  BRL: { code: 'BR', name: 'Brazil' },
  CAD: { code: 'CA', name: 'Canada' },
  CHF: { code: 'CH', name: 'Switzerland' },
  CNY: { code: 'CN', name: 'China' },
  DKK: { code: 'DK', name: 'Denmark' },
  EUR: { code: 'EU', name: 'European Union' },
  GBP: { code: 'GB', name: 'United Kingdom' },
  HKD: { code: 'HK', name: 'Hong Kong' },
  HRK: { code: 'HR', name: 'Croatia' },
  HUF: { code: 'HU', name: 'Hungary' },
  IDR: { code: 'ID', name: 'Indonesia' },
  ILS: { code: 'IL', name: 'Israel' },
  INR: { code: 'IN', name: 'India' },
  ISK: { code: 'IS', name: 'Iceland' },
  JPY: { code: 'JP', name: 'Japan' },
  KRW: { code: 'KR', name: 'South Korea' },
  MXN: { code: 'MX', name: 'Mexico' },
  MYR: { code: 'MY', name: 'Malaysia' },
  NOK: { code: 'NO', name: 'Norway' },
  NZD: { code: 'NZ', name: 'New Zealand' },
  PHP: { code: 'PH', name: 'Philippines' },
  PLN: { code: 'PL', name: 'Poland' },
  RON: { code: 'RO', name: 'Romania' },
  SEK: { code: 'SE', name: 'Sweden' },
  SGD: { code: 'SG', name: 'Singapore' },
  THB: { code: 'TH', name: 'Thailand' },
  TRY: { code: 'TR', name: 'Türkiye' },
  USD: { code: 'US', name: 'United States' },
  XDR: { code: 'XDR', name: 'IMF' },
  ZAR: { code: 'ZA', name: 'South Africa' },
};

export const SUPPORTED_CURRENCIES = Object.keys(currencyMapping) as CurrencyCode[];

export const getCountryCode = (currencyCode: CurrencyCode): string => {
  if (!currencyCode || !(currencyCode in currencyMapping)) {
    throw new Error(`Invalid currency code: ${currencyCode}`);
  }
  return currencyMapping[currencyCode].code;
};

export const getCountryName = (currencyCode: string): string => {
  if (!currencyCode) {
    return '';
  }
  return currencyCode in currencyMapping 
    ? currencyMapping[currencyCode as CurrencyCode].name 
    : currencyCode;
};

export const isSupportedCurrency = (currencyCode: string): currencyCode is CurrencyCode => {
  return currencyCode in currencyMapping;
};