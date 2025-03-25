import React, { useState, useEffect } from 'react';
import {
    TableContainer,
    TableTitle,
    TableWrapper,
    Table,
    Th,
    Td,
  } from '../../styles/common/TableStyles';
  import { Input, Select } from './styles';

const rates = {
  EUR: 24.85,
  USD: 22.86,
  GBP: 28.93,
  JPY: 0.1531,
  CHF: 25.97,
  AUD: 14.92,
  CAD: 16.89,
  PLN: 5.73,
};

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('EUR');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    if (amount && !isNaN(Number(amount))) {
      const rate = rates[currency as keyof typeof rates];
      const converted = (Number(amount) / rate).toFixed(2);
      setResult(`${converted} ${currency}`);
    } else {
      setResult('—');
    }
  }, [amount, currency]);

  return (
    <TableContainer>
      <TableTitle>Currency Converter</TableTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Amount (CZK)</Th>
              <Th>Convert to</Th>
              <Th>Result</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </Td>
              <Td>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {Object.keys(rates).map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td>{result}</Td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default CurrencyConverter;