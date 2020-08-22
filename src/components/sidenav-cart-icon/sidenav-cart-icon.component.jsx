import React from "react";
import { connect } from "react-redux";

import { selectTotalCartCount } from "../../redux/shopping-cart/shopping-cart.selectors";

import cart from "../../asset/cart.svg";

import "./sidenav-cart-icon.styles.scss";

const CartIcon = ({ totalCartCount }) => {
  return (
    <div className="cart-box">
      <img src={cart} alt="Cart." />
      <span className="cart-count">{totalCartCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalCartCount: selectTotalCartCount(state),
  };
};
export default connect(mapStateToProps)(CartIcon);
