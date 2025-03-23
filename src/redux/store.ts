import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createLogger } from 'redux-logger';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import { RootState } from './types';

// Create middleware array
const middleware: Array<Middleware> = [];

// Add redux-logger in development
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });
  middleware.push(logger);
}

// Configure store with reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths in the state
        ignoredActions: ['order/submitOrder/fulfilled'],
        ignoredPaths: ['order.orderHistory'],
      },
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Export typed dispatch and selector hooks
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;