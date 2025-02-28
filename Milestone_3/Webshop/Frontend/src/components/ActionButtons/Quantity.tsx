import React from "react";
import plus from "../../assets/plus-solid.svg";
import minus from "../../assets/minus-solid.svg";
import trash from "../../assets/trash-solid.svg";

import styles from './Quantity.module.scss';
import { useStore } from "../../store/store";

type QuantityProps = {
  productId: number;
};

const Quantity: React.FC<QuantityProps> = ({ productId }) => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useStore();

  const cartItem = cart.find((item) => item.productId === productId);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={styles.quantity_container}>
      {quantity === 1 ? (
        <button
          type="button"
          className={styles.quantity_button}
          onClick={() => removeFromCart(productId)}
        >
          <img src={trash} alt="Trash Icon" />
        </button>
      ) : (
        <button
          type="button"
          className={styles.quantity_button}
          onClick={() => decrementQuantity(productId)}
          disabled={quantity <= 0}
        >
          <img src={minus} alt="Minus Icon" />
        </button>
      )}
      <span className={styles.quantity_display}>{quantity}</span>
      <button
        type="button"
        onClick={() => incrementQuantity(productId)}
        className={styles.quantity_button}
      >
        <img src={plus} alt="Plus Icon" />
      </button>
    </div>
  );
};



export default Quantity;
