import React from 'react';
import ProptTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increaseNumOfItems, decreaseNumOfItems } from '../../../redux/actions';

const ItemsCounter = ({ qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="items-counter flex flex-column justify-between align-center">
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(increaseNumOfItems(qty))}
      >
        +
      </button>
      <span>{qty}</span>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(decreaseNumOfItems(qty))}
      >
        -
      </button>
    </div>
  );
};

ItemsCounter.propTypes = {
  qty: ProptTypes.number.isRequired,
};

export default ItemsCounter;
