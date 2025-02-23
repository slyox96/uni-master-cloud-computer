import { useModalStore } from "../../hooks/useModalStore";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { isOpen, content, closeModal } = useModalStore();
  const modalRef = useRef<HTMLDialogElement>(null);

  // Steuerung des `dialog`-Elements
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={styles.modal} onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content_dialog}>
        <button onClick={closeModal} className={styles.dialogClose}>✕</button>
        {content}
      </div>
    </dialog>
  );
};

export default Modal;
