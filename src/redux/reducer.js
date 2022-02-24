/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
} from './actionTypes';

export const initState = {
  loading: true,
  products: [],
  categories: [],
  currencies: [],
  error: null,
  numOfItems: 1,
  id: '',
  cart: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        categories: action.payload.categories,
        currencies: action.payload.currencies,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_ITEM_TO_CART:
      // Greate Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
        // Check if Item is in cart already
      const inCart = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => (item.id === action.payload
            ? { ...item, qty: item.qty + state.numOfItems }
            : item))
          : [...state.cart, { ...item, qty: state.numOfItems }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
