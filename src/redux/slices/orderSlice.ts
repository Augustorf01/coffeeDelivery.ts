import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OrderState, Address, PaymentMethod, CartProduct } from '../types';
import { clearCart } from './cartSlice';

const initialState: OrderState = {
  currentOrder: null,
  orderHistory: [],
  isSubmitting: false,
  error: null,
};

// Async thunk for order submission simulation
export const submitOrder = createAsyncThunk(
  'order/submitOrder',
  async ({ 
    products, 
    address, 
    paymentMethod, 
    subtotal, 
    deliveryFee = 3.5 
  }: {
    products: CartProduct[];
    address: Address;
    paymentMethod: PaymentMethod;
    subtotal: number;
    deliveryFee?: number;
  }, 
  { dispatch }) => {
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const order = {
        id: Date.now(),
        products,
        address,
        paymentMethod,
        subtotal,
        deliveryFee,
        total: subtotal + deliveryFee,
        date: new Date().toISOString()
      };
      
      // Clear cart after successful order
      dispatch(clearCart());
      
      return order;
    } catch (error) {
      throw new Error('Failed to submit order. Please try again.');
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Set address information
    setAddress: (state, action: PayloadAction<Address>) => {
      if (!state.currentOrder) {
        state.currentOrder = {
          products: [],
          address: null,
          paymentMethod: null,
          deliveryFee: 3.5,
          subtotal: 0,
          total: 0,
        };
      }
      state.currentOrder.address = action.payload;
    },
    
    // Set payment method
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      if (!state.currentOrder) {
        state.currentOrder = {
          products: [],
          address: null,
          paymentMethod: null,
          deliveryFee: 3.5,
          subtotal: 0,
          total: 0,
        };
      }
      state.currentOrder.paymentMethod = action.payload;
    },
    
    // Reset current order
    resetOrder: (state) => {
      state.currentOrder = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.currentOrder = action.payload;
        state.orderHistory.push(action.payload);
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.error.message || 'Failed to submit order';
      });
  },
});

export const { setAddress, setPaymentMethod, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;