import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

    return (
        <div className={styles.navigation}>
            <ul>
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
        </div>
    );
};