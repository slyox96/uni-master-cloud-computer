import React, { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { Category } from "../../types/Product";

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Bitte wählen");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ['All', ...Object.values(Category)];

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
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
