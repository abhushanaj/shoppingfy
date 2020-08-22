import React from "react";

import "./action-buttons.styles.scss";

export const YesActionButton = () => {
  return (
    <div className="alert alert--success">
      <button class="btn btn--action btn--yes">Yes</button>
    </div>
  );
};

export const NoActionButton = ({ alertMessage }) => {
  return (
    <div className="alert alert--error">
      <button className="btn btn--action btn--no">No</button>
    </div>
  );
};
