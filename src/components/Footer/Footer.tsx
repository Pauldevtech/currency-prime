import { FC } from 'react';
import Logo from '../Logo/Logo';
import {
  FooterWrapper,
  FooterContainer,
  FooterSection,
  SectionTitle,
  FooterText,
  FooterLink,
  FooterNavigation
} from './styles';

const Footer: FC = () => {
  // Add this handler to prevent default link behavior
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

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

        <FooterNavigation>
          <FooterSection>
            <SectionTitle>Services</SectionTitle>
            <FooterLink href="#" onClick={handleClick}>Converter</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Exchange Rates</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Historical Data</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Rate Alerts</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Company</SectionTitle>
            <FooterLink href="#" onClick={handleClick}>About Us</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Contact</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Blog</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Careers</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Legal</SectionTitle>
            <FooterLink href="#" onClick={handleClick}>Privacy Policy</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Terms of Service</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Cookie Policy</FooterLink>
            <FooterLink href="#" onClick={handleClick}>Disclaimer</FooterLink>
          </FooterSection>
        </FooterNavigation>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;