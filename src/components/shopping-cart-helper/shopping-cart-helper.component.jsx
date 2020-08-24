import React from "react";

/* Child Components*/
import ModalForm from "../modal-form/modal-form.components";

/* Asset*/
import bottleImg from "../../asset/source.svg";

/*Styling*/
import "./shopping-cart-helper.styles.scss";

const ShoppingCartHelper = () => {
  return (
    <>
      <ModalForm />
      <div className="addItems__helper">
        <img src={bottleImg} alt="A wine bottle." className="bottle" />

        <p>Don't find what you need!?</p>

        <button className="btn btn--add">Add Item</button>
      </div>
    </>
  );
};

export default ShoppingCartHelper;
