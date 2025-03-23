import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { 
  addProduct, 
  removeProduct, 
  updateQuantity, 
  clearCart, 
  toggleCart 
} from '../slices/cartSlice';
import { Product } from '../types';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { products, totalItems, totalPrice, isCartOpen } = useAppSelector(state => state.cart);
  
  // Add product to cart
  const addToCart = useCallback((product: Product, quantity = 1) => {
    dispatch(addProduct({ ...product, quantity }));
  }, [dispatch]);
  
  // Remove product from cart
  const removeFromCart = useCallback((productId: number) => {
    dispatch(removeProduct(productId));
  }, [dispatch]);
  
  // Update product quantity
  const updateProductQuantity = useCallback((productId: number, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  }, [dispatch]);
  
  // Clear all items from cart
  const emptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);
  
  // Toggle cart sidebar
  const toggleCartSidebar = useCallback(() => {
    dispatch(toggleCart());
  }, [dispatch]);
  
  // Check if a product is in the cart
  const isInCart = useCallback((productId: number) => {
    return products.some(product => product.id === productId);
  }, [products]);
  
  // Get product quantity from cart
  const getProductQuantity = useCallback((productId: number) => {
    const product = products.find(product => product.id === productId);
    return product ? product.quantity : 0;
  }, [products]);
  
  // Format price for display
  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };
  
  return {
    products,
    totalItems,
    totalPrice,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateProductQuantity,
    emptyCart,
    toggleCartSidebar,
    isInCart,
    getProductQuantity,
    formatPrice,
  };
};