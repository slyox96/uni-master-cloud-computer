import React, { useEffect } from 'react'

import styles from "./Admin.module.scss";
import CategoryDropdown from '../components/search/CategoryDropdown';
import { Dropdown } from '../components/search/Dropdown';
import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';
import { useStore } from "../store/store";
import ModifyProduct from '../components/ActionButtons/ModifyProduct';
import { useModalStore } from '../hooks/useModalStore';
import TestB from '../Test/TestB';

export const Admin = () => {
  const {
    products,
    categories,
    isLoadingProducts,
    isLoadingCategories,
    error,
    fetchProducts,
    fetchCategories
  } = useStore();
  
  const { openModal } = useModalStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoadingProducts) {
    return <div>Loading products...</div>; // Custom loader for products
  }

  if (isLoadingCategories) {
    return <div>Loading categories...</div>; // Custom loader for categories
  }


  return (
    <>
      <div className={styles.searchbar}>
        <button onClick={() => openModal(<TestB />)}>Modal</button>
        <CategoryDropdown />
        <Dropdown />
      </div>
      <div className={styles.container}>
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

        {categories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          <div className={styles.category_List}>
            {categories.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
