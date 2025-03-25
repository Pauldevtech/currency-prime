import React from "react";
import { HeaderWrapper, HeaderContent, NavLinks, NavLink } from "./styles";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#converter">Converter</NavLink>
          <NavLink href="#rates">Rates</NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
