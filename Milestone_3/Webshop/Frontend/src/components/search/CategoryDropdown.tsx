import React, { useEffect, useState } from 'react';
import styles from './CategoryDropdown.module.scss';
import { useStore } from '../../store/store';
import { } from "../../types/Product";

const CategoryDropdown: React.FC = () => {
    const { categories, isLoadingCategories, error } = useStore();

    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedCategory(value);
    };

    if (isLoadingCategories) {
        return <div>Loading categories...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <select
                id="category"
                value={selectedCategory}
                onChange={handleChange}
                className={styles.select}
            >
                <option value="All">All</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
