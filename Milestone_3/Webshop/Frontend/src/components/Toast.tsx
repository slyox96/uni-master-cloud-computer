import { useToastStore } from "../hooks/useToastStore";
import styles from "./Toast.module.scss";
import { useEffect } from "react";

const Toast = () => {
  const { message, isVisible, hideToast } = useToastStore();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(hideToast, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hideToast]);

  return (
    <div className={`${styles.toast} ${isVisible ? styles.show : ""}`} onClick={hideToast}>
      {message}
    </div>
  );
};

export default Toast;
