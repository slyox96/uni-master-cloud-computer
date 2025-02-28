import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.scss';
import CartPrice from './CartPrice';
import CartList from '../components/CartList';

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <div className={styles.container}>
        <CartList />
      </div>
      <div className={styles.buybar}>
        <CartPrice />
        <button onClick={handleCheckout}>Zur Kasse</button>
      </div>
    </>
  );
};
