import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cart: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  loading: false,
  error: false,
  isDisabled: false,
  total_item: localStorage.getItem('totalItem')
    ? JSON.parse(localStorage.getItem('totalItem'))
    : 0,
  total_amount: 5,
  shipping: 1,
};

const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart2: (state, action) => {
      const isItemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        const tempCart = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            let tempQty = product.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * product.price;

            if (tempQty >= product.stock) {
              tempQty = product.stock;
            }

            return {
              ...product,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return product;
          }
        });

        state.cart = tempCart;
      } else {
        state.cart.push(action.payload);
        toast.success('your item added to cart!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    handleRemoveItem: (state, action) => {
      const findPro = state.cart.filter((item) => item.id !== action.payload);

      state.cart = findPro;
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    setIncrement: (state, action) => {
      const isItemInCart = state.cart.find(
        (item) => item.id === action.payload
      );

      if (isItemInCart) {
        const findItem = state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.quantity * item.price,
            };
          } else {
            return item;
          }
        });

        state.cart = findItem;
      } else {
        return state.cart;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    setDecrement: (state, action) => {
      const isItemInCart = state.cart.find(
        (item) => item.id === action.payload
      );

      if (isItemInCart) {
        const decreaseQuantity = state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            };
          } else {
            return item;
          }
        });

        state.cart = decreaseQuantity;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    setToggleCartQty: (state, action) => {
      let updatedItemVal = state.cart.reduce((initialVal, curEle) => {
        let { quantity } = curEle;

        initialVal = initialVal + quantity;

        return initialVal;
      }, 0);

      state.total_item = updatedItemVal;

      localStorage.setItem('totalItem', JSON.stringify(state.total_item));
    },

    setCartTotal: (state, action) => {
      const total_price = state.cart.reduce((initialVal, curEle) => {
        let { price, quantity } = curEle;

        let initialItem = initialVal + price * quantity;

        return initialItem;
      }, 0);

      state.total_amount = total_price;
      state.shipping = total_price > 500 ? 0 : 3;
    },

    setCartClear: (state, action) => {
      state.cart = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },
  },
});

export const {
  setCart2,
  setToggleCartQty,
  setCartClear,
  setCartTotal,
  handleRemoveItem,
  setIncrement,
  setDecrement,
} = CartReducer.actions;

export default CartReducer.reducer;
