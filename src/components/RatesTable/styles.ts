import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const TableContainer = styled.div`
  max-width: 1130px;
  padding: 0 1rem;

  @media (max-width: ${devices.tablet}) {
    max-width: 500px;
    margin: 1rem auto;
    padding: 0;
  }

  ${devices.tablet} {
    margin: 4rem auto;
  }
`;

export const TableCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.02), 0 16px 24px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.colors.background}50`};
`;

export const TableHeader = styled.div`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => `${theme.colors.accent}10`};
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.background}50`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  ${devices.tablet} {
    padding: 0.5rem 1.2rem;
    text-align: center;
  }
`;

export const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  padding: 0.4rem 1rem;
  background: ${({ theme }) => `${theme.colors.background}30`};
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    bottom: 9px;
    width: 3.5px;
    background: ${({ theme }) => theme.colors.accent};
  }

  &:hover span::after {
    transform: scaleX(1);
  }
`;

export const TableContent = styled.div`
  padding: 0.5rem;

  ${devices.tablet} {
    padding: 0.8rem 0.5rem 1rem 0.5rem;
    text-align: center;
  }
`;

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => `${theme.colors.background}40`};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 8px 16px rgba(0, 0, 0, 0.02);
  margin: 0 -0.5rem;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  ${devices.tablet} {
  
  padding: 0.4rem 1rem 1rem 1.4rem
    margin: 0 -1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: unset;
  }
`;

export const Thead = styled.thead`
  background: ${({ theme }) => `${theme.colors.background}30`};
  border-bottom: 2px solid ${({ theme }) => `${theme.colors.background}50`};
`;

export const Th = styled.th<{ $hideOnMobile?: boolean }>`
  text-align: center
  padding: 0.8rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? "none" : "table-cell")};
    padding: 0.8rem 0.5rem;

    &:first-child {
      width: 40%;
      padding-right: 0;
    }
    &:nth-child(4) {
      width: 20%;
      text-align: center;
    }
    &:last-child {
      width: 40%;
      text-align: right;
      padding-right: 1rem;
    }
  }

  ${devices.tablet} {
    padding: 1.2rem 1.5rem;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.background}30`};

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.white};
  }

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.background}; // Changed from primary10 to primaryLight
  }
`;

export const Td = styled.td<{ $hideOnMobile?: boolean }>`
  padding: 0.8rem 1rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  vertical-align: middle;

  @media (max-width: 768px) {
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? "none" : "table-cell")};
    padding: 0.8rem 0.5rem;

    &:first-child {
      padding-right: 0;
    }
    &:nth-child(4) {
      text-align: center;
    }
    &:last-child {
      text-align: right;
      padding-right: 1rem;
    }
  }

  ${devices.tablet} {
    padding: 1.2rem 1.5rem;
  }
`;

export const CurrencyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: 500;
  }

  ${devices.tablet} {
    gap: 0.75rem;
  }
`;

export const FlagWrapper = styled.div`
  width: 24px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${devices.tablet} {
    width: 32px;
    height: 24px;
  }

  svg,
  img {
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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => `${theme.colors.primary}20`};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => `${theme.colors.error}10`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
