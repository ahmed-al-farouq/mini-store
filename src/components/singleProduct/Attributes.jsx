import React from 'react';
import { useSelector } from 'react-redux';

const Attributes = () => {
  const product = useSelector((state) => state.singleProduct);

  return (
    <>
      {
        product.attributes.length ? product.attributes.map((attr) => (
          <div className="attribute" key={`${product.id} ${Math.random() * 200}`}>
            <span>
              {attr.name}
              {' :'}
            </span>
            <ul className="unstyled-list flex flex-wrap">
              {
                attr.items.map((item) => (
                  <li
                    key={`${product.id}--${Math.random() * 10000}`}
                  >
                    <button
                      type="button"
                      className="btn"
                    >
                      {item.value}
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
          : null
      }
    </>
  );
};

export default Attributes;
