import React from "react";

import ItemCard from "../../components/item-card/item-card.component";

import "./item-lists.styles.scss";

const ItemLists = ({ listDetails }) => {
  const { categoryName, items } = listDetails;
  return (
    <div className="itemlists">
      <h2 className="itemlists__category">{categoryName}</h2>
      <div className="itemlists__list">
        {items.map((item) => {
          return <ItemCard key={item.id} itemDetails={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemLists;
