import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; React Coffee</p>
            <p><Link to="/contacts">Свяжитесь с нами</Link></p>
        </footer>
    );
}

