import React from 'react';

const Details = () => (
  <div className="details">
    <h1 className="brand">Brand</h1>
    <p className="name">name</p>
    <div className="attributes">
      <span>
        Sizes:
      </span>
      <ul className="unstyled-list flex">
        <li className="disabled">S</li>
        <li className="selected">M</li>
        <li>L</li>
      </ul>
    </div>
    <div className="price">
      <span>Price:</span>
      <span>$500</span>
    </div>
    <button type="button" className="btn btn-add-cart">
      add to cart
    </button>
    <p className="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nostrum doloremque reprehenderit vel illum, sunt similique dicta.
      Reprehenderit quaerat nihil et nostrum amet quidem, optio numquam excepturi,
      quibusdam dolorem ad error?
    </p>
  </div>
);

export default Details;
