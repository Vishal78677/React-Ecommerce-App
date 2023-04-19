import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  ratingProducts: [],
  singleProduct: [],
  categories: [],
  loading: false,
  error: false,
  totalPages: 0,
  sort: '',
};

const shoppingSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      // localStorage.setItem('products', JSON.stringify(state.products));
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setProductSearch: (state, action) => {
      state.products = action.payload;
    },

    setProductRating: (state, action) => {
      const filteredRatingPro = state.products
        ?.map((item) => {
          if (item.rating) {
            return {
              ...item,
              rating: +item.rating.toFixed(0),
            };
          } else {
            return item;
          }
        })
        ?.filter((item) => {
          return item.rating === action.payload;
        });

      console.log(
        '🚀 ~ file: Reducer.jsx:48 ~ filteredRatingPro ~ filteredRatingPro:',
        filteredRatingPro
      );

      // state.products = filteredRatingPro;
      state.ratingProducts = filteredRatingPro;
    },

    setEmptyRatingProducts: (state, action) => {
      state.ratingProducts = [];
    },

    setSinglePage: (state, action) => {
      state.singleProduct = [action.payload];
    },

    Increment: (state, action) => {
      const findData = state.cart.find((curPro) => {
        return curPro.id === action.payload;
      });

      if (findData) {
        state.qty = state.qty + 1;
      }
    },
    Decrement: (state, action) => {
      const findData = state.cart.find((curPro) => {
        return curPro.id === action.payload;
      });

      if (findData) {
        state.qty = state.qty > 1 ? state.qty - 1 : state.qty;
      }
    },
    // setCart: (state, action) => {
    //   const findPro = state.cart.find((pro) => pro.id === action.payload.id);

    //   if (findPro) {
    //     const tempCart = state.cart.map((curPro) => {
    //       if (curPro.id === action.payload.id) {
    //         let tempQty = state.quantity + action.payload.quantity;
    //         let tempTotalPrice = tempQty * curPro.price;

    //         return { ...curPro, quantity: tempQty, totalPrice: tempTotalPrice };
    //       } else {
    //         return curPro;
    //       }
    //     });

    //     state.cart = tempCart;
    //   } else {
    //     state.cart.push(findPro);
    //   }
    // },
    cartRemovePro: (state, action) => {
      const findPro = state.cart.filter((curPro) => {
        return curPro.id !== action.payload;
      });

      state.cart = findPro;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },

    setProductsCategories: (state, action) => {
      state.categories = action.payload;
    },

    setSortPro: (state, action) => {
      state.sort = action.payload;
      if (state.sort === 'highest') {
        state.products = state.products.sort((a, b) => {
          return b.price - a.price;
        });
      } else {
        state.products = state.products.sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
  },
});

export const {
  setProducts,
  setError,
  setEmptyRatingProducts,
  setLoading,
  setTotalPages,
  setProductSearch,
  setSinglePage,
  setProductRating,
  cartRemovePro,
  clearCart,
  setProductsCategories,
  setSortPro,
  Increment,
  setCart,
  Decrement,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;

export const FetchAllProducts = (page) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );

      dispatch(setProducts(res.data.products));
      dispatch(setTotalPages(res.data.total / 10));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
};

export const fetchSearchProducts = (query) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );

      dispatch(setProductSearch(res.data.products));

      dispatch(
        setTotalPages(
          res.data.total < 10 ? res.data.total : res.data.total / 10
        )
      );
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
};

export const fetchCategoryProducts = (category) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      dispatch(setProducts(res.data.products));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);

      dispatch(setSinglePage(res.data));
      dispatch(setLoading(false));
      dispatch(setError(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
};

export const fetchCategoriesData = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    try {
      const res = await axios.get(`https://dummyjson.com/products/categories`);

      dispatch(setProductsCategories(res.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};
