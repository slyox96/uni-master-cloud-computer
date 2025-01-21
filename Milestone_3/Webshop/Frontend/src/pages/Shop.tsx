import React, { ReactElement, useEffect, useRef, useState } from 'react'

import { useStore } from '../store/store';
import { Product } from '../types/Product';

import styles from "./Shop.module.scss";
import ShopingCard from '../components/ShopingCard';
import { Modal } from '../components/Modal';
import { toggleModal } from '../util/toggleModal';
import CategoryDropdown from '../components/CategoryDropdown';
import PricePicker from '../components/PricePicker';

export const Shop = () => {
    const { products, isLoading, error, fetchProducts } = useStore();
    const [modalContent, setModalContent] = useState<ReactElement | null>(null);

    const ModalRef = useRef(null);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // const handlePriceChange = (minPrice: number, maxPrice: number) => {
    //     console.log(`Min price: ${minPrice}, Max price: ${maxPrice}`);
    // }

    const openModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalContent(
            <div>
                
            </div>
        );
        toggleModal(ModalRef);
    }



    return (
        <>
            <Modal ref={ModalRef}
            >
                <div>
                    {modalContent}
                </div>
            </Modal>
            <div className={styles.searchbar}>
                <button onClick={(e) => openModal(e)}>Modal</button>
                <CategoryDropdown />
                <PricePicker />
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
