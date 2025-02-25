import React from "react";
import styles from "./AddToCart.module.scss";
import { useStore } from "../../store/store";

type AddToCartProps = {
  productId: number;
};

const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {

  const { addToCart } = useStore();
  
  return (
    <div className={styles.add_to_cart}>
      <button className={styles.add} onClick={() => addToCart(productId)}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
