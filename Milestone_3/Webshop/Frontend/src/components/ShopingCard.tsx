import React from 'react'
import styles from './ShopingCard.module.scss';

import minus from "../assets/minus-solid.svg"
import Quantity from './Quantity';

type ShopingCard = {
    isInCart: boolean;
  };

const ShopingCard: React.FC<ShopingCard> = ({isInCart}) => {
    return (
        <div className={styles.card}>
            <img className={styles.product_image} src={minus} alt="Minus Icon" />
            <div className={styles.information}>
                <div className={styles.title}>
                    <span><b>Item</b></span>
                </div>
                <div className={styles.description}>
                    <p>etdoloreet dolore dolore et aliquyam dolore magna aliquyam aliquyam aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor </p>
                </div>
                <div className={styles.buy}>
                    <span><b>Price:</b> 12$</span>
                    {!isInCart && <button className={styles.add}>Add to Cart</button>}
                    {isInCart && <Quantity />}
                </div>
            </div>
        </div>
    )
}

export default ShopingCard