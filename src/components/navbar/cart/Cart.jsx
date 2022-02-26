import React from 'react';
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
                          {item.prices[0].currency.symbol}
                          {item.prices[0].amount}
                        </span>
                        <CartAttributes item={item} />
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
                  $
                  {total.toFixed(2)}
                </span>
              </div>
              <div className="btns flex justify-evenly">
                <NavLink to="/cart-page" className="btn view-bag-btn">
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
export default Cart;
