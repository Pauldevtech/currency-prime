export interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

const API_URL = import.meta.env.PROD 
  ? '/api/rates' // Production URL
  : 'http://localhost:3001/api/rates'; // Development URL

export const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  try {
    const response = await fetch(API_URL);
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