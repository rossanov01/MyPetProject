import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navigation}>
            <ul className={`${styles.menuDropdown} ${isOpen ? styles.active : ''}`}>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about-us">О нас</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                    <Link to="/coffeePrice">Кофе</Link>
                </li>
                <li>
                    <Link to="/cakesPrice">Вкусняшки</Link>
                </li>
            </ul>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={styles.burgerIcon}>&#9776;</div>
            </div>
        </div>
    );
};