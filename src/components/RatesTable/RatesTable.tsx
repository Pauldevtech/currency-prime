// src/components/RatesTable/RatesTable.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  TableContainer,
  TableTitle,
  TableWrapper, 
  Table, 
  Th, 
  Td, 
  Tr
} from '../../styles/common/TableStyles';
import { fetchExchangeRates, ExchangeRate } from '../../services/api';

const RatesTable: React.FC = () => {
  const { data: rates, isLoading, error } = useQuery<ExchangeRate[]>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rates</div>;
  }

  return (
    <TableContainer>
      <TableTitle>Exchange Rates (CZK)</TableTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Country</Th>
              <Th>Currency</Th>
              <Th>Amount</Th>
              <Th>Code</Th>
              <Th>Rate (CZK)</Th>
            </tr>
          </thead>
          <tbody>
            {rates?.map((rate) => (
              <Tr key={rate.code}>
                <Td>{rate.country}</Td>
                <Td>{rate.currency}</Td>
                <Td>{rate.amount}</Td>
                <Td>{rate.code}</Td>
                <Td>{rate.rate.toFixed(2)}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default RatesTable;