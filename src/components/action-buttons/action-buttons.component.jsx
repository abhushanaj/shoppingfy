import React from "react";

import "./action-buttons.styles.scss";

export const YesActionButton = ({ actionFunction, callbacks }) => {
  return (
    <div className="alert alert--success">
      <button
        class="btn btn--action btn--yes"
        onClick={() => {
          actionFunction();
          callbacks.forEach((callback) => {
            callback();
          });
        }}
      >
        Yes
      </button>
    </div>
  );
};

export const NoActionButton = ({ actionFunction }) => {
  return (
    <div className="alert alert--error">
      <button
        className="btn btn--action btn--no"
        onClick={() => actionFunction()}
      >
        No
      </button>
    </div>
  );
};
