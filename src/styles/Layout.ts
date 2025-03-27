import styled from "styled-components";
import { devices } from "./breakpoints";

export const Hero = styled.section`
  height: auto;
  min-height: 25vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem 0rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.layout.headerHeightMobile}; // This ensures the hero starts after the header
  position: relative;

  ${devices.tablet} {
    margin-top: ${({ theme }) => theme.layout.headerHeightDesktop};
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1rem;

    ${devices.tablet} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};

    ${devices.tablet} {
      font-size: 1.2rem;
    }
  }
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 2rem;

    // Add this to make RatesTable wider
    & > *:first-child {
      flex: 2; // Takes up 2 parts of the space
    }

    & > *:last-child {
      flex: 1; // Takes up 1 part of the space
    }
  }
`;
