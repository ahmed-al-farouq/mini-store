import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Item from './Item';

const Category = ({
  name,
}) => {
  const products = useSelector((state) => state.products);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const getCurrency = (prices) => prices.find((price) => price.currency.symbol === currentCurrency);

  return (
    <section className="clothes">
      <div className="container">
        <h1 className="category-name">
          {name}
        </h1>
        <div className="cards">
          {
            name === 'all'
              ? products.map((product) => (
                <Item
                  key={`${product.id}-${Math.random() * 10000}`}
                  id={product.id}
                  img={product.gallery[0]}
                  name={product.name}
                  price={getCurrency(product.prices).amount}
                  priceCurrency={getCurrency(product.prices).currency.symbol}
                  outOfStock={product.inStock}
                />
              ))
              : products.map((product) => (product.category === name ? (
                <Item
                  key={`${product.id}-${Math.random() * 10000}`}
                  id={product.id}
                  img={product.gallery[0]}
                  name={product.name}
                  price={getCurrency(product.prices).amount}
                  priceCurrency={getCurrency(product.prices).currency.symbol}
                  outOfStock={product.inStock}
                />
              ) : null))
          }
        </div>
      </div>
    </section>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
