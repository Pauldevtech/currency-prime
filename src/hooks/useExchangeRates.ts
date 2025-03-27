import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates, ExchangeRate } from '../services/api';

export const useExchangeRates = () => {
  return useQuery<ExchangeRate[], Error>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    refetchInterval: 60000, // Refetch every minute
  });
};