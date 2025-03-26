// src/components/RatesTable/styles.ts
import styled from 'styled-components';

export const CurrencyCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-weight: 500;
  }
`;

export const FlagWrapper = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CustomFlag = styled.img`
  width: 32px;
  height: 24px;
  object-fit: contain;
`;