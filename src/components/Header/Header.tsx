import React from "react";
import { HeaderWrapper, HeaderContent, NavLinks, NavLink } from "./styles";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
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
        <NavLinks>
          <NavLink onClick={scrollToTop} href="#home">Home</NavLink>
          <NavLink onClick={scrollToMain} href="#converter-rates">Converter/Rates</NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;