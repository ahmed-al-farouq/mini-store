import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import circleCart from '../img/circle-cart-icon.png';

const Item = ({
  img,
  name,
  price,
  priceCurrency,
  outOfStock,
}) => {
  if (outOfStock) {
    return (
      <div className="card out-of-stock">
        <div className="card-img">
          <NavLink to="/single-product">
            <div className="overlay">out of stock</div>
            <img src={img} alt={name} className="responsive-img" />
          </NavLink>
          <button type="button" className="btn">
            <img src={circleCart} alt="add to card" />
          </button>
        </div>
        <h2>{name}</h2>
        <div className="price">
          <span>{priceCurrency}</span>
          <span>{price}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-img">
        <NavLink to="/single-product">
          <img src={img} alt={name} className="responsive-img" />
        </NavLink>
        <button type="button" className="btn">
          <img src={circleCart} alt="add to card" />
        </button>
      </div>
      <h2>{name}</h2>
      <div className="price">
        <span>{priceCurrency}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  outOfStock: PropTypes.bool.isRequired,
};

export default Item;
