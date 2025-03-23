import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartProduct, Product } from '../types';

const initialState: CartState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
  isCartOpen: false,
};

// Helper function to calculate cart totals
const calculateCartTotals = (products: CartProduct[]) => {
  return products.reduce(
    (acc, product) => {
      const itemTotal = product.price * product.quantity;
      return {
        totalItems: acc.totalItems + product.quantity,
        totalPrice: acc.totalPrice + itemTotal,
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart
    addProduct: (state, action: PayloadAction<Product & { quantity?: number }>) => {
      const { id, ilustration, name, price, quantity = 1, type, description = '' } = action.payload;
      
      // Convert price to number if it's a string
      const numericPrice = typeof price === 'string'
        ? Number(price.replace('R$', '').replace(',', '.'))
        : price;
      
      // Check if product is already in cart
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex >= 0) {
        // Update quantity of existing product
        state.products[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to cart
        state.products.push({
          id,
          ilustration,
          name,
          price: numericPrice,
          quantity,
          type,
          description,
        });
      }

      // Calculate new totals
      const { totalItems, totalPrice } = calculateCartTotals(state.products);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    
    // Remove product from cart
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      
      // Recalculate totals
      const { totalItems, totalPrice } = calculateCartTotals(state.products);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    
    // Update product quantity
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      
      // Find product and update quantity
      const productIndex = state.products.findIndex(product => product.id === id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity = quantity;
      }
      
      // Recalculate totals
      const { totalItems, totalPrice } = calculateCartTotals(state.products);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
    
    // Clear cart
    clearCart: (state) => {
      state.products = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    
    // Toggle cart sidebar (if needed)
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

// Export actions and reducer
export const { 
  addProduct, 
  removeProduct, 
  updateQuantity, 
  clearCart, 
  toggleCart 
} = cartSlice.actions;

export default cartSlice.reducer;