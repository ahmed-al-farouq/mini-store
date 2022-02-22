import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        product(id: "jacket-canada-goosee") {
          id
          name
          inStock
          gallery
          description
          category
          brand
          prices {
            amount
          }
        }
      }
    `,
  })
  .then((result) => console.log(result.data.product));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
