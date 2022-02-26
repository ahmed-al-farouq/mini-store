import React from 'react';
import { useSelector } from 'react-redux';
import CartAttributes from '../navbar/cart/CartAttributes';
import ItemsCounter from '../navbar/cart/ItemsCounter';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const currentCurrency = useSelector((state) => state.currentCurrency);
  const getCurrency = (prices) => prices.find((price) => price.currency.symbol === currentCurrency);

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
                            price=
                            {getCurrency(item.prices).amount}
                            priceCurrency=
                            {getCurrency(item.prices).currency.symbol}
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
