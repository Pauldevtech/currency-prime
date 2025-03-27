// RatesTable.tsx
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

const capitalizeFirstLetter = (text: string) => 
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const TableHeaderContent = () => (
  <TableHeader>
    <TableTitle>Exchange Rates</TableTitle>
  </TableHeader>
);

const LoadingState = () => (
  <TableContainer>
    <TableHeaderContent />
    <TableContent>
      <LoadingContainer role="status" aria-label="Loading exchange rates">
        <LoadingSpinner />
      </LoadingContainer>
    </TableContent>
  </TableContainer>
);

const ErrorState = () => (
  <TableContainer>
    <TableHeaderContent />
    <TableContent>
      <ErrorContainer>Error loading exchange rates</ErrorContainer>
    </TableContent>
  </TableContainer>
);

const FlagComponent: React.FC<{ currencyCode: string }> = ({ currencyCode }) => {
  if (!isSupportedCurrency(currencyCode)) return null;
  
  if (currencyCode === 'XDR') {
    return <CustomFlag src={sdrLogo} alt="SDR" />;
  }

  const countryCode = getCountryCode(currencyCode);
  const Flag = Flags[countryCode as keyof typeof Flags];
  return Flag ? <Flag /> : null;
};

const TableRow: React.FC<{ rate: { code: string; currency: string; amount: number; rate: number } }> = ({ rate }) => {
  const currencyCode = rate.code as CurrencyCode;
  
  return (
    <Tr>
      <Td>
        <CurrencyCell>
          <FlagWrapper>
            <FlagComponent currencyCode={currencyCode} />
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
};

const RatesTable: React.FC = () => {
  const { data: rates, isLoading, error } = useExchangeRates();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState />;
  if (!rates) return null;

  return (
    <TableContainer>
      <TableHeaderContent />
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
              {rates.map((rate) => (
                <TableRow key={rate.code} rate={rate} />
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TableContent>
    </TableContainer>
  );
};

export default RatesTable;