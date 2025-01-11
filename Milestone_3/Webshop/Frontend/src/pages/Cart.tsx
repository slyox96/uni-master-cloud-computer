import React from 'react'

import styles from "./Cart.module.scss";
import ShopingCard from '../components/ShopingCard';

export const Cart = () => {
  return (
    <>
      <div className={styles.product_List}>
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
        <ShopingCard isInCart={true} />
      </div>
      <div className={styles.buybar}>

      </div>
    </>
  )
}
