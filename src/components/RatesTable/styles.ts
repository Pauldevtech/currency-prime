// src/components/RatesTable/styles.ts
import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;
`;

export const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
`;

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;  // Added for consistent column widths
`;

export const Th = styled.th`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  width: 33.33%;  // Equal width for all columns
  text-align: center;  // Center align all headers
`;

export const Td = styled.td`
  padding: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;  // Center align all data
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;