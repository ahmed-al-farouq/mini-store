/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_SINGLE_PRODUCT,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './actionTypes';

export const initState = {
  loading: true,
  products: [],
  categories: [],
  currencies: [],
  singleProduct: [],
  error: null,
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
        (product) => product.id === action.payload.id,
      );
      // Check if product is in cart already
      const inCart = state.cart.find((product) => product.id === action.payload.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) => (product.id === action.payload.id
            ? { ...product, qty: product.qty + 1, selectedAttributes: action.payload.attributesValues }
            : product))
          : [...state.cart, { ...product, qty: 1, selectedAttributes: action.payload.attributesValues }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => (product.id === action.payload.id
          ? { ...product, qty: action.payload.qty }
          : product)),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: action.payload.qty === 0
          ? state.cart.filter((product) => product.id !== action.payload.id)
          : state.cart.map((product) => (product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product)),
      };
    default:
      return state;
  }
};
