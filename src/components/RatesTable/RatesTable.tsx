// src/components/RatesTable/RatesTable.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import * as Flags from 'country-flag-icons/react/3x2';
import sdrLogo from '../../assets/sdr.png';
import { 
  TableContainer,
  TableTitle,
  TableWrapper, 
  Table, 
  Th, 
  Td, 
  Tr
} from '../../styles/common/TableStyles';
import {
  CurrencyCell,
  FlagWrapper,
  CustomFlag,
} from './styles';
import { fetchExchangeRates, ExchangeRate } from '../../services/api';
import { currencyToCode, getCountryName } from '../../utils/countryMapping';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const RatesTable: React.FC = () => {
  const { data: rates, isLoading, error } = useQuery<ExchangeRate[]>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });

  const getFlagComponent = (currencyCode: string) => {
    if (currencyCode === 'XDR') {
      return <CustomFlag src={sdrLogo} alt="SDR" />;
    }
    const code = currencyToCode[currencyCode] as keyof typeof Flags;
    const FlagComponent = Flags[code];
    return FlagComponent ? <FlagComponent /> : null;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rates</div>;
  }

  return (
    <TableContainer>
      <TableTitle>Exchange Rates</TableTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Code</Th>
              <Th>Country</Th>
              <Th>Name</Th>
              <Th>Unit</Th>
              <Th>Rate (CZK)</Th>
            </tr>
          </thead>
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
                <Td>{getCountryName(rate.code)}</Td>
                <Td>{capitalizeFirstLetter(rate.currency)}</Td>
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