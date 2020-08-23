import React from "react";

/* Assets*/
import calender from "../../asset/calender.svg";

/* Utilities*/
import { displayDate } from "../../utils/date.utils";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = ({ cartDetails }) => {
  const { shoppingCartName, date } = cartDetails;
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

        <p className="status status--completed">Completed</p>
      </div>
    </div>
  );
};

export default GroceryList;
