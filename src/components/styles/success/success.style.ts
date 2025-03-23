import styled from 'styled-components';
import { container, media, flexColumn } from '../../../theme';

export const SuccessContainer = styled.div`
  ${container}
  padding: 5rem 0;
  
  ${media.belowTablet`
    padding: 3rem 0;
  `}
  
  ${media.mobile`
    padding: 2rem 0;
  `}
`;

export const SuccessHeader = styled.div`
  margin-bottom: 2.5rem;
  
  ${media.belowTablet`
    text-align: center;
  `}
  
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.yellowDark};
    margin-bottom: 0.25rem;
    
    ${media.mobile`
      font-size: 1.5rem;
    `}
  }
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    
    ${media.mobile`
      font-size: 1rem;
    `}
  }
`;

export const SuccessContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  
  ${media.belowTablet`
    grid-template-columns: 1fr;
    gap: 3rem;
  `}
`;

export const OrderInfoCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  
  /* Create gradient border */
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.yellow}, ${({ theme }) => theme.colors.purple});
  }
  
  ${media.belowTablet`
    max-width: 100%;
  `}
`;

export const OrderInfoList = styled.div`
  ${flexColumn}
  gap: 2rem;
`;

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ bgColor, theme }) => {
    switch (bgColor) {
      case 'purple': return theme.colors.purple;
      case 'yellow': return theme.colors.yellow;
      default: return theme.colors.yellowDark;
    }
  }};
  
  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const InfoText = styled.div`
  ${flexColumn}
  
  p {
    color: ${({ theme }) => theme.colors.baseText};
    
    span {
      font-weight: 700;
    }
  }
`;

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    
    ${media.belowTablet`
      max-width: 80%;
    `}
  }
`;

export const ReturnButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }
  
  ${media.belowTablet`
    width: 100%;
  `}
`;