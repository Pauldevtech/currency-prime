import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 1130px;
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
  overflow: auto; 
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  
  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primary}10;
  }
`;

export const Th = styled.th`
  text-align: left;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1.2rem 1.5rem;
  white-space: nowrap;

  &:nth-child(1) { width: 15% } // Code column
  &:nth-child(2) { width: 25%; } // Country column
  &:nth-child(3) { width: 20%; } // Name column
  &:nth-child(4) { width: 15%; } // Unit column
  &:nth-child(5) { width: 12%; } // Rate column
`;

export const Td = styled.td`
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CurrencyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-weight: 500;
  }
`;

export const FlagWrapper = styled.div`
  width: 32px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CustomFlag = styled.img`
  width: 32px;
  height: 24px;
  object-fit: contain;
`;