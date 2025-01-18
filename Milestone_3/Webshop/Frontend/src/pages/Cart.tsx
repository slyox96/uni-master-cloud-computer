import styles from "./Cart.module.scss";
import ShopingCard from '../components/ShopingCard';
import { useStore } from '../store/store';
import { Product, CartItem } from '../types/Product';

export const Cart = () => {
  const { cart, products } = useStore();

  const getProductDetails = (productId: number): Product | undefined => {
    return products.find((product: Product) => product.id === productId);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className={styles.product_List}>
          {cart.map((cartItem: CartItem) => {
            const product = getProductDetails(cartItem.productId);
            return product ? (
              <ShopingCard
                key={product.id}
                product={product}
                isInCart={true}
              />
            ) : (
              <p key={cartItem.productId}>Product not found</p>
            );
          })}
        </div>
      )}
      <div className={styles.buybar}>

      </div>
    </>
  );
};
