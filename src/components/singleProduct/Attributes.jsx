import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const Attributes = ({
  attributesValues,
}) => {
  let attrs = attributesValues;
  const product = useSelector((state) => state.singleProduct);

  const selectAttribute = (e, attrValue, attrName) => {
    if (attrs.includes({ value: attrValue, name: attrName })) {
      attrs = attrs.filter((attr) => attr.value !== attrValue);
      return e.target.parentElement.classList.remove('selected');
    }
    attrs.push({ value: attrValue, name: attrName });
    return e.target.parentElement.classList.add('selected');
  };

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
                      onClick={(e) => selectAttribute(e, item.value, attr.name)}
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

Attributes.propTypes = {
  attributesValues: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ])).isRequired,
};

export default Attributes;
