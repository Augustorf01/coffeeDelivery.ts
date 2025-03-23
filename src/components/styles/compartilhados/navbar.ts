import styled from 'styled-components';
import { flexBetween, media } from '../../../theme';

export const NavBarContainer = styled.nav`
  ${flexBetween}
  width: 100%;
  padding: 2rem 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 1000;
  
  ${media.belowTablet`
    padding: 1.5rem 2rem;
  `}
  
  ${media.mobile`
    padding: 1rem 1rem;
  `}
`;

export const LogoContainer = styled.div`
  img {
    height: 2.5rem;
    
    ${media.mobile`
      height: 2rem;
    `}
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  ${media.mobile`
    gap: 0.5rem;
  `}
`;

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purpleLight};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem 0.75rem;
  
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
  
  span {
    color: ${({ theme }) => theme.colors.purpleDark};
    font-size: 0.875rem;
    font-weight: 500;
    
    ${media.mobile`
      font-size: 0.75rem;
      display: none;
    `}
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }
  
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;