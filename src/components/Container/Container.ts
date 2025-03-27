// src/components/Container/Container.ts
import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  ${devices.tablet} {
    padding: 0 2rem;
  }
`;