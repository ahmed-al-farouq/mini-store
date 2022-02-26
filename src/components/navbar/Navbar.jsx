import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/logo.png';
import cart from '../../img/empty-cart.png';
import MenuItems from './MenuItems';
import CurrenciesMenu from './CurrenciesMenu';
import CartItemsNum from './CartItemsNum';
import ToggleIcon from './ToggleIcon';
import Cart from './cart/Cart';

const Navbar = () => {
  const menuRef = useRef();
  const cartRef = useRef();
  const overlayRef = useRef();
  const toggleCart = () => {
    cartRef.current.classList.toggle('open');
    overlayRef.current.classList.toggle('d-none');
  };

  return (
    <header>
      <div
        className="content-overlay d-none"
        ref={overlayRef}
        role="button"
        label="overlay"
        tabIndex={0}
        onClick={toggleCart}
        onKeyDown={toggleCart}
      />
      <div className="container">
        <div className="flex align-center justify-between">
          <MenuItems ref={menuRef} />
          <div className="logo">
            <NavLink to="/" className="d-block">
              <img src={logo} alt="logo" className="responsive-img" />
            </NavLink>
          </div>
          <div className="right-part flex">
            <div className="currency-list">
              <span>
                $
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <CurrenciesMenu />
            </div>
            <button type="button" className="btn cart-icon" onClick={toggleCart}>
              <img src={cart} alt="cart" />
              <CartItemsNum />
            </button>
            <Cart ref={cartRef} />
          </div>
          <ToggleIcon menuRef={menuRef} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
