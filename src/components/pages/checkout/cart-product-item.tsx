import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// Add actions for removing items and updating quantity
// import { removeProductFromCart, updateProductQuantity } from '../../../redux/products-cart/actions';
import { CartProductItemProps } from './types';
import { QuantityButton } from '../home/QuantityButton';
import trash from '../../../assets/icons/trash-icon.svg';

import {
  CartItem,
  CartItemContent,
  CartItemInfo,
  CartItemActions,
  RemoveButton,
  CartItemPrice
} from '../../styles/checkout/checkout.style';

export const CartProductItem = ({ product }: CartProductItemProps) => {
//   const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1);
  
  // Price formatting
  const formattedPrice = typeof product.price === 'number' 
    ? `R$ ${product.price.toFixed(2).replace('.', ',')}`
    : product.price;
    
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    // Uncomment when action is implemented
    // dispatch(updateProductQuantity(product.id, newQuantity));
  };
  
  const handleRemove = () => {
    // Uncomment when action is implemented
    // dispatch(removeProductFromCart(product.id));
  };

  return (
    <CartItem>
      <CartItemContent>
        <img src={product.ilustration} alt={product.name} />
        <CartItemInfo>
          <p>{product.name}</p>
          <CartItemActions>
            <QuantityButton 
              initialQuantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <RemoveButton onClick={handleRemove}>
              <img src={trash} alt="Remove" />
              REMOVER
            </RemoveButton>
          </CartItemActions>
        </CartItemInfo>
      </CartItemContent>
      <CartItemPrice>{formattedPrice}</CartItemPrice>
    </CartItem>
  );
}