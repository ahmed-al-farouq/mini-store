/* eslint-disable react/no-danger */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions';
import Attributes from './Attributes';

const Details = () => {
  const attributesValues = [];
  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  return (
    <div className="details">
      <h1 className="brand">{product.brand}</h1>
      <p className="name">{product.name}</p>
      <div className="attributes">
        <Attributes attributesValues={attributesValues} />
      </div>
      <div className="price">
        <span>Price:</span>
        <span>{ product.prices[0].currency.symbol + product.prices[0].amount }</span>
      </div>
      <button
        type="button"
        className="btn btn-add-cart"
        onClick={() => dispatch(addItemToCart(product.id, attributesValues))}
      >
        add to cart
      </button>
      <p className="desc" dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  );
};

export default Details;
