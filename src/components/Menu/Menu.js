import React from 'react';
import styles from './Menu.module.css';
import { MenuItem } from '../UI/MenuItem/MenuItem';
import { useSelector } from 'react-redux';

export const Menu = () => {
    const data = useSelector((state) => state.coffee.data)
    const arrCoffee = data.coffee?.slice(0, 3) || [];
    const arrCakes = data.cakes?.slice(0, 3) || [];
    return (
        <div className={styles.menu}>
            <div className={styles.menuTitie}>
                <h3>Меню нашей магической кофейни</h3>
                <p>Все сделано с душой</p>
            </div>
            <div className={styles.menuContainer}>
                <div>
                    {arrCoffee.map(el =>
                        <MenuItem el={el} key={el.id} />
                    )}
                </div>
                <div>
                    {arrCakes.map(el =>
                        <MenuItem el={el} key={el.id} />
                    )}
                </div>
            </div>
            <button className={styles.menuBtn}>Все вкусняшки</button>
        </div>
    );
}