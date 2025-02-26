import React from 'react'
import { Category } from '../types/Product';
import styles from "./CategoryCard.module.scss";
import ModifyItem from './ActionButtons/ModifyItem';

type CategoryCard = {
    category: Category
};

const CategoryCard: React.FC<CategoryCard> = ({ category }) => {
    return (
        <div className={styles.card}>
            <b>{category.name}</b>
            <ModifyItem ItemId={category.id} />
        </div>
    )
}

export default CategoryCard