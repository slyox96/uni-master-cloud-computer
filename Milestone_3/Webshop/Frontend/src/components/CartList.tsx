import React from 'react';
import { useStore } from '../store/store';
import { CartItem, Product } from '../types/Product';
import ProductCard from './ProductCard';
import styles from './CartList.module.scss';
import Quantity from './actionButtons/Quantity';

const CartList = () => {
  const { cart, products } = useStore();

  const getProductDetails = (productId: number): Product | undefined => {
    return products.find((product: Product) => product.id === productId);
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <ul className={styles.cart_list}>
          {cart.map((cartItem: CartItem) => {
            const product = getProductDetails(cartItem.productId);
            return product ? (
              <li key={cartItem.productId}>
                <ProductCard
                  product={product}
                  actionButtons={<Quantity productId={product.id} />}
                  isInCart={true}
                />
              </li>
            ) : (
              <p key={cartItem.productId}>Product not found</p>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CartList;
