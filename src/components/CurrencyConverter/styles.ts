import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const ConverterContainer = styled.div`
  max-width: 500px;
  padding: 2rem 1rem 1rem 1rem;

  @media (max-width: ${devices.tablet}) {
    margin: 1rem auto;
    padding: 0;
  }

  ${devices.tablet} {
    padding: 0rem 1rem 1rem 1rem;
    margin: 4rem auto;
  }
`;

export const ConverterHeader = styled.div`
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => `${theme.colors.accent}10`};

  border-bottom: 1px solid ${({ theme }) => `${theme.colors.background}50`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ConverterTitle = styled.h2`
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
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

export const ConverterContent = styled.div`
  padding: 0.5rem;

  ${devices.tablet} {
    padding: 1rem;
  }
`;

export const ConverterCard = styled.div`
  min-width: 330px;
  max-width: 330px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => `${theme.colors.background}40`};
  overflow: hidden;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 8px 16px rgba(0, 0, 0, 0.02);
  padding: 0.4rem 0.5rem 0.5rem 0.5rem;
  margin: 0 -0.5rem;

  ${devices.tablet} {
    padding: 0.8rem 1rem 1rem 0.7rem;

    margin: 0 -1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.white};
  // background: ${({ theme }) => `${theme.colors.background}30`};
  padding: 0.4rem 0.5rem 0rem 0.3rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: fit-content;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;

  ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: none; 
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
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
  font-family: inherit;
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => `${theme.colors.background}`};
  appearance: none; // Add this to control the arrow appearance
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => `${theme.colors.background}`};
  }
`;

export const ResultContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: ${({ theme }) => `${theme.colors.background}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ResultValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;

  ${devices.tablet} {
    font-size: 1rem;
  }
`;

export const ExchangeRate = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
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
