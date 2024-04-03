import React from 'react';
import styles from './Contacts.module.css';
import { PeopleSay } from '../../components/PeopleSay/PeopleSay';

export const Contacts = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <h3>Контакты</h3>
                    <p>Для связи с нами используйте следующую информацию:</p>
                    <div className={styles.contactInfo}>
                        <p><strong>Email:</strong> example@example.com</p>
                        <p><strong>Телефон:</strong> +7 (123) 456-7890</p>
                        <p><strong>Адрес:</strong> ул. Случайная, д. 123</p>
                    </div>
                </div>
            </div>
            <PeopleSay />
        </div>
    );
}

