// src/styles/common/TableStyles.ts
import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 900px;
  margin: 4rem auto;
`;

export const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`;

export const Th = styled.th<{ align?: string }>`
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;
  
  &:nth-child(1) { 
    width: 20%;
    // padding-left: calc(2rem + 32px + 0.75rem); // Align with currency code
  }
  &:nth-child(2) { width: 25%; }
  &:nth-child(3) { width: 20%; }
  &:nth-child(4) { width: 10%; }
  &:nth-child(5) { 
    width: 25%;
    padding-right: 2rem; // Adjusted only the RATE column
  }
`;

export const Td = styled.td`
  padding: 1.2rem 2rem;
  text-align: left;
  font-size: 1.1rem;
  vertical-align: middle;
  
  &:nth-child(1) { width: 20%; }
  &:nth-child(2) { width: 25%; }
  &:nth-child(3) { width: 20%; }
  &:nth-child(4) { width: 10%; }
  &:nth-child(5) { 
    width: 25%;
    padding-right: 2rem; // Adjusted only the RATE column
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;