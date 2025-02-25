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
    <div className={styles.dropdown} ref={dropdownRef}>
      <div
        className={styles.selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={styles.option}
              onClick={() => {
                setSelected(category.name);
                setIsOpen(false);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
