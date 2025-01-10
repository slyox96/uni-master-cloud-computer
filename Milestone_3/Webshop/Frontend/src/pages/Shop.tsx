import React from 'react'

import styles from "./Shop.module.scss";
import ShopingCard from '../components/ShopingCard';

export const Shop = () => {
  return (
    <div className={styles.container}>
        <div className={styles.searchbar}>

        </div>
        <div className={styles.product_List}>
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
            <ShopingCard isInCart={false} />
        </div>
    </div>
  )
}
