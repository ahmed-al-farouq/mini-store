import React from 'react';
import { PropTypes } from 'prop-types';

const CartAttributes = ({ item }) => (
  <>
    {
        (item.selectedAttributes && item.selectedAttributes.length)
          ? item.attributes.map((attr) => (item.selectedAttributes.includes(attr.name) ? (
          // Display only if attributes name exist
            <>
              <span>
                {attr.name}
                :
              </span>
              <ul className="unstyled-list flex">
                {
                  // Display only selected attributes
                  attr.items.map((attr) => (item.selectedAttributes.includes(attr.value)
                    ? (
                      <li className="selected" key={`${attr.value}=${Math.random()}`}>
                        {attr.value}
                      </li>
                    )
                    : null))
                }
              </ul>
            </>
          ) : null))
          : null
      }
  </>
);

CartAttributes.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

export default CartAttributes;
