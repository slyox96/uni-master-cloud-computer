import React from 'react';
import { useStore } from '../store/store';
import styles from './CartPrice.module.scss'; // CSS-Modul importieren

const CartPrice = () => {
  const { cart, products } = useStore();
  
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((product) => product.id === item.productId);
    const quantity = Number(item.quantity) || 0;
    return sum + product!.price * quantity;
  }, 0);
  
  return (
    <div className={styles.cartPriceContainer}>
      <label className={styles.totalPriceHeading}>Total Price: </label>
      <span className={styles.totalPrice}>{totalPrice.toFixed(2)}$</span>
    </div>
  );
}

export default CartPrice;
