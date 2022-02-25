/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
  INCREASE_NUM_OF_ITEMS,
  DECREASE_NUM_OF_ITEMS,
} from './actionTypes';

export const initState = {
  loading: true,
  products: [],
  categories: [],
  currencies: [],
  singleProduct: [],
  error: null,
  numOfItems: 1,
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
    case FETCH_SINGLE_PRODUCT:
      // Get item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
      return {
        ...state,
        singleProduct: item,
      };
    case ADD_ITEM_TO_CART:
      const product = state.products.find(
        (product) => product.id === action.payload,
      );
      // Check if product is in cart already
      const inCart = state.cart.find((product) => product.id === action.payload);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) => (product.id === action.payload
            ? { ...product, qty: product.qty + state.numOfItems }
            : product))
          : [...state.cart, { ...product, qty: state.numOfItems }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case INCREASE_NUM_OF_ITEMS:
      return {
        ...state,
        numOfItems: action.payload,
      };
    case DECREASE_NUM_OF_ITEMS:
      return {
        ...state,
        numOfItems: action.payload,
      };
    default:
      return state;
  }
};
