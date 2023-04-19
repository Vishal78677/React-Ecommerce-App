import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './Reducer';
import FilterFunction from './FilterFunction';
import CartSliceReducer from './CartSlice';

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    cartSlice: CartSliceReducer,
    // filter: FilterFunction,
  },
});

export default store;
