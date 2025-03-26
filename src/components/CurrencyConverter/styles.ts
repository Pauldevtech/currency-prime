// styles.ts
import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';

export const ConverterContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;

  ${devices.tablet} {
    padding: 0;
  }
`;

export const ConverterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.4rem;

  ${devices.tablet} {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

export const ConverterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 1.5rem;

  ${devices.tablet} {
    padding: 2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  
  ${devices.tablet} {
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ResultContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ExchangeRate = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text}99;
  text-align: center;
`;