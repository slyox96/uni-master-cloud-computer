import React from 'react'
import styles from './DeleteForm.module.scss';
import { Category } from '../../types/Product';
import { useToastStore } from '../../hooks/useToastStore';

type DeleteCategoryFormProps = {
    category: Category;
};

const DeleteCategoryForm: React.FC<DeleteCategoryFormProps> = ({category}) => {
    const { showToast } = useToastStore();
    return (
        <div className={styles.deleteForm}>
            <button
                type="button"
                className={styles.buttonCancel}
                onClick={() => showToast(`${category.name} wurde gelöscht`, 3000)}>
                Cancel
            </button>
            <button type="button" className={styles.buttonDelete}>
                Delete
            </button>
        </div>
    );
}

export default DeleteCategoryForm