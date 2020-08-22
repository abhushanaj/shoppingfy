import React from "react";

import "./modal-screen.styles.scss";

import {
  YesActionButton,
  NoActionButton,
} from "../action-buttons/action-buttons.component";

const ModalScreen = ({ children, question }) => {
  return (
    <div className="modal__background">
      <div className="modal__content">
        <p>{question}</p>
        <div className="action__group">
          <YesActionButton />
          <NoActionButton />
        </div>
      </div>
    </div>
  );
};

export default ModalScreen;
