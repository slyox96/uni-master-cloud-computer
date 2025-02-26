import React, { ReactNode } from 'react'
import styles from "./ProductList.module.scss";
import { useStore } from '../store/store';
import { Product } from "../types/Product";
import ProductCard from './ProductCard';

type ProductListProps = {
    isInCart: boolean;
    actionButtons: (product: Product) => ReactNode;
};

const ProductList: React.FC<ProductListProps> = ({ isInCart, actionButtons }) => {
    const { products, isLoadingProducts } = useStore();

    return (
        <div className={styles.container}>
            {isLoadingProducts ? (
                <p>Loading products...</p>
            ) : products.length === 0 ? (
                <p>No products available</p>
            ) : (
                <ul className={styles.product_list}>
                    {products.map((product: Product) => (
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
