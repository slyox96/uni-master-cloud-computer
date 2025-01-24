import styles from './TestB.module.scss';

function TestB() {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <ul>
          <li>
          <div className={styles.input_group}>
              <label>Field 1:</label>
              <input></input>
            </div>
          </li>
          <li>
            <div className={styles.input_group}>
              <label>Field 1:</label>
              <input></input>

              <label>Field 1:</label>
              <input></input>
            </div>
          </li>
        </ul>
      </form >
    </div>
  )
}

export default TestB