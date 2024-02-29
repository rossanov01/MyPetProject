import React, { useState } from "react";
import styles from './CoffeeItem.module.css';
import { CoffeenModal } from "../CoffeenModal/CoffeenModal";
import { v4 as uuidv4 } from 'uuid'
import { addToBasket } from "../../../Redux/coffee/coffeeSlice";
export const CoffeeItem = ({ el }) => {
    const initialCoffeeValue = {
        name: el.name,
        url: el.url,
        size: "0.2",
        cost: el.cost["0.2"],
        sugar: false,
        count: 1,
        sirop: "Без сиропа",
        id: uuidv4(),
    };
    const [coffee, setCoffee] = useState(initialCoffeeValue);
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
                    <button onClick={openModal}>Добавить</button>
                    <p>Это будет стоить: {coffee.cost * coffee.count}₽ </p>
                </div>
            </div>

            <CoffeenModal isOpen={isModalOpen} onClose={closeModal} coffee={coffee} setCoffee={setCoffee} el={el} initialCoffeeValue={initialCoffeeValue} />
        </div>
    );
};