import React, { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { useStore } from "../../store/store";
import { Category } from "../../types/Product"; // Importiere das Category-Interface

type DropdownProps = {
  selected: Category; // selected ist nun ein Category-Objekt
  onSelect: (category: Category) => void; // onSelect erwartet ein Category-Objekt
};

export const Dropdown: React.FC<DropdownProps> = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, isLoadingCategories, error } = useStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoadingCategories) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="categoryDropdown" className={styles.label}>Category:</label>
      <div className={styles.dropdown} ref={dropdownRef} role="combobox">
        <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
          {selected.name} {/* Zeige den Namen der ausgewählten Kategorie an */}
        </div>
        {isOpen && (
          <ul className={styles.options}>
            <li
              className={styles.option}
              onClick={() => { onSelect({ id: 0, name: "All" }); setIsOpen(false); }}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                className={styles.option}
                onClick={() => { onSelect(category); setIsOpen(false); }}
              >
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
