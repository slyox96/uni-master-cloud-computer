import React from 'react'
import { Product } from '../types/Product';
import styles from './ShopingCard.module.scss';

import minus from "../assets/minus-solid.svg"
import Quantity from './Quantity';

type ShopingCard = {
    product: Product
    isInCart: boolean;
  };

const ShopingCard: React.FC<ShopingCard> = ({product, isInCart}) => {
    return (
        <div className={styles.card}>
            <img className={styles.product_image} src={minus} alt="Minus Icon" />
            <div className={styles.information}>
                <div className={styles.title}>
                    <span><b>{product.name}</b></span>
                </div>
                <div className={styles.description}>
                    <p>{product.description}</p>
                </div>
                <div className={styles.buy}>
                    <span><b>Price:</b> {product.price}$</span>
                    {!isInCart && <button className={styles.add}>Add to Cart</button>}
                    {isInCart && <Quantity />}
                </div>
            </div>
        </div>
    )
}

export default ShopingCard