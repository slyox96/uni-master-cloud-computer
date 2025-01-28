import React from "react";
import styles from "./ModifyProduct.module.scss"

import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";

type ModifyProductProps = {
    productId: number
}

const ModifyProduct: React.FC<ModifyProductProps> = ({productId}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button_edit}
        onClick={() => console.log(`edit ${productId}`)}
      >
        <img src={editIcon} alt="Edit"></img>
      </button>
      <button
        className={styles.button_delete}
        onClick={() => console.log(`delete ${productId}`)}
      >
        <img src={deleteIcon} alt="Delete"></img>
      </button>
    </div>
  );
};

export default ModifyProduct;
