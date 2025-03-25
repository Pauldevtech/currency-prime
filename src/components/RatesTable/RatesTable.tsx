// src/components/RatesTable/RatesTable.tsx
import React from 'react';
import { 
    TableContainer,
    TableTitle,
    TableWrapper, 
    Table, 
    Th, 
    Td, 
    Tr
  } from '../../styles/common/TableStyles';

const dummyRates = [
  { currency: 'EUR', amount: 1, rate: 24.85 },
  { currency: 'USD', amount: 1, rate: 22.86 },
  { currency: 'GBP', amount: 1, rate: 28.93 },
  { currency: 'JPY', amount: 100, rate: 15.31 },
  { currency: 'CHF', amount: 1, rate: 25.97 },
  { currency: 'AUD', amount: 1, rate: 14.92 },
  { currency: 'CAD', amount: 1, rate: 16.89 },
  { currency: 'PLN', amount: 1, rate: 5.73 },
];

const RatesTable: React.FC = () => {
  return (
    <TableContainer>
      <TableTitle>Exchange Rates (CZK)</TableTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Currency</Th>
              <Th>Amount</Th>
              <Th>Rate (CZK)</Th>
            </tr>
          </thead>
          <tbody>
            {dummyRates.map((rate) => (
              <Tr key={rate.currency}>
                <Td>{rate.currency}</Td>
                <Td>{rate.amount}</Td>
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