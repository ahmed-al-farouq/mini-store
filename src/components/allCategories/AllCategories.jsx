import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';

const AllCategories = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const getCurrency = (prices) => prices.find((price) => price.currency.symbol === currentCurrency);

  return (
    <section className="products">
      <div className="container">
        <h1 className="category-name">
          {categories[0].name}
        </h1>
        <div className="cards">
          {
          products.map((product) => (
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
        }
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
