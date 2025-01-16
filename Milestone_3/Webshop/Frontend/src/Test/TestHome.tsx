import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestHome.module.scss"; // Importiere SCSS-Module

const TestHome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home_page}>
      <div className={styles.button_container}>
        <button
          onClick={() => navigate("/Shop")}
          className={styles.navigate_button}
        >
          Go to Webshop
        </button>
        <button
          onClick={() => navigate("/TestA")}
          className={styles.navigate_button}
        >
          Go to Test A
        </button>
        <button
          onClick={() => navigate("/TestB")}
          className={styles.navigate_button}
        >
          Go to Test B
        </button>
      </div>
    </div>
  );
};

export default TestHome;
