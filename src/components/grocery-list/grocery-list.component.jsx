import React from "react";

/* Child Components */
import GroceryStatusTag from "../grocery-status-tag/grocery-status-tag.component";

/* Assets*/
import calender from "../../asset/calender.svg";

/* Utilities*/
import { displayDate } from "../../utils/date.utils";
import { getHistoryCartSummary } from "../../redux/shopping-history/shopping-history.utils";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = ({ cartDetails }) => {
  const { shoppingCartName, date, status, shoppingCartList } = cartDetails;
  return (
    <div className="grocery__list">
      <div className="grocery__left">
        <p>{shoppingCartName}</p>
      </div>

      <p className="shopping-summary">
        {`${getHistoryCartSummary(shoppingCartList)} Items`}
      </p>
      <div className="grocery__right">
        <div className="calender">
          <img src={calender} alt="Calender Icon" />
          <p>{displayDate(date)}</p>
        </div>

        <GroceryStatusTag status={status} />
      </div>
    </div>
  );
};

export default GroceryList;
