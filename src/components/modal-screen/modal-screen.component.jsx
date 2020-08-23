import React from "react";

import "./modal-screen.styles.scss";

import {
  YesActionButton,
  NoActionButton,
} from "../action-buttons/action-buttons.component";

const ModalScreen = ({ question, yesHandler, noHandler, callbacks }) => {
  return (
    <div className="modal__background">
      <div className="modal__content">
        <p>{question}</p>
        <div className="action__group">
          <YesActionButton actionFunction={yesHandler} callbacks={callbacks} />
          <NoActionButton actionFunction={noHandler} />
        </div>
      </div>
    </div>
  );
};

export default ModalScreen;
