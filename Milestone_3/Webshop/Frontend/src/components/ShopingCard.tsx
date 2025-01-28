import React from 'react';
import { Product } from '../types/Product';
import styles from './ShopingCard.module.scss';

import Quantity from './Quantity';
import { useStore } from '../store/store';
import ModifyProduct from './ModifyProduct';
import AddToCart from './AddToCard';

type ShopingCardProps = {
  product: Product;
  isInCart: boolean;
};

const ShopingCard: React.FC<ShopingCardProps> = ({ product, isInCart }) => {
  const { cart, addToCart } = useStore();

  const cartItem = cart.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const calculatedPrice = isInCart 
    ? (product.price * quantity).toFixed(2) 
    : product.price.toFixed(2);

  return (
    <div className={styles.card}>
      <img className={styles.product_image} src={product.image} alt={product.name} />
      <div className={styles.information}>
        <div className={styles.title}>
          <span><b>{product.name}</b></span>
        </div>
        <div className={styles.description}>
          <p>{product.description}</p>
        </div>
        <div className={styles.buy}>
          <span>
            <b>Price:</b> {calculatedPrice}$
          </span>
          {!isInCart ? (
            <button
              className={styles.add}
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
            // <AddToCart productId={product.id} />
            // <ModifyProduct productId={product.id}/>
          ) : (
            <Quantity productId={product.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopingCard;
