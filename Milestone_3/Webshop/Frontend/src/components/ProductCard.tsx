import React, { ReactNode } from "react";
import { Product } from "../types/Product";
import styles from "./ProductCard.module.scss";

import { useStore } from "../store/store";


type ShopingCardProps = {
  product: Product;
  actionButtons: ReactNode
};

const ProductCard: React.FC<ShopingCardProps> = ({
  product,
  actionButtons
}) => {
  const { cart, addToCart } = useStore();

  const cartItem = cart.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  
  // const calculatedPrice = isInCart
  //   ? (product.price * quantity).toFixed(2)
  //   : product.price.toFixed(2);

  return (
    <div className={styles.card}>
      <img
        className={styles.product_image}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.information}>
        <div className={styles.title}>
          <span>
            <b>{product.name}</b>
          </span>
        </div>
        <div className={styles.description}>
          <p>{product.description}</p>
        </div>
        <div className={styles.buy}>
          {/* <span>
            <b>Price:</b> {calculatedPrice}$
          </span> */}
          <span>
           <b>Price:</b> 12
          </span>
          {actionButtons}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
