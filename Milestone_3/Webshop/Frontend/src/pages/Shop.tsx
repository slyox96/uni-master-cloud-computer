import React, { useEffect } from "react";
import { useStore } from "../store/store";
import { Product } from "../types/Product";
import styles from "./Shop.module.scss";
import ProductCard from "../components/ProductCard";
import CategoryDropdown from "../components/search/CategoryDropdown";
import { Dropdown } from "../components/search/Dropdown";
import TestB from "../Test/TestB";
import AddToCart from "../components/ActionButtons/AddToCard";
import { useModalStore } from "../hooks/useModalStore";

export const Shop = () => {
  const { products, isLoadingProducts, error, fetchProducts } = useStore(); // Verwenden des isLoadingProducts

  const { openModal } = useModalStore();

  // Produkte beim Laden der Seite holen
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Ladeanzeige anzeigen, wenn Produkte geladen werden
  if (isLoadingProducts) {
    return <div>Loading products...</div>; // Anpassbare Ladeanzeige für Produkte
  }

  // Fehleranzeige, falls es einen Fehler beim Abrufen gibt
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={styles.searchbar}>
        <button onClick={() => openModal(<TestB />)}>Modal</button>
        <CategoryDropdown />
        <Dropdown />
      </div>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className={styles.product_List}>
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              actionButtons={<AddToCart productId={product.id} />}
              isInCart={false}
            />
          ))}
        </div>
      )}
    </>
  );
};
