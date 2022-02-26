import React from 'react';
import { useSelector } from 'react-redux';
import CartAttributes from '../navbar/cart/CartAttributes';
import ItemsCounter from '../navbar/cart/ItemsCounter';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <section className="cart-page">
      <div className="container">
        {
          cartItems.length
            ? (
              <>
                <h3 className="cart-title">
                  Cart
                </h3>
                <ul className="products unstyled-list flex flex-column align-center">
                  {
                    cartItems.map((item) => (
                      <li className="product flex" key={item.id}>
                        <div className="left-part flex flex-column justify-between">
                          <h3 className="product-brand">
                            {item.brand}
                          </h3>
                          <h4 className="product-name">
                            {item.name}
                          </h4>
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
    </section>
  );
};

export default CartPage;
