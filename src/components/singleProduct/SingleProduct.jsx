import React from 'react';
import Carousel from './Carousel';
import Details from './Details';

const SingleProduct = () => (
  <section className="single-product">
    <div className="container flex justify-between">
      <Carousel />
      <Details />
    </div>
  </section>
);

export default SingleProduct;
