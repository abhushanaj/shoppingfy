import React from "react";
import { connect } from "react-redux";

/* Component */
import GroceryList from "../../components/grocery-list/grocery-list.component";

/* <Selectors*/
import { selectCartHistoryDetails } from "../../redux/shopping-history/shopping-history.selectors";

/* Styling */
import "./history-page.styles.scss";

const HistoryPage = ({ cartHistoryDetails }) => {
  return (
    <main className="u-page historypage">
      <h1 className="page__name">
        Your <span>Shopping</span> History
      </h1>

      <div className="historypage__content">
        {/* <p className="page__date">August 2020</p> */}

        {cartHistoryDetails.map((cartHistory, index) => {
          return <GroceryList key={index} cartDetails={cartHistory} />;
        })}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    cartHistoryDetails: selectCartHistoryDetails(state),
  };
};

export default connect(mapStateToProps)(HistoryPage);
