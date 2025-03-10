import React, { useEffect } from "react";
import { useStore } from "../store/store";
import styles from "./Shop.module.scss";
import AddToCart from "../components/actionButtons/AddToCart";
import { useModalStore } from "../hooks/useModalStore";
import ProductList from "../components/ProductList";
import Filter from "../components/filter/Filter";

export const Shop = () => {
  const { isLoadingProducts, error, fetchProducts, fetchCategories } = useStore();

  const { openModal } = useModalStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  if (isLoadingProducts) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <Filter />
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
