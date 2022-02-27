import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const Attributes = ({
  attributesValues,
  attributesNames,
}) => {
  let attrs = attributesValues;
  let names = attributesNames;
  const product = useSelector((state) => state.singleProduct);

  const selectAttribute = (e, attrValue, attrName) => {
    if (attrs.includes(attrValue)) {
      attrs = attrs.filter((attr) => attr !== attrValue);
      names = names.filter((name) => name !== attrName);
      return e.target.parentElement.classList.remove('selected');
    }
    names.push(attrName);
    attrs.push(attrValue);
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
  attributesNames: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ])).isRequired,
  attributesValues: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ])).isRequired,
};

export default Attributes;
