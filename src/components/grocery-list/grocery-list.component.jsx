import React, { useState } from "react";
import { connect } from "react-redux";

/* Child Components */
import GroceryStatusTag from "../grocery-status-tag/grocery-status-tag.component";

/* Assets*/
import calender from "../../asset/calender.svg";
import chevron from "../../asset/chevron-down.svg";

/* Actions */
import { setGroceryListStatus } from "../../redux/shopping-history/shopping-history.actions";

/* Utilities*/
import { displayDate } from "../../utils/date.utils";
import { getHistoryCartSummary } from "../../redux/shopping-history/shopping-history.utils";

/* Styling*/
import "./grocery-list.styles.scss";

const GroceryList = ({ cartDetails, setGroceryListStatus }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const { shoppingCartName, date, status, shoppingCartList, id } = cartDetails;

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
        <div
          className="dropdown__select"
          onClick={() =>
            setToggleDropDown((prevState) => {
              return !prevState;
            })
          }
        >
          <img src={chevron} alt="Chevron down icon" />
        </div>
        {toggleDropDown === false ? null : (
          <ul className="dropdown__menu">
            <li
              className="dropdown__option dropdown__option--completed"
              onClick={() => {
                setGroceryListStatus(id, "completed");
                setToggleDropDown((prevState) => !prevState);
              }}
            >
              Completed
            </li>
            <li
              className="dropdown__option dropdown__option--cancelled"
              onClick={() => {
                setGroceryListStatus(id, "cancelled");
                setToggleDropDown((prevState) => !prevState);
              }}
            >
              Cancelled
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGroceryListStatus: (id, status) =>
      dispatch(setGroceryListStatus(id, status)),
  };
};

export default connect(null, mapDispatchToProps)(GroceryList);
