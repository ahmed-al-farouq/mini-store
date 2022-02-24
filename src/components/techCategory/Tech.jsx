import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';

const Tech = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
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
              price={product.prices[0].amount}
              priceCurrency={product.prices[0].currency.label}
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
