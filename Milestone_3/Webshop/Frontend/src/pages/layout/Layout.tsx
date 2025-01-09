import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { TopBar } from "../../components/TopBar";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <TopBar isAdmin={true}/>
      <div className={styles.main}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/A">Page A</a></li>
              <li><a href="/B">Page B</a></li>
            </ul>
          </nav>
        </aside>
        <section className={styles.content}>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;