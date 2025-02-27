import React, { useEffect } from 'react'

import styles from "./Admin.module.scss";
import CategoryDropdown from '../components/filter/CategoryDropdown';
import { Dropdown } from '../components/filter/Dropdown';
import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';
import { useStore } from "../store/store";
import { useModalStore } from '../hooks/useModalStore';
import TestB from '../Test/TestB';
import CategoryList from '../components/CategoryList';
import ModifyItem from '../components/actionButtons/ModifyItem';
import ProductList from '../components/ProductList';
import { DeleteProductForm } from '../components/forms/DeleteProductForm';

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
    return <div>Loading products...</div>;
  }

  if (isLoadingCategories) {
    return <div>Loading categories...</div>;
  }


  return (
    <>
      <div className={styles.searchbar}>
        <button onClick={() => openModal(<TestB />)}>Modal</button>
        <CategoryDropdown />
        <Dropdown />
      </div>
      <div className={styles.container}>
        <div className={styles.categories}>
          <CategoryList />
        </div>
        <div className={styles.products}>
          <ProductList
            isInCart={false}
            actionButtons={(product) => <ModifyItem editForm={<DeleteProductForm product={product} />} deleteForm={<DeleteProductForm product={product} />}  />}
          />
        </div>

      </div>
    </>
  );
};
