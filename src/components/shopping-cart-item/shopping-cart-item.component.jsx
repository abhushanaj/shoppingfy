import React from "react";

import trashcan from "../../asset/trashcan.svg";

import "./shopping-cart-item.styles.scss";

const ShoppingCartItem = ({ cartItem }) => {
  const { name } = cartItem;
  return (
    <div className="cart-item">
      <p className="item-name">{name}</p>
      <div className="cart-item__details">
        <div className="tag-box trash">
          <img src={trashcan} alt="Trashcan Icon" />
        </div>
        <div className="tag-box reduce">&#8211;</div>
        <div className="tag-box quantity">3 pcs</div>
        <div className="tag-box add">&#43;</div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
