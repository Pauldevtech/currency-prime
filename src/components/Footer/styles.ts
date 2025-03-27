// src/components/Footer/styles.ts
import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';
import { Container } from '../Container/Container';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.surfaceLight};
  border-top: 1px solid ${({ theme }) => theme.colors.surface};
  padding: 1rem 0;
  margin-top: 2rem;

  ${devices.tablet} {
    padding: 2rem 0;
  }
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  ${devices.tablet} {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div<{ $isLogo?: boolean }>`
  display: ${({ $isLogo }) => ($isLogo ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${devices.tablet} {
    display: block;
    text-align: left;
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  margin: 0.25rem 0;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.body};

  ${devices.tablet} {
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  transition: all 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;