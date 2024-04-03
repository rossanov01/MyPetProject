import React, { useState } from 'react';
import styles from './MenuItem.module.css';

export const MenuItem = ({ el }) => {

    return (
        <div className={styles.menuItem}>
            <div>
                <h5>{el.name} {typeof el.cost !== "object" ? el.cost : el.cost["0.2"]}₽</h5>
                <img className={styles.MenuItemImg} src={el.url} />
            </div>

            <div><p>{el.title}</p></div>
        </div>

    );
};