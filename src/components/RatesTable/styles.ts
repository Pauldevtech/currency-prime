import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';

export const TableContainer = styled.div`
  max-width: 1130px;
  margin: 2rem auto;
  padding: 0 1rem;

  ${devices.tablet} {
    margin: 4rem auto;
    padding: 0;
  }
`;

export const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.4rem;

  ${devices.tablet} {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
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

export const Th = styled.th<{ hideOnMobile?: boolean }>`
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.8rem 1rem;
  white-space: nowrap;

  ${({ hideOnMobile }) => hideOnMobile && `
    display: none;
  `}

  ${devices.tablet} {
    font-size: 0.9rem;
    padding: 1.2rem 1.5rem;
    display: table-cell;
  }

  &:nth-child(1) { width: 40% } // Code column (wider on mobile)
  &:nth-child(2) { width: 30%; } // Unit column
  &:nth-child(3) { width: 30%; } // Rate column

  ${devices.tablet} {
    &:nth-child(1) { width: 15% } // Code column
    &:nth-child(2) { width: 25%; } // Country column
    &:nth-child(3) { width: 20%; } // Name column
    &:nth-child(4) { width: 15%; } // Unit column
    &:nth-child(5) { width: 12%; } // Rate column
  }
`;

export const Td = styled.td<{ hideOnMobile?: boolean }>`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ hideOnMobile }) => hideOnMobile && `
    display: none;
  `}

  ${devices.tablet} {
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
    display: table-cell;
  }
`;

export const CurrencyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${devices.tablet} {
    gap: 0.75rem;
  }

  span {
    font-weight: 500;
  }
`;

export const FlagWrapper = styled.div`
  width: 24px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${devices.tablet} {
    width: 32px;
    height: 24px;
  }

  svg, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CustomFlag = styled.img`
  width: 24px;
  height: 18px;
  object-fit: contain;

  ${devices.tablet} {
    width: 32px;
    height: 24px;
  }
`;