import React from "react";

/* Assets*/
import calender from "../../asset/calender.svg";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = ({ cartDetails }) => {
  const { shoppingCartName } = cartDetails;
  return (
    <div className="grocery__list">
      <div className="grocery__left">
        <p>{shoppingCartName}</p>
      </div>

      <div className="grocery__right">
        <div className="calender">
          <img src={calender} alt="Calender Icon" />
          <p>Mon, 27/08/2020</p>
        </div>

        <p className="status status--completed">Completed</p>
      </div>
    </div>
  );
};

export default GroceryList;
