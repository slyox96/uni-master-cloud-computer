import React, { ReactNode } from "react";
import { Product } from "../types/Product";
import styles from "./ProductCard.module.scss";

import ProductPrice from "./ProductPrice";


type ProductCardProps = {
  product: Product,
  isInCart: boolean,
  actionButtons: ReactNode
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  actionButtons,
  isInCart  
}) => {

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
        <div className={styles.actions}>
          <ProductPrice product={product} isInCart={isInCart} />
          {actionButtons}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
