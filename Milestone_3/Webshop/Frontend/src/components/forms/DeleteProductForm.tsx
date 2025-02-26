import React from 'react';
import styles from './DeleteProductForm.module.scss';
import { Product } from '../../types/Product';
import { useToastStore } from '../../hooks/useToastStore';

type DeleteProductFormProps = {
    product: Product;
};

export const DeleteProductForm: React.FC<DeleteProductFormProps> = ({ product }) => {
    const { showToast } = useToastStore();
    return (
        <div className={styles.deleteForm}>
            <button
                type="button"
                className={styles.buttonCancel}
                onClick={() => showToast(`${product.name} wurde gelöscht`, 3000)}>
                Cancel
            </button>
            <button type="button" className={styles.buttonDelete}>
                Delete
            </button>
        </div>
    );
};
