import { useState } from 'react';
import { QuantityButton } from './QuantityButton';
import shopwhite from '../../../assets/icons/shop-white.svg';

import {
  ProductCard,
  ProductImage,
  ProductTags,
  ProductTag,
  ProductName,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  ProductActions,
  AddToCartButton
} from '../../styles/home/product-list.style';
import { Product, useCart } from '../../../redux';

interface ProductCardProps {
  product: Product;
}

export function ProductCardComponent({ product }: ProductCardProps) {
  const { addToCart, isInCart, getProductQuantity, formatPrice } = useCart();
  const [quantity, setQuantity] = useState(isInCart(product.id) ? getProductQuantity(product.id) : 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Format price to display
  const displayPrice = typeof product.price === 'string' 
    ? product.price.replace('R$', '') 
    : formatPrice(product.price).replace('R$', '');

  return (
    <ProductCard>
      <ProductImage>
        <img src={product.ilustration} alt={product.name} />
      </ProductImage>

      <ProductTags>
        <ProductTag>{product.type}</ProductTag>
      </ProductTags>

      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>

      <ProductFooter>
        <ProductPrice>
          R$ <span>{displayPrice}</span>
        </ProductPrice>
        <ProductActions>
          <QuantityButton 
            initialQuantity={quantity} 
            onQuantityChange={setQuantity} 
          />
          <AddToCartButton onClick={handleAddToCart}>
            <img src={shopwhite} alt="Add to cart" />
          </AddToCartButton>
        </ProductActions>
      </ProductFooter>
    </ProductCard>
  );
}