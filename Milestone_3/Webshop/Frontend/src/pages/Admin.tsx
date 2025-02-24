import React, { useEffect } from 'react'

import styles from "./Admin.module.scss";
import CategoryDropdown from '../components/search/CategoryDropdown';
import { Dropdown } from '../components/search/Dropdown';
import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';
import TestB from '../Test/TestB';
import { useStore } from "../store/store";
import ModifyProduct from '../components/ModifyProduct';

export const Admin = () => {
  const { products, isLoading, error, fetchProducts } = useStore();


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={styles.searchbar}>
        {/* <button onClick={(e) => openModal(e)}>Modal</button> */}
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
              actionButtons={<ModifyProduct productId={product.id} />}
              isInCart={false} />
          ))}
        </div>
      )}
    </>
  )
}
