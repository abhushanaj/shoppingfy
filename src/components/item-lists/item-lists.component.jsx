import React from "react";

import ItemCard from "../../components/item-card/item-card.component";

import "./item-lists.styles.scss";

const ItemLists = () => {
  return (
    <div className="itemlists">
      <h2 className="itemlists__category">Fruits and Vegetable</h2>
      <div className="itemlists__list">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default ItemLists;
