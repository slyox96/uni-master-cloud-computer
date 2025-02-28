import React from "react";
import styles from "./AddToCart.module.scss";
import { useStore } from "../../store/store";
import { useToastStore } from "../../hooks/useToastStore";

type AddToCartProps = {
  productId: number;
};
const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  const { products, addToCart } = useStore();
  const { showToast } = useToastStore();

  const handleAddToCart = () => {
    addToCart(productId);
    showToast(`"${products.find((item) => productId === item.id)?.name}" added to cart`, 3000)
  };

  return (

    <button className={styles.add} onClick={handleAddToCart}>
      Add to Cart
    </button>

  );
};

export default AddToCart;
