// src/components/CurrencyConverter/styles.ts
import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1.1rem;
  width: 120px;
  text-align: left;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1.1rem;
  width: 120px;
  text-align: left;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;