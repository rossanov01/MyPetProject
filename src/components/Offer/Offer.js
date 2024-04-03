import React from 'react';
import styles from './offer.module.css';
import { Link } from 'react-router-dom';

export const Offer = () => {
    return (
        <div className={styles.offer}>
            <div className={styles.container}>
                <div className={styles.offerTitle}>
                    <h4>Мы предлагаем</h4>
                    <h3>Наш вайбовый ассортимент</h3>
                </div>
                <div className={styles.offerContainer}>
                    <div className={styles.offerItem}>
                        <img className={styles.offerImg} src='https://nescafe.ru/sites/default/files/flat-white.jpg' />
                        <div className={styles.offerUnderSign}>
                            <Link to="/cakesCoffee"><h4>Magic coffee</h4></Link>
                            <p>"Напиток, который изменит вашу жизнь"</p>
                        </div>
                    </div>
                    <div className={styles.offerItem}>
                        <img className={styles.offerImg} src='https://cheese-cake.ru/DesertImg/pirozhnoe-s-shokoladnym-mussom-0.jpg' />
                        <div className={styles.offerUnderSign}>
                            <Link to="/cakesPrice"><h4>Magic cakes</h4></Link>
                            <p>"Вкусняшки, которые снимают любое волнение"</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}