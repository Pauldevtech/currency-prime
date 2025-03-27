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
  gap: 1rem;
  justify-items: center; // Center on mobile

  ${devices.tablet} {
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    justify-content: space-between;
    justify-items: start; // Reset on tablet
  }
`;

export const FooterNavigation = styled.div`
  display: none;

  ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-self: end;
    width: fit-content;
    text-align: center;
  }
`;

export const FooterSection = styled.section<{ $isLogo?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center; // Center on mobile
  text-align: center; // Center on mobile

  ${devices.tablet} {
    align-items: ${({ $isLogo }) => ($isLogo ? 'flex-start' : 'center')};
    text-align: ${({ $isLogo }) => ($isLogo ? 'left' : 'center')};
    min-width: 140px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.3rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  margin: 0.5rem 0 0;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.body};
  max-width: 200px;
  text-align: center; // Ensure text is centered
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