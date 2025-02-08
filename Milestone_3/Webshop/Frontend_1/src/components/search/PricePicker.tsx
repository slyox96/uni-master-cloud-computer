import React, { useState } from 'react';
import styles from './PricePicker.module.scss';

const PricePicker: React.FC = () => {
    // States für Mindest- und Höchstpreis
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    // Handler für die Eingabefelder
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(e.target.value));
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value));
    };


    return (
        <div className={styles.pricePicker}>
            <input
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={handleMinPriceChange}
                min="0"
                step="1"
                className={styles.input}
            />

            <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                min="0"
                step="1"
                className={styles.input}
            />
            <button type='submit'>Filter</button>

        </div>
    );
};

export default PricePicker;
