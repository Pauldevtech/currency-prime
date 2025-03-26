// CurrencyConverter/styles.ts
import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 600px;
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
`;

export const Th = styled.th`
  text-align: left;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1.2rem 2.7rem;
  white-space: nowrap;

  &:nth-child(1) { width: 35%; }
  &:nth-child(2) { width: 35%; }
  &:nth-child(3) { width: 30%; }
`;

export const Td = styled.td`
  padding: 1.2rem 2.7rem;
  font-size: 1.1rem;
  vertical-align: middle;
  white-space: nowrap;
  overflow-x: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: fit-content;
`;

export const Input = styled.input`
  padding: 0.5rem 0;
  border: none;
  font-size: 1.1rem;
  width: 120px;
  text-align: center;
  overflow-x: auto;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0;
  border: none;
  font-size: 1.1rem;
  width: 80px;
  text-align: center;
  cursor: pointer;
  appearance: none;
  background: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0 top 50%;
  background-size: 0.65em auto;

  &:focus {
    outline: none;
  }
`;