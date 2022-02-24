import React from 'react';
import { useSelector } from 'react-redux';

const CurrenciesMenu = () => {
  const currencies = useSelector((state) => state.currencies);

  return (
    <ul className="list unstyled-list">
      {
        currencies.map((currency) => (
          <li key={currency.label}>
            {`${currency.symbol} ${currency.label}`}
          </li>
        ))
      }
    </ul>
  );
};

export default CurrenciesMenu;
