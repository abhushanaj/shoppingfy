import React from "react";

/* Child Components */
import GroceryStatusTag from "../grocery-status-tag/grocery-status-tag.component";

/* Assets*/
import calender from "../../asset/calender.svg";

/* Utilities*/
import { displayDate } from "../../utils/date.utils";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = ({ cartDetails }) => {
  const { shoppingCartName, date, status } = cartDetails;
  return (
    <div className="grocery__list">
      <div className="grocery__left">
        <p>{shoppingCartName}</p>
      </div>

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
