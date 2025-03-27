// src/components/Logo.tsx
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoSVG = styled.svg`
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

const LogoText = styled.div<LogoTextProps>`
  font-size: ${({ variant }) =>
    variant === "footer" ? "1.125rem" : "1.25rem"}; // Direct values since we don't have fontSizes
  font-weight: 700; // Direct value since we don't have fontWeights
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.5px;
  margin: 0;
`;

interface LogoProps {
  variant?: "header" | "footer";
}

const Logo = ({ variant = "header" }: LogoProps) => {
  return (
    <LogoContainer>
      <LogoSVG viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle className="circle-bg" cx="18" cy="18" r="18" />

        {/* Dollar symbol */}
        <path
          className="symbol-primary"
          d="M19.5 10.5v1.2c1.5.3 2.7.9 3.4 1.8.7.9 1.1 2 1.1 3.3h-3c0-.8-.2-1.4-.7-1.9-.5-.5-1.1-.7-1.8-.7-.7 0-1.3.2-1.7.6-.4.4-.6.9-.6 1.5 0 .6.2 1.1.6 1.5.4.4 1.2.8 2.4 1.1 1.2.3 2.2.7 3 1.1.8.4 1.3.9 1.7 1.5.4.6.6 1.4.6 2.2 0 1.3-.4 2.4-1.3 3.2-.9.8-2 1.3-3.5 1.4v1.2h-2v-1.2c-1.6-.2-2.8-.8-3.7-1.7-.9-.9-1.4-2.1-1.4-3.6h3c0 .9.3 1.6.8 2.1.5.5 1.2.8 2.1.8.8 0 1.4-.2 1.9-.6.5-.4.7-1 .7-1.6 0-.6-.2-1.1-.6-1.5-.4-.4-1.2-.7-2.4-1.1-1.2-.3-2.2-.7-3-1.1-.8-.4-1.3-.9-1.7-1.5-.4-.6-.6-1.4-.6-2.2 0-1.3.4-2.3 1.2-3.1.8-.8 1.9-1.3 3.3-1.5v-1.2h2z"
        />

        {/* Exchange arrows */}
        <path className="symbol-secondary" d="M11 24l2.5-2.5L11 19v2h-4v1h4v2zM25 12l-2.5 2.5L25 17v-2h4v-1h-4v-2z" />
      </LogoSVG>
      <LogoText variant={variant}>Currency Prime</LogoText>
    </LogoContainer>
  );
};

export default Logo;
