import React from 'react';
import styles from './BusketModalCoffee.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { handleDeleteItem, handleQuantityChange } from '../../../Redux/coffee/coffeeSlice';

export const BusketModalCoffee = ({ item, index }) => {
    const dispatch = useDispatch();


    return (
        <li key={item.id} className={styles.item}>
            <div className={styles.itemCoffee}>
                <img src={item.url} alt={item.name} />
                <div>
                    <h7>{item.name}</h7>
                    <p>Объём: {item.size * 1000} мл</p>
                    <p>Сироп: {item.sirop}</p>
                    <p>Сахар: {item.sugar ? 'Добавлен' : 'Не добавлен'}</p>
                </div>
            </div>
            <div className={styles.quanitity}>
                Количество:
                <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count - 1 }))}>-</button>
                <span>{item.count}</span>
                <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count + 1 }))}>+</button>
                <span>С вас: {item.cost * item.count}₽</span>
            </div>
            <button className={styles.deleteIcon} onClick={() => dispatch(handleDeleteItem(item.id))}>&times;</button>

        </li>
    );
};