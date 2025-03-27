import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
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

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; // Center logo on mobile
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  ${devices.tablet} {
    padding: 0 2rem;
    justify-content: space-between; // Space between logo and nav on tablet+
  }
`;

export const NavLinks = styled.nav`
  display: none; // Hide on mobile

  ${devices.tablet} {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
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
