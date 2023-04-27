import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './Reducer';
import CartSliceReducer from './CartSlice';

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    cartSlice: CartSliceReducer,
  },
});

export default store;
