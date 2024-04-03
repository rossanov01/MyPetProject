import React from 'react';
import styles from './BusketModalCake.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { handleDeleteItem, handleQuantityChange } from '../../../Redux/coffee/coffeeSlice';

export const BusketModalCake = ({ item, index }) => {
    const dispatch = useDispatch();

    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.itemCake}>
                <img src={item.url} alt={item.name} />
                <h6>{item.name}</h6>
            </div>

            <div className={styles.itemUseButtons}>
                <div className={styles.quanitity}>
                    <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count - 1 }))}>-</button>
                    <p>{item.count}</p>
                    <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count + 1 }))}>+</button>
                </div>
                <p>{item.cost * item.count}₽</p>
                <button className={styles.deleteIcon} onClick={() => dispatch(handleDeleteItem(item.id))}>&times;</button>
            </div>

        </div>
    );
};