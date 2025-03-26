import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates, ExchangeRate } from '../services/api';

export const useExchangeRates = () => {
  return useQuery<ExchangeRate[]>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });
};