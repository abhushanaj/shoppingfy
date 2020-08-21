import React from "react";
import { connect } from "react-redux";

import ItemLists from "../../components/item-lists/item-lists.component";

import { selectShoppingList } from "../../redux/shopping-items/shopping-items.selectors";

import "./home-page.styles.scss";

const HomePage = ({ shoppingList }) => {
  return (
    <main className="u-page homepage">
      <h1 className="heading">
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go.
      </h1>

      {shoppingList.map((list) => {
        return <ItemLists key={list.id} listDetails={list} />;
      })}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingList: selectShoppingList(state),
  };
};

export default connect(mapStateToProps)(HomePage);
