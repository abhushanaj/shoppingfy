import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  reduceCartItem,
} from "../../redux/shopping-cart/shopping-cart.actions";

import trashcan from "../../asset/trashcan.svg";

import "./shopping-cart-item.styles.scss";

const ShoppingCartItem = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  reduceCartItem,
}) => {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item">
      <p className="item-name">{name}</p>
      <div className="cart-item__details">
        <div
          className="tag-box trash"
          onClick={() => removeItemFromCart(cartItem)}
        >
          <img src={trashcan} alt="Trashcan Icon" />
        </div>
        <div
          className="tag-box reduce"
          onClick={() => reduceCartItem(cartItem)}
        >
          &#8211;
        </div>
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
    reduceCartItem: (item) => dispatch(reduceCartItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(ShoppingCartItem);
