import React from 'react';
import { Dropdown } from './Dropdown';
import styles from "./Filter.module.scss";
import PricePicker from './PricePicker';

const Filter = () => {
  return (
    <div className={styles.container}>
        <Dropdown />
        <PricePicker />
        <button className={styles.filterButton}>Filter</button>
    </div>
  );
};

export default Filter;
