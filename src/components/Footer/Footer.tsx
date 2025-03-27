// src/components/Footer/Footer.tsx
import Logo from '../Logo/Logo';
import {
  FooterWrapper,
  FooterContainer,
  FooterSection,
  SectionTitle,
  FooterText,
  FooterLink
} from './styles';

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