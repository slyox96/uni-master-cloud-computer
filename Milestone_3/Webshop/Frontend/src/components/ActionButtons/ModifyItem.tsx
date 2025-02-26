import React, { ReactNode } from "react";
import styles from "./ModifyItem.module.scss";

import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { useModalStore } from "../../hooks/useModalStore";

type ModifyItemProps = {
  editForm: ReactNode;
  deleteForm: ReactNode;
};

const ModifyItem: React.FC<ModifyItemProps> = ({ editForm, deleteForm }) => {
  const { openModal } = useModalStore();

  return (
    <div className={styles.modify_container}>
      <button
        type="button"
        className={`${styles.button} ${styles.edit}`}
        onClick={() => openModal(editForm)}
      >
        <img src={editIcon} alt="Edit" />
      </button>

      <button
        type="button"
        className={`${styles.button} ${styles.delete}`}
        onClick={() => openModal(deleteForm)}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
};

export default ModifyItem;
