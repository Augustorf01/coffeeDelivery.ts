import styled from 'styled-components';
import { media, container } from '../../../theme';

export const IntroductionContainer = styled.section`
  ${container}
  padding: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  ${media.laptop`
    grid-template-columns: 1.2fr 0.8fr;
  `}
  
  ${media.belowTablet`
    grid-template-columns: 1fr;
    text-align: center;
  `}
`;

export const IntroContent = styled.div`
  ${media.belowTablet`
    order: 2;
  `}
  
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.baseTitle};
    margin-bottom: 1rem;
    line-height: 1.3;
    
    ${media.laptop`
      font-size: 2.5rem;
    `}
    
    ${media.tablet`
      font-size: 2.25rem;
    `}
    
    ${media.mobile`
      font-size: 2rem;
    `}
  }
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    margin-bottom: 2rem;
    
    ${media.mobile`
      font-size: 1rem;
    `}
  }
`;

export const IntroImage = styled.div`
  ${media.belowTablet`
    order: 1;
    margin: 0 auto;
    max-width: 90%;
  `}
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 2rem;
  
  ${media.mobile`
    grid-template-columns: 1fr;
    text-align: left;
  `}
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  ${media.belowTablet`
    justify-content: center;
  `}
  
  ${media.mobile`
    justify-content: flex-start;
  `}
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
      case 'yellow-dark': return theme.colors.yellowDark;
      case 'yellow': return theme.colors.yellow;
      case 'purple': return theme.colors.purple;
      default: return theme.colors.baseText;
    }
  }};
  
  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const BenefitText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.baseText};
`;