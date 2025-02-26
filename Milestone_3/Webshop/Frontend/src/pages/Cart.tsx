import styles from "./Cart.module.scss";
import CartPrice from "./CartPrice";
import CartList from "../components/CartList";

export const Cart = () => {

  return (
    <>
      <div className={styles.container}>
        <CartList />
      </div>
      <div className={styles.buybar}>
        <CartPrice />
        <button>Klick</button>
      </div>
    </>
  );
};
