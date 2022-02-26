import React from 'react';
import ProptTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../../redux/actions';

const ItemsCounter = ({ id, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="items-counter flex flex-column justify-between align-center">
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(increaseQuantity(id, qty))}
      >
        +
      </button>
      <span>{qty}</span>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(decreaseQuantity(id, qty))}
      >
        -
      </button>
    </div>
  );
};

ItemsCounter.propTypes = {
  id: ProptTypes.string.isRequired,
  qty: ProptTypes.number.isRequired,
};

export default ItemsCounter;
