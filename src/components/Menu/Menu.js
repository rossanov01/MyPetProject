import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import { MenuItem } from '../UI/MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const data = useSelector((state) => state.coffee.data)
    const arrCoffee = data.coffee || [];
    const arrCakes = data.cakes || [];

    const mergedArray = [...arrCoffee, ...arrCakes];


    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.menuTitie}>
                    <h3>Меню нашей магической кофейни</h3>
                    <p>Все сделано с душой</p>
                </div>
                <div className={styles.menuContainer}>

                    <div className={styles.menuContainerItem}>
                        <div className={styles.menuContainerScroll}>
                            {mergedArray.map(el => (
                                <MenuItem el={el} key={el.id} />
                            ))}
                        </div>
                        <Link to="/coffeePrice"><button className={styles.menuBtn}>Пора за вкусняшками</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}