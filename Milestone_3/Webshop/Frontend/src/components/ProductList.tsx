import React, { ReactNode } from 'react';
import { useStore } from '../store/store';
import { Product } from "../types/Product";
import ProductCard from './ProductCard';
import { useFilterStore } from '../hooks/useFilterStore';

import styles from "./ProductList.module.scss";

type ProductListProps = {
  isInCart: boolean;
  actionButtons: (product: Product) => ReactNode;
};

const ProductList: React.FC<ProductListProps> = ({ isInCart, actionButtons }) => {
  const { products, isLoadingProducts } = useStore();
  const { filterOptions } = useFilterStore();
  
  const filteredProducts = products.filter((product) => {
    return product.price >= filterOptions.minPrice &&
           product.price <= filterOptions.maxPrice &&
           (filterOptions.selectedCategory.id === -1 || product.category === filterOptions.selectedCategory.id);
  });

  return (
    <div className={styles.container}>
      {isLoadingProducts ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul className={styles.product_list}>
          {filteredProducts.map((product: Product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                actionButtons={actionButtons(product)}
                isInCart={isInCart}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
