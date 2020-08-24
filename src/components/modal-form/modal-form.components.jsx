import React, { useState } from "react";

/* Asset*/
import foodImage from "../../asset/fruit.png";

/* Styling */
import "./modal-form.styles.scss";

const ModalForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const [itemNameError, setItemNameError] = useState(false);
  const [itemDescriptionError, setItemDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(itemName + itemDescription);
    setItemName("");
    setItemDescription("");
  };

  return (
    <div className="modalform__container">
      <div className="modalform">
        <form onSubmit={handleSubmit}>
          <div className="food__picture">
            <img src={foodImage} alt="Fruit basket." />
          </div>
          <div className="input__group">
            <label htmlFor="itemName">Enter Item Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              placeholder="Item Name"
              autoComplete="off"
              value={itemName}
              required
              onChange={(e) => {
                const { value } = e.target;
                setItemName(value);
                if (value.length >= 2) {
                  setItemNameError(false);
                } else {
                  setItemNameError(true);
                }
              }}
            />
            {itemNameError && <small>Don't leave the name empty!</small>}
          </div>

          <div className="input__group">
            <label htmlFor="itemDescription">Enter Item Description</label>
            <input
              type="text"
              id="itemDescription"
              name="itemDescription"
              placeholder="Describe the item"
              autoComplete="off"
              required
              value={itemDescription}
              onChange={(e) => {
                const { value } = e.target;
                setItemDescription(value);
                if (value.length >= 2) {
                  setItemDescriptionError(false);
                } else {
                  setItemDescriptionError(true);
                }
              }}
            />
            {itemDescriptionError && (
              <small>Don't leave the description empty!</small>
            )}
          </div>

          <button className="btn btn--submit">Put in Cart</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
