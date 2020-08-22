import React from "react";

/* Component */
import GroceryList from "../../components/grocery-list/grocery-list.component";

/* Asset */
import "./history-page.styles.scss";

const HistoryPage = () => {
  return (
    <main className="u-page historypage">
      <h1 className="page__name">
        Your <span>Shopping</span> History
      </h1>

      <div className="historypage__content">
        <p className="page__date">August 2020</p>
        <GroceryList />
      </div>
    </main>
  );
};

export default HistoryPage;
