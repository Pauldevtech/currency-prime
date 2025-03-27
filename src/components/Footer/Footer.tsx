import { FC } from 'react';
import Logo from '../Logo/Logo';
import {
  FooterWrapper,
  FooterContainer,
  FooterSection,
  SectionTitle,
  FooterText,
  FooterLink
} from './styles';

const Footer: FC = () => {
  return (
    <FooterWrapper role="contentinfo">
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
          <FooterLink href="/converter">Currency Converter</FooterLink>
          <FooterLink href="/rates">Exchange Rates</FooterLink>
          <FooterLink href="/historical">Historical Data</FooterLink>
          <FooterLink href="/alerts">Rate Alerts</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Company</SectionTitle>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Legal</SectionTitle>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/cookies">Cookie Policy</FooterLink>
          <FooterLink href="/disclaimer">Disclaimer</FooterLink>
        </FooterSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;