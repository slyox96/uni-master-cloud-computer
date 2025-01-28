import styles from "./TestB.module.scss";

function TestB() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <ul>
          <li>
            <div className={styles.input_group}>
              <label>Lastname:</label>
              <input></input>

              <label>Firstname:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>Email:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>Country:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>State:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>Country:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>Zip Code</label>
              <input></input>

              <label>Adress:</label>
              <input></input>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default TestB;
