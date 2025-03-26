import styled from 'styled-components';
import { devices } from './breakpoints';

export const Hero = styled.section`
  height: auto;
  min-height: 25vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.layout.headerHeightMobile}; // This ensures the hero starts after the header
  position: relative;

  ${devices.tablet} {
    min-height: 30vh;
    padding: 3rem 2rem;
    margin-top: ${({ theme }) => theme.layout.headerHeightDesktop};
  }
`;


export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;

    ${devices.tablet} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};

    ${devices.tablet} {
      font-size: 1.2rem;
    }
  }
`;
export const MainContent = styled.main`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
  min-height: calc(100vh - 400px);

  ${devices.tablet} {
    margin: 2rem auto;
    padding: 0 2rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;

  ${devices.tablet} {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;