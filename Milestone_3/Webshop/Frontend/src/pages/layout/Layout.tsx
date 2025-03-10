import React from "react";
import { Outlet } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import Toast from "../../components/Ui/Toast";
import { Drawer } from "../../components/Ui/Drawer";
import { TopBar } from "../../components/Ui/TopBar";
import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.root}>
      <TopBar
        isAdmin={true}
      />
      <Drawer />
      <div className={styles.content_container}>
        <Outlet />
      </div>
      <Modal />
      <Toast />
    </div>

  );
};

export default Layout;