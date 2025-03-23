import styled from 'styled-components';
import { container, media, flexCenter } from '../../../theme';
import { QuantityButtonProps } from '../../pages/home/QuantityButton';

export const ProductListSection = styled.section`
  ${container}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0 4rem;
`;

export const ProductListTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.baseTitle};
  margin-bottom: 2.5rem;
  
  ${media.belowTablet`
    text-align: center;
    font-size: 1.75rem;
  `}
  
  ${media.mobile`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  `}
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `}
  
  ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
  `}
  
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  
  ${media.mobile`
    grid-template-columns: 1fr;
    gap: 2.5rem;
  `}
`;

export const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.baseCard};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImage = styled.div`
  margin-top: -2.5rem;
  margin-bottom: 0.75rem;
  
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const ProductTags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductTag = styled.span`
  background-color: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.baseTitle};
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.baseLabel};
  margin-bottom: 2rem;
`;

export const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const ProductPrice = styled.div`
  font-size: 0.875rem;
  
  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.baseText};
  }
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseButton};
  border-radius: 6px;
  padding: 0.5rem;
`;

export const QuantityButton = styled.button<QuantityButtonProps>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.purple};
  font-size: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  ${flexCenter}
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.baseTitle};
  margin: 0 0.5rem;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.purpleDark};
  border: none;
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  ${flexCenter}
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
  
  img {
    width: 1.375rem;
    height: 1.375rem;
  }
`;