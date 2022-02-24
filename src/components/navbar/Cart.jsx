import React from 'react';
import { useSelector } from 'react-redux';
import product from '../../img/product.png';

const Cart = React.forwardRef((props, ref) => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="cart" ref={ref}>
      <h3 className="cart-title">
        My Bag.
        <span> 2 items</span>
      </h3>
      <ul className="products unstyled-list flex flex-column align-center">
        <li className="product flex">
          <div className="left-part flex flex-column justify-between">
            <h3 className="product-name">
              Apollo Running Short
            </h3>
            <span className="price">
              $50.00
            </span>
            <ul className="attributes unstyled-list flex">
              <li>s</li>
              <li>m</li>
            </ul>
          </div>
          <div className="right-part flex">
            <div className="items-counter flex flex-column justify-between align-center">
              <button type="button" className="btn">+</button>
              <span>1</span>
              <button type="button" className="btn">-</button>
            </div>
            <img src={product} alt="product" />
          </div>
        </li>
        <li className="product flex">
          <div className="left-part flex flex-column justify-between">
            <h3 className="product-name">
              Apollo Running Short
            </h3>
            <span className="price">
              $50.00
            </span>
            <ul className="attributes unstyled-list flex">
              <li>s</li>
              <li>m</li>
            </ul>
          </div>
          <div className="right-part flex">
            <div className="items-counter flex flex-column justify-between align-center">
              <button type="button" className="btn">+</button>
              <span>1</span>
              <button type="button" className="btn">-</button>
            </div>
            <img src={product} alt="product" />
          </div>
        </li>
      </ul>
      <div className="total flex justify-between">
        <span>
          Total
        </span>
        <span>
          $100.00
        </span>
      </div>
      <div className="btns flex justify-evenly">
        <button type="button" className="btn view-bag-btn">
          View bag
        </button>
        <button type="button" className="btn check-out-btn">
          Check out
        </button>
      </div>
    </div>
  );
});

Cart.displayName = 'Cart';
export default Cart;
