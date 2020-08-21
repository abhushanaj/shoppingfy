import React from "react";

import ItemLists from "../../components/item-lists/item-lists.component";

import "./home-page.styles.scss";

const HomePage = () => {
  return (
    <main className="u-page homepage">
      <h1 className="heading">
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go.
      </h1>
      <ItemLists />
      <ItemLists />
      <ItemLists />
      <ItemLists />
      <ItemLists />
      <ItemLists />
    </main>
  );
};

export default HomePage;
