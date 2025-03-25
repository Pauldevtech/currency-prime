import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const LogoSymbol = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSymbol>₡</LogoSymbol>
      <LogoText>
        Currency<span>Prime</span>
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;