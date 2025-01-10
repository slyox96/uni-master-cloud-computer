import styles from './Drawer.module.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface Route {
    id: number;
    text: string;
    route: string;
}

export const Drawer: React.FC = () => {
    const navigate = useNavigate();

    const routes: Route[] = [
        { id: 1, text: 'Shop', route: 'Shop' },
        { id: 2, text: 'Admin', route: 'Admin' },
    ];

    return (
        <nav>
            <ul className={styles.drawerList}>
                {routes.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => navigate(item.route)} 
                        className={styles.drawerItem}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
