// src/components/Header/styles.ts
import styled from "styled-components";
import { devices } from "../../styles/breakpoints";
import { Container } from "../Container/Container";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  height: ${({ theme }) => theme.layout.headerHeightMobile};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  ${devices.tablet} {
    height: ${({ theme }) => theme.layout.headerHeightDesktop};
  }
`;

export const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${devices.tablet} {
    justify-content: space-between;
  }
`;

export const NavLinks = styled.nav`
  visibility: hidden; // Change from display: none to visibility: hidden
  
  ${devices.tablet} {
    visibility: visible; // Change from display: flex to visibility: visible
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;