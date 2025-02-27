import React, { useEffect } from "react";
import styles from "./CategoryList.module.scss";
import CategoryCard from "./CategoryCard";
import { Category } from "../types/Product";
import { useStore } from "../store/store";

const CategoryList: React.FC = () => {
  const { categories, isLoadingCategories } = useStore();

  return (
    <div className={styles.container}>
      {isLoadingCategories ? (
        <p>Loading categories...</p>
      ) : categories.length === 0 ? (
        <p>No categories available</p>
      ) : (
        <ul className={styles.category_list}>
          {categories.map((category: Category) => (
            <li key={category.id}>
              <CategoryCard key={category.id} category={category} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
