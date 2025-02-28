import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/ui/TopBar";
import { Drawer } from "../../components/ui/Drawer";

import styles from "./Layout.module.scss";
import Modal from "../../components/Modal/Modal";
import Toast from "../../components/ui/Toast";

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