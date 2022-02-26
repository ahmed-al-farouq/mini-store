import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../../redux/actions';

const CurrenciesMenu = () => {
  const currencies = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  return (
    <ul className="list unstyled-list">
      {
        currencies.map((currency) => (
          <li key={currency.label}>
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(changeCurrency(currency.symbol))}
            >
              {`${currency.symbol} ${currency.label}`}
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default CurrenciesMenu;
