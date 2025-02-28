import React, { ReactNode } from "react";
import { Product } from "../types/Product";
import styles from "./ProductCard.module.scss";

import ProductPrice from "./ProductPrice";

// Hier die URL des Standardbildes einfügen
import defaultImage from "../assets/No_Image_Available.jpg"

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

  // Überprüfe, ob ein Bild vorhanden ist, andernfalls Standardbild verwenden
  const imageUrl = product.image || defaultImage;

  return (
    <div className={styles.card}>
      <img
        className={styles.product_image}
        src={imageUrl}
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
