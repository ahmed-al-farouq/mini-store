import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
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
    default:
      return state;
  }
};
