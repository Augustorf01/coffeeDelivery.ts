import { useState } from 'react';
import {
  QuantitySelector,
  QuantityButton as StyledQuantityButton,
  QuantityValue
} from '../../styles/home/product-list.style';

export interface QuantityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => number;
  min?: number;
  max?: number;
}

export interface ButtonProps {
    children: string;
    onClick: () => void;
    disabled: boolean;
    type: "button";
    "aria-label": string;
}

export const QuantityButton = ({ 
  initialQuantity = 1, 
  onQuantityChange = (quantity: number) => {quantity},
  min = 1,
  max = 99,
  ...props
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  return (
    <QuantitySelector>
      <StyledQuantityButton 
        initialQuantity={1}
        onQuantityChange={(quantity) => {
            handleDecrease();
            return quantity;
        }}
        // Your existing props
        onClick={() => {}}
        disabled={false}
        type="button"
        aria-label="Quantity button"
        {...props}
      >
        -
      </StyledQuantityButton>
      
      <QuantityValue>{quantity}</QuantityValue>
      
      <StyledQuantityButton 
        initialQuantity={1}
        onQuantityChange={(quantity) => {
            handleIncrease();
            return quantity;
        }}
        // Your existing props
        onClick={() => {}}
        disabled={false}
        type="button"
        aria-label="Quantity button"
        {...props}
      >
        +
      </StyledQuantityButton>
    </QuantitySelector>
  );
}