import React from 'react';
import { useSelector } from 'react-redux';

const CartItemsNum = () => {
  const cartItems = useSelector((state) => state.cart);
  const quantities = [];
  cartItems.map((item) => quantities.push(item.qty));
  const cartItemsNumber = quantities.reduce((cv, acc) => cv + acc, 0);
  if (cartItemsNumber >= 1) {
    return (
      <span className="cart-items-num">{cartItemsNumber}</span>
    );
  }
  return null;
};

export default CartItemsNum;
