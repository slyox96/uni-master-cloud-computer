import React from "react";
import styles from "./AddressInformation.module.scss";

const AddressInformation = ({ data, onChange }: any) => {
  return (
    <form className={styles.form}>
      <ul>
        <li>
          <div className={styles.input_group}>
            <label>Last Name:</label>
            <input name="lastname" value={data.lastname} onChange={onChange} />
            <label>First Name:</label>
            <input name="firstname" value={data.firstname} onChange={onChange} />
          </div>
        </li>
        <li>
          <div className={styles.input_group}>
            <label>Email:</label>
            <input name="email" type="email" value={data.email} onChange={onChange} />
          </div>
        </li>
        <li>
          <div className={styles.input_group}>
            <label>Country:</label>
            <input name="country" value={data.country} onChange={onChange} />
          </div>
        </li>
        <li>
          <div className={styles.input_group}>
            <label>State/Province:</label>
            <input name="state" value={data.state} onChange={onChange} />
          </div>
        </li>
        <li>
          <div className={styles.input_group}>
            <label>Zip Code:</label>
            <input name="zip" value={data.zip} onChange={onChange} />
            <label>Address:</label>
            <input name="address" value={data.address} onChange={onChange} />
          </div>
        </li>
      </ul>
    </form>
  );
};

export default AddressInformation;
