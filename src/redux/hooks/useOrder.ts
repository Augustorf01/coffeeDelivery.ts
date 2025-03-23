import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { submitOrder, setAddress, setPaymentMethod, resetOrder } from '../slices/orderSlice';
import { Address, PaymentMethod } from '../types';
import { useCart } from './useCart';

export const useOrder = () => {
  const dispatch = useAppDispatch();
  const { currentOrder, orderHistory, isSubmitting, error } = useAppSelector(state => state.order);
  const { products, totalPrice: subtotal } = useCart();
  
  // Set delivery address
  const updateAddress = useCallback((address: Address) => {
    dispatch(setAddress(address));
  }, [dispatch]);
  
  // Set payment method
  const updatePaymentMethod = useCallback((method: PaymentMethod) => {
    dispatch(setPaymentMethod(method));
  }, [dispatch]);
  
  // Submit order
  const placeOrder = useCallback(async (address: Address, paymentMethod: PaymentMethod) => {
    if (products.length === 0) {
      return Promise.reject('Your cart is empty');
    }
    
    try {
      await dispatch(submitOrder({
        products,
        address,
        paymentMethod,
        subtotal,
      })).unwrap();
      
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }, [dispatch, products, subtotal]);
  
  // Reset current order
  const clearOrder = useCallback(() => {
    dispatch(resetOrder());
  }, [dispatch]);
  
  // Calculate total with delivery fee
  const getOrderTotal = useCallback((deliveryFee = 3.5) => {
    return subtotal + deliveryFee;
  }, [subtotal]);
  
  return {
    currentOrder,
    orderHistory,
    isSubmitting,
    error,
    updateAddress,
    updatePaymentMethod,
    placeOrder,
    clearOrder,
    getOrderTotal,
  };
};