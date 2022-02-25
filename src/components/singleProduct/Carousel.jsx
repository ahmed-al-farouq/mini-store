import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import product from '../../img/product.png';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const singleProduct = useSelector((state) => state.singleProduct);
  const handelCarousel = (index) => setImageIndex(index);

  return (
    <div className="carousel flex">
      <div className="options flex flex-column">
        {
          singleProduct.gallery.map((image, i) => {
            if (i >= 4) {
              return null;
            }
            return (
              <button
                type="button"
                className="btn"
                key={`${product.id}--${Math.random() * 10000}`}
                onClick={() => handelCarousel(i)}
              >
                <img src={image} alt="product" className="responsive-img" />
              </button>
            );
          })
        }
      </div>
      <div className="main-img">
        <img src={singleProduct.gallery[imageIndex]} alt="product" className="responsive-img" />
      </div>
    </div>
  );
};

export default Carousel;
