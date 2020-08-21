import React, { useState } from "react";
import { connect } from "react-redux";

import ShoppingCartHelper from "../../components/shopping-cart-helper/shopping-cart-helper.component";

import { selectShoppingCartName } from "../../redux/shopping-cart/shopping-cart.selectors";
import { setShoppingCartName } from "../../redux/shopping-cart/shopping-cart.actions";

import pen from "../../asset/pen.svg";
import check from "../../asset/check.svg";

import "./shopping-cart.styles.scss";

const ShoppingCart = ({ shoppingCartName, setCartName }) => {
  const [toggleNameEdit, setToggleEdit] = useState(false);
  const imgSource = toggleNameEdit ? check : pen;

  return (
    <div className="shopping-group">
      <ShoppingCartHelper />

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingCartName: selectShoppingCartName(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCartName: (name) => dispatch(setShoppingCartName(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
