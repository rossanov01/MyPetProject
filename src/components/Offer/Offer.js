import React from 'react';
import styles from './offer.module.css';

export const Offer = () => {
    return (
        <div className={styles.offer}>
            <div className={styles.offerTitle}>
                <h5>Мы предлагаем</h5>
                <h3>Наш вайбовый ассортимент</h3>
            </div>
            <div className={styles.offerContainer}>
                <div className={styles.offerItem}>
                    <img className={styles.offerImg} src='https://nescafe.ru/sites/default/files/flat-white.jpg' />
                    <div className={styles.offerUnderSign}>
                        <h4>Magic coffee</h4>
                        <p>"Напиток, который изменит вашу жизнь"</p>
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <img className={styles.offerImg} src='https://cheese-cake.ru/DesertImg/pirozhnoe-s-shokoladnym-mussom-0.jpg' />
                    <div className={styles.offerUnderSign}>
                        <h4>Magic cakes</h4>
                        <p>"Вкусняшки, которые снимают любое волнение"</p>
                    </div>
                </div>
            </div>

        </div >
    );
}