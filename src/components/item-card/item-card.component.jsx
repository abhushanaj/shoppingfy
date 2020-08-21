import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/shopping-cart/shopping-cart.actions";

import plus from "../../asset/plus.svg";

import "./item-card.styles.scss";

const ItemCard = ({ itemDetails, addItemsToCart }) => {
  const { name } = itemDetails;
  return (
    <div className="item__card">
      <p>{name}</p>
      <span onClick={() => addItemsToCart(itemDetails)}>
        <img src={plus} alt="Plus Icon to add items to shopping list" />
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemsToCart: (item) => dispatch(addItemToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(ItemCard);
