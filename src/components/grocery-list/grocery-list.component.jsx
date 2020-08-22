import React from "react";

/* Assets*/
import calender from "../../asset/calender.svg";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = () => {
  return (
    <div className="grocery__list">
      <div className="grocery__left">
        <p>Shopping List Name</p>
      </div>

      <div className="grocery__right">
        <div className="calender">
          <img src={calender} alt="Calender Icon" />
          <p>Mon, 27/08/2020</p>
        </div>

        <p className="status status--success">Completed</p>
      </div>
    </div>
  );
};

export default GroceryList;
