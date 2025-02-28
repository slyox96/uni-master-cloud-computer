import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import styles from "./Filter.module.scss";
import PricePicker from './PricePicker';
import { useFilterStore } from '../../hooks/useFilterStore';
import { Category } from '../../types/Product'; // Importiere den Category-Typ

const Filter = () => {
  const { setFilterOptions } = useFilterStore();
  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: 'All' });
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleFilter = async () => {
    setFilterOptions({
      selectedCategory,
      minPrice,
      maxPrice,
    });

    const queryParams = new URLSearchParams({
      category: selectedCategory.name,
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
    });

    const filteredProducts = Object.fromEntries(queryParams.entries());
    // console.log("filteredProducts: ", filteredProducts);
  };

  return (
    <div className={styles.container}>
      <Dropdown selected={selectedCategory} onSelect={setSelectedCategory} />
      <PricePicker minPrice={minPrice} maxPrice={maxPrice} onMinPriceChange={setMinPrice} onMaxPriceChange={setMaxPrice} />
      <button className={styles.filterButton} onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;

