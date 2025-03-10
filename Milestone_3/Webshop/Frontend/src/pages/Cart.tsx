import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartPrice from './CartPrice';
import CartList from '../components/CartList';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <CartList />
      </div>
      <div className={styles.buybar}>
        <CartPrice />
        <button
        className={styles.checkout}
        onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};
