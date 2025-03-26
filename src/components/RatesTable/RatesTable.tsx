// src/components/RatesTable/RatesTable.tsx
import React from 'react';
import * as Flags from 'country-flag-icons/react/3x2';
import sdrLogo from '../../assets/sdr.png';
import {
  TableContainer,
  TableHeader,
  TableTitle,
  TableContent,
  TableWrapper,
  Table,
  Thead,
  Th,
  Td,
  Tr,
  CurrencyCell,
  FlagWrapper,
  CustomFlag,
  LoadingContainer,
  LoadingSpinner,
  ErrorContainer
} from './styles';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import { currencyToCode, getCountryName } from '../../utils/countryMapping';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const RatesTable: React.FC = () => {
  const { data: rates, isLoading, error } = useExchangeRates();

  const getFlagComponent = (currencyCode: string) => {
    if (currencyCode === 'XDR') {
      return <CustomFlag src={sdrLogo} alt="SDR" />;
    }
    const code = currencyToCode[currencyCode] as keyof typeof Flags;
    const FlagComponent = Flags[code];
    return FlagComponent ? <FlagComponent /> : null;
  };

  if (isLoading) {
    return (
      <TableContainer>
        <TableHeader>
          <TableTitle>Exchange Rates</TableTitle>
        </TableHeader>
        <TableContent>
          <LoadingContainer role="status" aria-label="Loading exchange rates">
            <LoadingSpinner />
          </LoadingContainer>
        </TableContent>
      </TableContainer>
    );
  }

  if (error) {
    return (
      <TableContainer>
        <TableHeader>
          <TableTitle>Exchange Rates</TableTitle>
        </TableHeader>
        <TableContent>
          <ErrorContainer>
            Error loading exchange rates
          </ErrorContainer>
        </TableContent>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <TableHeader>
        <TableTitle>Exchange Rates</TableTitle>
      </TableHeader>
      <TableContent>
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>Currency</Th>
                <Th $hideOnMobile>Country</Th>
                <Th $hideOnMobile>Name</Th>
                <Th>Unit</Th>
                <Th>Rate (CZK)</Th>
              </Tr>
            </Thead>
            <tbody>
              {rates?.map((rate) => (
                <Tr key={rate.code}>
                  <Td>
                    <CurrencyCell>
                      <FlagWrapper>
                        {getFlagComponent(rate.code)}
                      </FlagWrapper>
                      <span>{rate.code}</span>
                    </CurrencyCell>
                  </Td>
                  <Td $hideOnMobile>{getCountryName(rate.code)}</Td>
                  <Td $hideOnMobile>{capitalizeFirstLetter(rate.currency)}</Td>
                  <Td>{rate.amount}</Td>
                  <Td>{rate.rate.toFixed(2)}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContent>
    </TableContainer>
  );
};

export default RatesTable;