import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSingleProduct } from '../redux/actions';
import circleCart from '../img/circle-cart-icon.png';

const Item = ({
  id,
  img,
  name,
  price,
  priceCurrency,
  outOfStock,
}) => {
  const dispatch = useDispatch();
  if (outOfStock) {
    return (
      <div className="card out-of-stock">
        <div className="card-img">
          <NavLink
            to="/single-product"
            onClick={() => dispatch(fetchSingleProduct(id))}
          >
            <div className="overlay">out of stock</div>
            <img src={img} alt={name} className="responsive-img" />
            <button type="button" className="btn">
              <img src={circleCart} alt="add to card" />
            </button>
          </NavLink>
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
        <NavLink
          to="/single-product"
          onClick={() => dispatch(fetchSingleProduct(id))}
        >
          <img src={img} alt={name} className="responsive-img" />
          <button type="button" className="btn">
            <img src={circleCart} alt="add to card" />
          </button>
        </NavLink>
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
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  outOfStock: PropTypes.bool.isRequired,
};

export default Item;
