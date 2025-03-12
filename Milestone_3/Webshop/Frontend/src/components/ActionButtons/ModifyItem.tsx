import React, { ReactNode } from "react";
import styles from "./ModifyItem.module.scss";

import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { useModalStore } from "../../hooks/useModalStore";
import { Product, ProductForm } from "../forms/ProductForm";

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
        onClick={() => openModal(<ProductForm onSubmit={function (product: Omit<Product, "id" | "createdAt" | "updatedAt"> & { imageFile?: File; }): void {
          throw new Error("Function not implemented.");
        } } />)}
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
