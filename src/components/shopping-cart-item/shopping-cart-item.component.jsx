import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/shopping-cart/shopping-cart.actions";

import trashcan from "../../asset/trashcan.svg";

import "./shopping-cart-item.styles.scss";

const ShoppingCartItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item">
      <p className="item-name">{name}</p>
      <div className="cart-item__details">
        <div
          className="tag-box trash"
          onClick={() => {
            console.log("Cliked");
            removeItemFromCart(cartItem);
          }}
        >
          <img src={trashcan} alt="Trashcan Icon" />
        </div>
        <div className="tag-box reduce">&#8211;</div>
        <div className="tag-box quantity">{quantity} pcs</div>
        <div className="tag-box add" onClick={() => addItemToCart(cartItem)}>
          &#43;
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(ShoppingCartItem);
