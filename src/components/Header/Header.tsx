import { FC } from "react";
import { HeaderWrapper, HeaderContent, NavLinks, NavLink } from "./styles";
import Logo from "../Logo/Logo";

const Header: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToMain = () => {
    const mainContent = document.querySelector('#converter-rates');
    mainContent?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <div onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <NavLinks role="navigation" aria-label="Main navigation">
          <NavLink 
            onClick={scrollToTop} 
            href="#home"
            aria-label="Home"
          >
            Home
          </NavLink>
          <NavLink 
            onClick={scrollToMain} 
            href="#converter-rates"
            aria-label="Rates/Converter"
          >
            Rates/Converter
          </NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;