// CurrencyConverter.tsx
import React, { useState, useEffect } from "react";
import { 
  ConverterContainer, 
  ConverterTitle,
  ConverterCard,
  InputGroup,
  Label,
  InputWrapper,
  Input, 
  Select,
  ResultContainer,
  ResultValue,
  ExchangeRate
} from "./styles";
import { useExchangeRates } from "../../hooks/useExchangeRates";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<string>("");
  const [rate, setRate] = useState<number | null>(null);

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
        setResult(converted);
        setRate(currentRate.rate);
      }
    } else {
      setResult("");
      setRate(null);
    }
  }, [amount, currency, rates]);

  if (isLoading) {
    return (
      <ConverterContainer>
        <ConverterTitle>Loading exchange rates...</ConverterTitle>
      </ConverterContainer>
    );
  }

  if (error) {
    return (
      <ConverterContainer>
        <ConverterTitle>Error loading exchange rates</ConverterTitle>
      </ConverterContainer>
    );
  }

  return (
    <ConverterContainer>
      <ConverterTitle>Currency Converter</ConverterTitle>
      <ConverterCard>
        <InputGroup>
          <Label htmlFor="amount">Amount in CZK</Label>
          <InputWrapper>
            <Input 
              id="amount"
              type="number" 
              value={amount} 
              onChange={handleAmountChange} 
              placeholder="Enter amount" 
              aria-label="Amount in CZK"
            />
          </InputWrapper>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="currency">Convert to</Label>
          <InputWrapper>
            <Select 
              id="currency"
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              aria-label="Select currency"
            >
              {rates?.map((rate) => (
                <option key={rate.code} value={rate.code}>
                  {rate.code}
                </option>
              ))}
            </Select>
          </InputWrapper>
        </InputGroup>

        {result && (
          <ResultContainer>
            <ResultValue>{result} {currency}</ResultValue>
            {rate && (
              <ExchangeRate>
                1 CZK = {(1 / rate).toFixed(4)} {currency}
              </ExchangeRate>
            )}
          </ResultContainer>
        )}
      </ConverterCard>
    </ConverterContainer>
  );
};

export default CurrencyConverter;