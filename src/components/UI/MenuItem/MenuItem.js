import React from 'react';
import styles from './MenuItem.module.css';

export const MenuItem = ({ el }) => {
    return (
        <div className={styles.menuItem}>
            <div className={styles.menuItemAside}>
                <div className={styles.menuItemTitle}>
                    <h5>{el.name}</h5>
                    <p>{el.title}</p>
                </div>
                <h5>{typeof el.cost !== "object" ? el.cost : el.cost["0.2"]}₽</h5>
            </div>
            <img className={styles.MenuItemImg} src={el.url} />

        </div>
    );
};