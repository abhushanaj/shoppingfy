import React, { useState } from "react";
import { connect } from "react-redux";

import ShoppingCartHelper from "../../components/shopping-cart-helper/shopping-cart-helper.component";

import {
  selectShoppingCartName,
  selectShoppingCartDetails,
} from "../../redux/shopping-cart/shopping-cart.selectors";
import { setShoppingCartName } from "../../redux/shopping-cart/shopping-cart.actions";

import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item.component";

import pen from "../../asset/pen.svg";
import check from "../../asset/check.svg";
import cartillustration from "../../asset/cart-illustration.svg";

import "./shopping-cart.styles.scss";

const ShoppingCart = ({ shoppingCartName, setCartName, shoppingCartList }) => {
  const [toggleNameEdit, setToggleEdit] = useState(false);
  const imgSource = toggleNameEdit ? check : pen;

  return (
    <div className="shopping-group">
      <ShoppingCartHelper />

      <div className="group">
        <div className="group__upper">
          <div className="shopping__listname">
            {toggleNameEdit ? (
              <input
                type="text"
                name="shoppingListName"
                value={shoppingCartName}
                className="shoppingName"
                onChange={(e) => setCartName(e.target.value)}
              />
            ) : (
              <h3>{shoppingCartName} </h3>
            )}

            <img
              src={imgSource}
              alt="Pen"
              className="pen"
              onClick={() => setToggleEdit(!toggleNameEdit)}
            />
          </div>

          <div className="cart__lists">
            {shoppingCartList.map((list) => {
              return <ShoppingCartItem key={list.id} cartItem={list} />;
            })}
          </div>
        </div>
      </div>

      {/* If nothing is on cart display cart illustration , else display save cart option */}
      {!shoppingCartList.length ? (
        <>
          <p className="emptyMessage">Cart is Empty!</p>
          <div className="cart__illustration">
            <img src={cartillustration} alt="Cart Illustration" />
          </div>
        </>
      ) : (
        <div className="group__lower">
          <button
            className="btn btn--savecart"
            onClick={() => console.log("Clicked!")}
          >
            Save Cart
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingCartName: selectShoppingCartName(state),
    shoppingCartList: selectShoppingCartDetails(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCartName: (name) => dispatch(setShoppingCartName(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
