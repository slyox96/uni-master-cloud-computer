import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import { Drawer } from "../../components/Drawer";

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
    </div>

  );
};

export default Layout;