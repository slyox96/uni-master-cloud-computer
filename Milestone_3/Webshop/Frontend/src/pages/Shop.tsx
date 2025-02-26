import React, { useEffect } from "react";
import { useStore } from "../store/store";
import styles from "./Shop.module.scss";
import CategoryDropdown from "../components/search/CategoryDropdown";
import { Dropdown } from "../components/search/Dropdown";
import TestB from "../Test/TestB";
import AddToCart from "../components/ActionButtons/AddToCart";
import { useModalStore } from "../hooks/useModalStore";
import ProductList from "../components/ProductList";

export const Shop = () => {
  const { isLoadingProducts, error, fetchProducts } = useStore();

  const { openModal } = useModalStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoadingProducts) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <button onClick={() => openModal(<TestB />)}>Modal</button>
        <CategoryDropdown />
        <Dropdown />
      </div>
      <div className={styles.products}>
        <ProductList
          isInCart={false}
          actionButtons={(product) => <AddToCart productId={product.id} />}
        />
      </div>
    </div>
  );
};
