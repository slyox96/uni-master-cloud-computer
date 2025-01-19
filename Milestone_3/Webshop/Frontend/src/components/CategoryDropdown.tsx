import React, { useState } from 'react';
import { Category } from '../types/Product';
import styles from './CategoryDropdown.module.scss';

const CategoryDropdown: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Shirt);

    // Funktion zur Handhabung der Auswahländerung
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Category;
        setSelectedCategory(value);
    };

    return (
        <div >
            {/* <label htmlFor="category" className={styles.label}>
        Select Category:
      </label> */}
            <select
                id="category"
                value={selectedCategory}
                onChange={handleChange}
                className={styles.select}
            >
                <option key='All' value='All'>
                    All
                </option>
                {Object.values(Category).map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            {/* <div className={styles.selectedCategory}>
        <p>Selected Category: {selectedCategory}</p>
      </div> */}
        </div>
    );
};

export default CategoryDropdown;
