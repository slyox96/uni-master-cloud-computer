import React, { useState } from 'react';
import { Category } from '../../types/Product';
import styles from './CategoryDropdown.module.scss';

const CategoryDropdown: React.FC = () => {
    
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.All);

    // Funktion zur Handhabung der Auswahländerung
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Category;
        setSelectedCategory(value);
    };

    return (
        <div >
            <select
                id="category"
                value={selectedCategory}
                onChange={handleChange}
                className={styles.select}
                defaultValue={'All'}
            >
                {Object.values(Category).map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
