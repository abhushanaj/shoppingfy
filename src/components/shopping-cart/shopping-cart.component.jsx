import React, { useState } from "react";
import { connect } from "react-redux";

/* Child Components */
import ShoppingCartHelper from "../../components/shopping-cart-helper/shopping-cart-helper.component";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item.component";
import ModalScreen from "../modal-screen/modal-screen.component";

/* Selectors */
import {
  selectShoppingCartName,
  selectShoppingCartDetails,
} from "../../redux/shopping-cart/shopping-cart.selectors";

/* Actions */
import {
  setShoppingCartName,
  clearCart,
} from "../../redux/shopping-cart/shopping-cart.actions";

import { saveCartToHistory } from "../../redux/shopping-history/shopping-history.actions";

/* Assests */
import pen from "../../asset/pen.svg";
import check from "../../asset/check.svg";
import cartillustration from "../../asset/cart-illustration.svg";

/* Styling */
import "./shopping-cart.styles.scss";

const ShoppingCart = ({
  shoppingCartName,
  setCartName,
  shoppingCartList,
  saveCartToHistory,
  clearCart,
}) => {
  const [toggleNameEdit, setToggleEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const imgSource = toggleNameEdit ? check : pen;

  return (
    <>
      {showModal && (
        <ModalScreen
          question="Do you wish to save the cart?"
          yesHandler={() =>
            saveCartToHistory({
              date: new Date(),
              status: "pending",
              shoppingCartName,
              shoppingCartList,
            })
          }
          noHandler={() => setShowModal(false)}
          callbacks={[
            () => clearCart(),
            () => setShowModal(false),
            () => setCartName("Shopping List"),
          ]}
        />
      )}

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
              onClick={() => {
                setShowModal(true);
              }}
            >
              Save Cart
            </button>
          </div>
        )}
      </div>
    </>
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
    saveCartToHistory: (cart) => dispatch(saveCartToHistory(cart)),
    clearCart: () => dispatch(clearCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
