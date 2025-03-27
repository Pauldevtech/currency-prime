import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoSymbol = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
`;
