import React, { useEffect } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import styles from './CoffeenModal.module.css';
import { addToBasket } from "../../../Redux/coffee/coffeeSlice";
import { useDispatch } from "react-redux";

export const CoffeenModal = ({ isOpen, onClose, coffee, setCoffee, el, initialCoffeeValue }) => {

    const dispatch = useDispatch();
    const modalClassName = `${styles.modal} ${isOpen ? "" : styles.modalClosed}`;

    const handleSizeChange = (size) => {
        setCoffee({ ...coffee, size, cost: el.cost[size] });
    };

    const handleSiropChange = (event) => {
        setCoffee({ ...coffee, sirop: event.target.value });
    };

    const handleSugarChange = () => {
        setCoffee({ ...coffee, sugar: !coffee.sugar });
    };

    const handleCountChange = (count) => {
        setCoffee({ ...coffee, count });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const handleAddToBasket = () => {
        dispatch(addToBasket({ ...coffee, keyword: coffee.name + coffee.size + coffee.cost + coffee.sugar + coffee.sirop }));
        setCoffee(initialCoffeeValue)
        onClose();
    };

    return (
        <div>
            {isOpen && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={modalClassName}>
                        <div className={styles.closeButton} onClick={onClose}>&times;</div>
                        <div className={styles.options}>
                            <div className={styles.optionsMain}>
                                <div>
                                    <img className={styles.modalImg} src={el.url} alt="Coffee" />
                                    <h2>{el.name}</h2>
                                </div>
                                <div className={styles.optionItems}>
                                    <div>
                                        <h4>Выберите объем:</h4>
                                        <div>
                                            {Object.keys(el.cost).map((ml) => (
                                                <button
                                                    key={ml}
                                                    disabled={coffee.size === ml}
                                                    onClick={() => handleSizeChange(ml)}
                                                >
                                                    <CiCoffeeCup />
                                                    {ml * 1000}мл
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Выберите сироп:</h4>
                                        <select value={coffee.sirop} onChange={handleSiropChange}>
                                            {el.sirops.map((sirop) => (
                                                <option key={sirop}>{sirop}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.optionsContainer}>
                                        <h4>Добавить сахар?</h4>
                                        <input
                                            type="checkbox"
                                            checked={coffee.sugar}
                                            onChange={handleSugarChange}
                                        />
                                    </div>
                                    <div>
                                        <h4>Выберите количество:</h4>
                                        <div className={styles.optionsContainer}>
                                            <button className={styles.btnHandleCount}
                                                disabled={coffee.count === 1}
                                                onClick={() => handleCountChange(coffee.count - 1)}
                                            >
                                                -
                                            </button>
                                            <p>{coffee.count}</p>
                                            <button className={styles.btnHandleCount} onClick={() => handleCountChange(coffee.count + 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.optionsBuy}>
                                <p>Цена: {coffee.cost * coffee.count}₽</p>
                                <button
                                    className={styles.modalButton}
                                    onClick={() => handleAddToBasket()}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};