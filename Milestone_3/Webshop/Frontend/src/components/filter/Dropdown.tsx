import React, { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { useStore } from "../../store/store";

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Bitte wählen");

  const { categories, isLoadingCategories, error } = useStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoadingCategories) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="categoryDropdown" className={styles.label}>
        Category:
      </label>
      <div
        className={styles.dropdown}
        ref={dropdownRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div
          className={styles.selected}
          onClick={() => setIsOpen((prev) => !prev)}
          tabIndex={0} // Ermöglicht Fokus für Tastaturnavigation
          id="categoryDropdown"
        >
          {selected}
        </div>
        {isOpen && (
          <ul className={styles.options} role="listbox">
            {categories.map((category) => (
              <li
                key={category.id}
                className={styles.option}
                onClick={() => {
                  setSelected(category.name);
                  setIsOpen(false);
                }}
                role="option"
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
