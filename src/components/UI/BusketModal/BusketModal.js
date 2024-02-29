import React, { useRef, useEffect } from 'react';
import styles from './BusketModal.module.css';
import { useSelector } from 'react-redux';
import { BusketModalCake } from '../BusketModalCake/BusketModalCake';
import { BusketModalCoffee } from '../BusketModalCoffee/BusketModalCoffee';


export const BusketModal = ({ isOpen, closeModal }) => {
    const basket = useSelector((state) => state.coffee.basket);
    const total = useSelector((state) => state.coffee.total);

    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
            <div ref={modalRef} className={styles['modal-content']}>
                <span className={styles.close} onClick={closeModal}>
                    &times;
                </span>
                <h2 className={styles.h2}>Ваша корзина</h2>
                {basket?.length === 0 ? (
                    <p className={styles.p}>Корзина пуста</p>
                ) : (

                    <ul>
                        <h4>Всего с вас {total}₽</h4>
                        {basket.map((item, index) => (
                            item.hasOwnProperty("sirop") ?
                                <BusketModalCoffee item={item} index={index} /> :
                                <BusketModalCake item={item} index={index} />

                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};