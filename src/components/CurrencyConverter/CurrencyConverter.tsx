// src/components/CurrencyConverter/CurrencyConverter.tsx
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
import { useExchangeRates } from "../../hooks/useExchangeRates";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<string>("");

  const { data: rates, isLoading, error } = useExchangeRates();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/^0+(?=\d)/, '');
    setAmount(cleanedValue);
  };

  useEffect(() => {
    if (amount && !isNaN(Number(amount)) && rates) {
      const currentRate = rates.find(rate => rate.code === currency);
      if (currentRate) {
        const converted = (Number(amount) / currentRate.rate).toFixed(2);
        setResult(`${converted} ${currency}`);
      }
    } else {
      setResult("");
    }
  }, [amount, currency, rates]);

  if (isLoading) {
    return <TableContainer>Loading exchange rates...</TableContainer>;
  }

  if (error) {
    return <TableContainer>Error loading exchange rates</TableContainer>;
  }

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
                    {rates?.map((rate) => (
                      <option key={rate.code} value={rate.code}>
                        {rate.code}
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