import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./TopBar.module.scss";

interface TopBarProps {
    isAdmin: boolean
}

export const TopBar: React.FC<TopBarProps> = ({isAdmin}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.topbar}>
            <div className={styles.left}>
                <h1>Webshop</h1>
            </div>
            {isAdmin && (
                <div className={styles.right}>
                    {/* <button
                        type="button"
                        className="button"
                        onClick={() => console.log("click")}
                    >
                        button
                    </button> */}
                </div>
            )}
        </div>
    );
};
