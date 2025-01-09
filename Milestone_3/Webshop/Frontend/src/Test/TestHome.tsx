import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestHome.module.scss"; // Importiere SCSS-Module

const TestHome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home_page}>
      <div className={styles.button_container}>
        <button
          onClick={() => navigate("/A")}
          className={styles.navigate_button}
        >
          Go to Page A
        </button>
        <button
          onClick={() => navigate("/B")}
          className={styles.navigate_button}
        >
          Go to Page B
        </button>
      </div>
    </div>
  );
};

export default TestHome;
