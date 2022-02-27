import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartAttributes from './CartAttributes';
import ItemsCounter from './ItemsCounter';

const Cart = React.forwardRef((props, ref) => {
  const cartItems = useSelector((state) => state.cart);
  const quantities = [];
  const prices = [];
  cartItems.map((item) => quantities.push(item.qty));
  cartItems.map((item) => prices.push(item.prices[0].amount * item.qty));
  const cartItemsNumber = quantities.reduce((cv, acc) => cv + acc, 0);
  const total = prices.reduce((cv, acc) => cv + acc, 0);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const getCurrency = (prices) => prices.find((price) => price.currency.symbol === currentCurrency);

  return (
    <div className="cart" ref={ref}>
      {
        cartItems.length
          ? (
            <>
              <h3 className="cart-title">
                My Bag,
                <span>
                  {'  '}
                  {cartItemsNumber}
                  {'  '}
                  items
                </span>
              </h3>
              <ul className="products unstyled-list flex flex-column align-center">
                {
                  cartItems.map((item) => (
                    <li className="product flex" key={item.id}>
                      <div className="left-part flex flex-column justify-between">
                        <h3 className="product-name">
                          {item.name}
                        </h3>
                        <span className="price">
                          {getCurrency(item.prices).currency.symbol}
                          {getCurrency(item.prices).amount}
                        </span>
                        <div className="attributes">
                          <CartAttributes item={item} />
                        </div>
                      </div>
                      <div className="right-part flex">
                        <ItemsCounter id={item.id} qty={item.qty} />
                        <img src={item.gallery[0]} alt="product" />
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="total flex justify-between">
                <span>
                  Total
                </span>
                <span>
                  {currentCurrency}
                  {total.toFixed(2)}
                </span>
              </div>
              <div className="btns flex justify-evenly">
                <NavLink
                  to="/cart-page"
                  className="btn view-bag-btn"
                  onClick={props.toggleCart}
                >
                  View bag
                </NavLink>
                <button type="button" className="btn check-out-btn">
                  Check out
                </button>
              </div>
            </>
          )
          : (
            <>
              <h3 className="cart-title flex justify-center align-center">
                The bag is empty
              </h3>
            </>
          )
      }
    </div>
  );
});

Cart.displayName = 'Cart';
Cart.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Cart;
