import React from "react";

import bottleImg from "../../asset/source.svg";

import "./shopping-cart-helper.styles.scss";

const ShoppingCartHelper = () => {
  return (
    <div className="addItems__helper">
      <img src={bottleImg} alt="A wine bottle." className="bottle" />

      <p>Don't find what you need!?</p>

      <button className="btn btn--add">Add Item</button>
    </div>
  );
};

export default ShoppingCartHelper;
