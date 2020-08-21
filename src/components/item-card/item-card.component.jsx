import React from "react";

import plus from "../../asset/plus.svg";

import "./item-card.styles.scss";

const ItemCard = ({ itemDetails }) => {
  const { name } = itemDetails;
  return (
    <div className="item__card">
      <p>{name}</p>
      <span>
        <img src={plus} alt="Plus Icon to add items to shopping list" />
      </span>
    </div>
  );
};

export default ItemCard;
