import React from 'react';
import product from '../../img/product.png';

const Carousel = () => {
  const some = () => console.log('red');
  return (
    <div className="carousel flex">
      <div className="options flex flex-column">
        <button type="button" className="btn">
          <img src={product} alt="product" className="responsive-img" />
        </button>
        <button type="button" className="btn">
          <img src={product} alt="product" className="responsive-img" />
        </button>
        <button type="button" className="btn" onClick={some}>
          <img src={product} alt="product" className="responsive-img" />
        </button>
      </div>
      <div className="main-img">
        <img src={product} alt="product" className="responsive-img" />
        <img src={product} alt="product" className="responsive-img d-none" />
        <img src={product} alt="product" className="responsive-img d-none" />
      </div>
    </div>
  );
};

export default Carousel;
