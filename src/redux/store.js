import { createStore, applyMiddleware } from 'redux';
import {
  gql,
} from '@apollo/client';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from './actions';
import { client } from '../App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const fetchData = () => (dispatch) => {
  dispatch(fetchDataRequest());
  client
    .query({
      query: gql`
      query {
        currencies {
          label
          symbol
        }
        categories {
          name
          products {
            id
            name
            brand
            description
            gallery
            category
            prices {
              amount
              currency {
                symbol
              }
            }
            attributes {
              name
              items {
                value
              }
            }
            inStock
          }
        }
      }
      `,
    })
    .then((result) => {
      const products = [];
      result.data.categories.map((cat) => cat.products.map((product) => products.push(product)));
      dispatch(fetchDataSuccess(
        products, result.data.categories, result.data.currencies,
      ));
    })
    .catch((err) => dispatch(fetchDataFailure(err.message)));
};

store.dispatch(fetchData());

export default store;
