import React from 'react';
import { PropTypes } from 'prop-types';

const CartAttributes = ({ item }) => (
  <ul className="attributes unstyled-list flex">
    {
      (item.selectedAttributes && item.selectedAttributes.length)
        ? item.selectedAttributes.map((attr) => (
          <li key={attr.value}>
            {attr.value}
          </li>
        ))
        : null
    }
  </ul>
);

CartAttributes.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

export default CartAttributes;
