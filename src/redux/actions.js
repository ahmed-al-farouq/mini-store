import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
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

export const addItemToCart = (productId) => ({
  type: ADD_ITEM_TO_CART,
  payload: productId,
});

export const removeFromCart = (itemID) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});
