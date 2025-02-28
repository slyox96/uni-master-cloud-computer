import React from 'react'
import { Category } from '../types/Product';
import styles from "./CategoryCard.module.scss";
import ModifyItem from './actionButtons/ModifyItem';
import { DeleteProductForm } from './forms/DeleteProductForm';
import DeleteCategoryForm from './forms/DeleteCategoryForm';

type CategoryCard = {
    category: Category
};

const CategoryCard: React.FC<CategoryCard> = ({ category }) => {
    return (
        <div className={styles.card}>
            <b>{category.name}</b>
            <ModifyItem editForm={<DeleteCategoryForm category={category} />} deleteForm={<DeleteCategoryForm category={category} />}  />
        </div>
    )
}

export default CategoryCard