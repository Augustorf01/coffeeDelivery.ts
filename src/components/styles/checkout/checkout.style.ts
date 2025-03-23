import styled from 'styled-components';
import { container, media, flexBetween, flexCenter, flexColumn, card } from '../../../theme';

export const CheckoutContainer = styled.div`
  ${container}
  padding: 2rem 0 4rem;
`;

export const CheckoutTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  ${media.mobile`
    font-size: 1.25rem;
    text-align: center;
  `}
`;

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  
  ${media.laptop`
    gap: 1.5rem;
  `}
  
  ${media.belowTablet`
    grid-template-columns: 1fr;
  `}
`;

// Left Column - Forms
export const FormsContainer = styled.div`
  ${flexColumn}
  gap: 1rem;
`;

export const FormCard = styled.div`
  ${card}
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  img {
    color: ${({ theme }) => theme.colors.yellowDark};
  }
`;

export const FormHeaderContent = styled.div`
  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-weight: 500;
  }
  
  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.baseText};
  }
`;

export const AddressFormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  
  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const FormGroup = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 1};
  
  ${media.mobile`
    grid-column: span 1;
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.baseInput};
  border: 1px solid ${({ theme }) => theme.colors.baseButton};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.baseText};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.yellowDark};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.baseLabel};
  }
`;

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  
  ${media.belowTablet`
    grid-template-columns: 1fr;
  `}
`;

export const PaymentMethodButton = styled.button<{ isActive?: boolean }>`
  ${flexBetween}
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.purpleLight : theme.colors.baseButton};
  border: 1px solid ${({ isActive, theme }) => 
    isActive ? theme.colors.purple : theme.colors.baseButton};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.purpleLight : theme.colors.baseHover};
  }
  
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
  }
`;

// Right Column - Cart Summary
export const CartSummaryContainer = styled.div`
  ${card}
  border-radius: 6px 36px;
`;

export const CartItemsList = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

export const CartItem = styled.div`
  ${flexBetween}
  
  ${media.mobile`
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  `}
`;

export const CartItemContent = styled.div`
  display: flex;
  gap: 1.25rem;
  
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CartItemInfo = styled.div`
  ${flexColumn}
  gap: 0.5rem;
  
  p {
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }
`;

export const CartItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
  
  ${media.mobile`
    margin-top: 0.5rem;
  `}
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors.baseButton};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0 0.5rem;
  height: 2rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }
  
  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const CartItemPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.baseText};
  
  ${media.mobile`
    align-self: flex-end;
  `}
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  margin: 1.5rem 0;
`;

export const CartSummary = styled.div`
  ${flexColumn}
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const SummaryRow = styled.div`
  ${flexBetween}
  
  p {
    font-size: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.baseText};
  }
  
  &:last-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const EmptyCartMessage = styled.div`
  ${flexCenter}
  ${flexColumn}
  text-align: center;
  padding: 2rem;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  a {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 700;
    
    &:hover {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`;