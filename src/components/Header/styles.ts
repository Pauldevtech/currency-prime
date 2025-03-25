import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;