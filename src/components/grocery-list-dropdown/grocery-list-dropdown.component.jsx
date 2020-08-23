import React from "react";

import "./grocery-list-dropdown.styles.scss";

const GroceryListDropDown = () => {
  return (
    <ul className="dropdown__menu">
      <li className="dropdown__option dropdown__option--completed">
        Completed
      </li>
      <li className="dropdown__option dropdown__option--cancelled">
        Cancelled
      </li>
    </ul>
  );
};

export default GroceryListDropDown;
