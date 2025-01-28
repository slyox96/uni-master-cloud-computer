import React from "react";
import styles from "./AddToCart.module.scss";

type AddToCartProps = {
  productId: number;
};

const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  return (
    <div className={styles.add_to_cart}>
      <button className={styles.add} onClick={() => addToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
