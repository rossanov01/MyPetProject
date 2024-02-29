import React, { useState } from "react";
import styles from './CakeItem.module.css';
import { CakeModal } from "../CakeModal/CakeModal";
import { v4 as uuidv4 } from 'uuid'
export const CakeItem = ({ el }) => {
    const initialCakeValue = {
        name: el.name,
        url: el.url,
        cost: el.cost,
        count: 1,
        id: uuidv4(),
    };
    const [cake, setCake] = useState(initialCakeValue);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div key={el.id} className={styles.coffee}>
            <div className={styles.coffeeImage}>
                <img title="Самый быстрый и вкусный кофе только у нас!" width={"350px"} alt="Coffee" src={el.url} />
            </div>
            <div className={styles.cofContainer}>
                <div className={styles.coffeeInfo}>
                    <div>
                        <h4>{el.name}</h4>
                        <p>{el.title}</p>
                    </div>
                </div>
                <div className={styles.cofSelection}>
                    <button className={styles.cofSelectionBtn} onClick={openModal}>Добавить</button>
                    <p>Это будет стоить: {cake.cost * cake.count}₽ </p>
                </div>
            </div>

            <CakeModal isOpen={isModalOpen} onClose={closeModal} cake={cake} setCake={setCake} el={el} initialCakeValue={initialCakeValue} />
        </div>
    );
};