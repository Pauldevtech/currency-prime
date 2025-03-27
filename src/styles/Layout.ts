// src/styles/Layout.ts
import styled from "styled-components";
import { devices } from "./breakpoints";
import { Container } from "../components/Container/Container";

export const Hero = styled.section`
  height: auto;
  min-height: 30vh;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.layout.headerHeightMobile};
  position: relative;
  padding: 2rem 0;

  ${devices.tablet} {
    margin-top: ${({ theme }) => theme.layout.headerHeightDesktop};
    margin-bottom: 1rem;
  }
`;

export const HeroContent = styled(Container)`
  text-align: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;

    ${devices.tablet} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};

    ${devices.tablet} {
      font-size: 1.2rem;
    }
  }
`;

export const MainContent = styled(Container)`
  min-height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;

  ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;

    & > *:first-child {
      flex: 2;
    }

    & > *:last-child {
      flex: 1;
    }
  }
`;
