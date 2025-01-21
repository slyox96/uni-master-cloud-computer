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

    // Funktion zur Validierung des Bereichs
    const isValidRange = minPrice <= maxPrice;

    return (
        <div className={styles.pricePicker}>
            <div className={styles.inputs}>
                <div className={styles.inputGroup}>
                    <label htmlFor="minPrice" className={styles.label}>
                        Min Price:
                    </label>
                    <input
                        type="number"
                        id="minPrice"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min="0"
                        step="1"
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="maxPrice" className={styles.label}>
                        Max Price:
                    </label>
                    <input
                        type="number"
                        id="maxPrice"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min="0"
                        step="1"
                        className={styles.input}
                    />
                </div>
            </div>

            {!isValidRange && (
                <p className={styles.error}>
                    The minimum price cannot be greater than the maximum price.
                </p>
            )}

            <div className={styles.result}>
                <p>Selected Price Range: {isValidRange ? `${minPrice} - ${maxPrice}` : 'Invalid Range'}</p>
            </div>
        </div>
    );
};

export default PricePicker;
