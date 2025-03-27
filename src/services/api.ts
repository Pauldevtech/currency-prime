export interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

export const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  try {
    const response = await fetch('https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
    const data = await response.text();
    
    const lines = data.split('\n');
    const rates = lines.slice(2)
      .filter(line => line.trim() !== '')
      .map(line => {
        const [country, currency, amount, code, rate] = line.split('|');
        return {
          country,
          currency,
          amount: parseInt(amount),
          code,
          rate: parseFloat(rate),
        };
      });

    return rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};