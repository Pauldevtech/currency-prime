import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoSVG = styled.svg`
  width: 36px;
  height: 36px;

  .circle-bg {
    fill: ${({ theme }) => theme.colors.surface};
  }

  .symbol-primary {
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

interface LogoTextProps {
  variant?: "header" | "footer";
}

export const LogoText = styled.div<LogoTextProps>`
  font-size: ${({ variant }) =>
    variant === "footer" ? "1.125rem" : "1.25rem"};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.5px;
  margin: 0;
`;