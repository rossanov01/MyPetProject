import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BusketModal.module.css';
import { BusketModalCoffee } from '../BusketModalCoffee/BusketModalCoffee';
import { submitOrder, clearBasket } from '../../../Redux/coffee/coffeeSlice';

export const BusketModal = ({ isOpen, closeModal }) => {
    const initialformData = {
        name: '',
        phone: '',
        index: "",
        house: "",
        floor: "",
        paymentOption: 'cash',
        comment: '',
        delivery: 'courier'
    }

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.coffee.basket);
    const total = useSelector((state) => state.coffee.total);
    const [formData, setFormData] = useState(initialformData);

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

    const handleSubmit = () => {
        const orderData = {
            basket,
            total,
            formData
        };
        dispatch(submitOrder(orderData))
            .unwrap()
            .then((data) => {
                console.log('Заказ успешно оформлен:', orderData);
                dispatch(clearBasket());
                closeModal();
            })
            .catch((error) => {
                console.error('Ошибка при оформлении заказа:', error);
            });
        setFormData(initialformData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
            <div ref={modalRef} className={styles['modal-content']}>
                <button className={styles.close} onClick={closeModal}>&times;</button>
                {basket?.length === 0 ? (
                    <div className={styles.busket}>
                        <h3>Ваша корзина пуста</h3>
                    </div>
                ) : (
                    <div className={styles.busket}>
                        <h3>Ваша корзина</h3>
                        <div>
                            {basket.map((item, index) => (
                                <BusketModalCoffee item={item} index={index} />
                            ))}
                        </div>
                        <h6 className={styles.totalSum}>Всего с вас {total}₽</h6>
                        <div className={styles.detailsOrder}>
                            <h6>Контактные данные</h6>
                            <input name="name" value={formData.name} onChange={handleChange} placeholder='Имя' />
                            <input name="phone" value={formData.phone} onChange={handleChange} placeholder='Телефон' />
                            <h6>Адрес</h6>
                            <input name="index" value={formData.index} onChange={handleChange} placeholder='Индекс' />
                            <input name="house" value={formData.house} onChange={handleChange} placeholder='Улицца,дом,квартира' />
                            <input name="floor" value={formData.floor} onChange={handleChange} placeholder='Подъезд,этаж,код домофона' />
                            <h6>Вариант Оплаты</h6>
                            <select name="paymentOption" value={formData.paymentOption} onChange={handleChange}>
                                <option value="cash">Оплата наличными</option>
                                <option value="card">Оплата картой</option>
                            </select>
                            <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder='Комментарий' ></textarea>
                            <div className={styles.delivery}>
                                <input type="radio" name="delivery" value="courier" checked={formData.delivery === 'courier'} onChange={handleChange} />
                                <p>Доставка курьером +150₽</p>
                            </div>
                            <div className={styles.totalAmount}>
                                <p>Сумма {total}₽</p>
                                <p>Доставка курьером 150₽</p>
                                <p>Итоговая сумма {total + 150}₽</p>
                            </div>
                        </div>
                        <button className={`${styles.orderButton} ${styles.submitButton}`} onClick={handleSubmit}>Оформить заказ</button>
                    </div>
                )}
            </div>
        </div>
    );
};