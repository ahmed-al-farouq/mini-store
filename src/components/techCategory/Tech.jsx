import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';

const Tech = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const getCurrency = (prices) => prices.find((price) => price.currency.symbol === currentCurrency);

  return (
    <section className="tech">
      <div className="container">
        <h1 className="category-name">
          {categories.map((cat) => (cat.name === 'tech' ? cat.name : null))}
        </h1>
        <div className="cards">
          {
          products.map((product) => (product.category === 'tech' ? (
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

export default Tech;
