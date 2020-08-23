import React from "react";

import "./grocery-status-tag.styles.scss";

const mapStatusToClass = (status) => {
  const statusClasses = {
    completed: "status status--completed",
    pending: "status status--pending",
    cancelled: "status status--cancelled",
  };
  return statusClasses[status];
};

const GroceryStatusTag = ({ status }) => {
  return <p className={mapStatusToClass(status)}>{status}</p>;
};

export default GroceryStatusTag;
