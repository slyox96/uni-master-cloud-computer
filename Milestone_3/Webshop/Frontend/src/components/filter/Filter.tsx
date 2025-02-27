import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import styles from "./Filter.module.scss";
import PricePicker from './PricePicker';

const Filter = () => {
  // States für die ausgewählte Kategorie und Preiswerte
  const [selectedCategory, setSelectedCategory] = useState<string>("Bitte wählen");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  // REST-Call beim Klicken auf "Filter"
  const handleFilter = async () => {
    const queryParams = new URLSearchParams({
      category: selectedCategory,
      minPrice: minPrice.toString(),
      maxPrice: maxPrice.toString(),
    });
  
    // Einfach in ein Objekt umwandeln und loggen
    const queryObject = Object.fromEntries(queryParams.entries());
  
    console.log("Help:", queryObject);
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
