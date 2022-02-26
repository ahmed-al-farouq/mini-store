import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Category from './components/Category';
import SingleProduct from './components/singleProduct/SingleProduct';
import Loading from './components/Loading';
import Error from './components/Error';
import CartPage from './components/cartPage/CartPage';

export const CategoriesContext = React.createContext();
export const CurrenciesContext = React.createContext();

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Category name="all" />} />
        <Route path="/clothes" element={<Category name="clothes" />} />
        <Route path="/tech" element={<Category name="tech" />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
