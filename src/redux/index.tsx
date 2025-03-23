// Re-export store
export { store, useAppDispatch, useAppSelector } from './store';

// Re-export types
export * from './types';

// Re-export actions
export { 
  addProduct, 
  removeProduct, 
  updateQuantity, 
  clearCart, 
  toggleCart 
} from './slices/cartSlice';

export { 
  submitOrder, 
  setAddress, 
  setPaymentMethod, 
  resetOrder 
} from './slices/orderSlice';

// Re-export hooks
export { useCart } from './hooks/useCart';
export { useOrder } from './hooks/useOrder';