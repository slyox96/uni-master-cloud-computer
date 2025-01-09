import React, { useState } from "react";

import plus from "../assets/plus-solid.svg";
import minus from "../assets/minus-solid.svg"

import styles from './Quantity.module.scss';
const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.quantity_container}>
      <button 
        type="button" 
        onClick={decrement} 
        className={styles.quantity_button}
      >
        <img src={minus} alt="Minus Icon" />
      </button>
      <span className={styles.quantity_display}>{quantity}</span>
      <button
        type="button" 
        onClick={increment} 
        className={styles.quantity_button}
      >
       <img src={plus} alt="Plus Icon" />
      </button>
    </div>
  );
};

export default Quantity;
