import React, { useEffect } from 'react'

import { useStore } from '../store/store';
import { Product } from '../types/Product';

import styles from "./Shop.module.scss";
import ShopingCard from '../components/ShopingCard';

export const Shop = () => {
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
            </div>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                <div className={styles.product_List}>
                    {products.map((product: Product) => (
                        <ShopingCard
                            key={product.id}
                            product={product}
                            isInCart={false}
                        />
                    ))}
                </div>
            )}
        </>
    )
}
