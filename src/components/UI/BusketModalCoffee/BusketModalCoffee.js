import React from 'react';
import styles from './BusketModalCoffee.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { handleDeleteItem, handleQuantityChange } from '../../../Redux/coffee/coffeeSlice';

export const BusketModalCoffee = ({ item, index }) => {
    const dispatch = useDispatch();


    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.itemCoffee}>
                <img src={item.url} alt={item.name} />
                <div>
                    <h6>{item.name}</h6>
                    {item.sirop && <div>
                        <p className={styles?.feature}>Объём: {item?.size * 1000} мл</p>
                        <p className={styles?.feature}>Сироп: {item?.sirop === 'Без сиропа' ? 'б/с' : item.sirop.slice(0, 3)}.</p>
                        <p className={styles?.feature}>Сахар: {item?.sugar ? "✔" : 'X'}</p>
                    </div>}
                </div>
            </div>
            <div className={styles.quanitity}>
                <div>
                    <div>
                        <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count - 1 }))}>-</button>
                        <p>{item.count}</p>
                        <button onClick={() => dispatch(handleQuantityChange({ index, count: item.count + 1 }))}>+</button>
                    </div>
                </div>
                <p>{item.cost * item.count}₽</p>
                <button className={styles.deleteIcon} onClick={() => dispatch(handleDeleteItem(item.id))}>&times;</button>
            </div>

        </div>
    );
};