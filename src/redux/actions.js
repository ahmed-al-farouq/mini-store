import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_SINGLE_PRODUCT,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CHANGE_CURRENCY,
} from './actionTypes';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (products, categories, currencies) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    products,
    categories,
    currencies,
  },
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchSingleProduct = (id) => ({
  type: FETCH_SINGLE_PRODUCT,
  payload: id,
});

export const addItemToCart = (productId, attributesValues) => ({
  type: ADD_ITEM_TO_CART,
  payload: {
    id: productId,
    attributesValues,
  },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: productId,
  },
});

export const increaseQuantity = (id, qty) => ({
  type: INCREASE_QUANTITY,
  payload: {
    id,
    qty: qty + 1,
  },
});

export const decreaseQuantity = (id, qty) => ({
  type: DECREASE_QUANTITY,
  payload: {
    id,
    qty: qty - 1,
  },
});

export const changeCurrency = (currency) => ({
  type: CHANGE_CURRENCY,
  payload: currency,
});
