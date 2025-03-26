// CurrencyConverter.tsx
import React, { useState, useEffect } from "react";
import { 
  TableContainer, 
  TableTitle, 
  TableWrapper, 
  Table, 
  Th, 
  Td, 
  Input, 
  Select, 
  Tr, 
  Thead,
  InputWrapper 
} from "./styles";

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
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove leading zeros and update only if the value is valid
    const cleanedValue = value.replace(/^0+(?=\d)/, '');
    setAmount(cleanedValue);
  };

  useEffect(() => {
    if (amount && !isNaN(Number(amount))) {
      const rate = rates[currency as keyof typeof rates];
      const converted = (Number(amount) / rate).toFixed(2);
      setResult(`${converted} ${currency}`);
    } else {
      setResult("—");
    }
  }, [amount, currency]);

  return (
    <TableContainer>
      <TableTitle>Currency Converter</TableTitle>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Amount (CZK)</Th>
              <Th>Convert to</Th>
              <Th>Result</Th>
            </Tr>
          </Thead>
          <tbody>
            <Tr>
              <Td>
                <InputWrapper>
                  <Input 
                    type="number" 
                    value={amount} 
                    onChange={handleAmountChange} 
                    placeholder="0" 
                  />
                </InputWrapper>
              </Td>
              <Td>
                <InputWrapper>
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
                </InputWrapper>
              </Td>
              <Td>{result}</Td>
            </Tr>
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default CurrencyConverter;