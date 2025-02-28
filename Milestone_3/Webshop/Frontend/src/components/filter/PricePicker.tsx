import React from 'react';
import styles from './PricePicker.module.scss';

type PricePickerProps = {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
};

const PricePicker: React.FC<PricePickerProps> = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => {
  return (
    <div className={styles.pricePicker}>
      <label>Price: </label>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => onMinPriceChange(Number(e.target.value))}
        min="0"
        step="1"
        className={styles.input}
      />
      <label> - </label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
        min="0"
        step="1"
        className={styles.input}
      />
    </div>
  );
};

export default PricePicker;
