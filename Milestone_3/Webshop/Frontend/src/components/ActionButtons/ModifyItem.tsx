import React from "react";
import styles from "./ModifyItem.module.scss"

import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { useToastStore } from "../../hooks/useToastStore";

type ModifyItemProps = {
  ItemId: number
}

const ModifyItem: React.FC<ModifyItemProps> = ({ ItemId }) => {
  const { showToast } = useToastStore();


  return (
    <div className={styles.modify_container}>
      <button
        type="button"
        className={`${styles.button} ${styles.delete}`}
        onClick={() => {
          console.log(`edit ${ItemId}`);
          showToast("🎉 Erfolgreich gespeichert!");
        }
        }
      >
        <img src={editIcon} alt="Edit"></img>
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.edit}`}
        onClick={() => console.log(`delete ${ItemId}`)}
      >
        <img src={deleteIcon} alt="Delete"></img>
      </button>
    </div>
  );
};

export default ModifyItem;
