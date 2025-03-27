// src/components/Footer.tsx
import styled from 'styled-components';
import Logo from './Logo/Logo';
import { devices } from '../styles/breakpoints';
import { Container } from './Container/Container';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;

  ${devices.tablet} {
    padding: 2rem 0;
  }
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  ${devices.tablet} {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div<{ $isLogo?: boolean }>`
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

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const FooterText = styled.p`
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

const FooterLink = styled.a`
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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection $isLogo>
          <Logo variant="footer" />
          <FooterText>
            Real-time currency conversion and exchange rates for over 170 currencies worldwide.
            Stay informed with live updates and historical data.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Services</SectionTitle>
          <FooterLink href="#">Currency Converter</FooterLink>
          <FooterLink href="#">Exchange Rates</FooterLink>
          <FooterLink href="#">Historical Data</FooterLink>
          <FooterLink href="#">Rate Alerts</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Company</SectionTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Legal</SectionTitle>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">Disclaimer</FooterLink>
        </FooterSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;