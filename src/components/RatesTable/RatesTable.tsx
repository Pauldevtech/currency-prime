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
import { 
  getCountryCode, 
  getCountryName, 
  type CurrencyCode,
  isSupportedCurrency 
} from '../../utils/countryMapping';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const RatesTable: React.FC = () => {
  const { data: rates, isLoading, error } = useExchangeRates();

  const getFlagComponent = (currencyCode: string) => {
    if (!isSupportedCurrency(currencyCode)) {
      return null;
    }

    if (currencyCode === 'XDR') {
      return <CustomFlag src={sdrLogo} alt="SDR" />;
    }

    const countryCode = getCountryCode(currencyCode);
    const FlagComponent = Flags[countryCode as keyof typeof Flags];
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

  const renderTableContent = () => {
    if (!rates) return null;

    return (
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
            {rates.map((rate) => {
              const currencyCode = rate.code as CurrencyCode;
              return (
                <Tr key={rate.code}>
                  <Td>
                    <CurrencyCell>
                      <FlagWrapper>
                        {getFlagComponent(currencyCode)}
                      </FlagWrapper>
                      <span>{rate.code}</span>
                    </CurrencyCell>
                  </Td>
                  <Td $hideOnMobile>
                    {isSupportedCurrency(currencyCode) ? getCountryName(currencyCode) : rate.code}
                  </Td>
                  <Td $hideOnMobile>{capitalizeFirstLetter(rate.currency)}</Td>
                  <Td>{rate.amount}</Td>
                  <Td>{rate.rate.toFixed(2)}</Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
    );
  };

  return (
    <TableContainer>
      <TableHeader>
        <TableTitle>Exchange Rates</TableTitle>
      </TableHeader>
      <TableContent>
        {renderTableContent()}
      </TableContent>
    </TableContainer>
  );
};

export default RatesTable;