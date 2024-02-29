import React from 'react';
import styles from './BusketModalCake.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { handleDeleteItem, handleQuantityChange } from '../../../Redux/coffee/coffeeSlice';

export const BusketModalCake = ({ item, index }) => {
    const dispatch = useDispatch();

    return (
        <li key={item.id} className={styles.item}>
            <div className={styles.itemCake}>
                <img src={item.url} alt={item.name} />
                <h7>{item.name}</h7>
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