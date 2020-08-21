import React from "react";

import plus from "../../asset/plus.svg";

import "./item-card.styles.scss";

const ItemCard = ({ name, description, image }) => {
  return (
    <div className="item__card">
      <p>Avocado</p>
      <span>
        <img src={plus} alt="Plus Icon to add items to shopping list" />
      </span>
    </div>
  );
};

export default ItemCard;
