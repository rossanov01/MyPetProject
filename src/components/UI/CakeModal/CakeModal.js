import React, { useEffect } from "react";
import styles from './CakeModal.module.css';
import { addToBasket } from "../../../Redux/coffee/coffeeSlice";
import { useDispatch } from "react-redux";

export const CakeModal = ({ isOpen, onClose, cake, setCake, el, initialCakeValue }) => {

    const dispatch = useDispatch();
    const modalClassName = `${styles.modal} ${isOpen ? "" : styles.modalClosed}`;

    const handleCountChange = (count) => {
        setCake({ ...cake, count });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const handleAddToBasket = () => {
        dispatch(addToBasket({ ...cake, keyword: cake.name + cake.size + cake.cost + cake.sugar + cake.sirop }));
        setCake(initialCakeValue)
        onClose();
    };
    useEffect(() => {
        const handleScroll = () => {
            onClose();
        };

        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, onClose]);


    return (
        <div>
            {isOpen && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={modalClassName}>
                        <div className={styles.modalContent}>
                            <h2>{el.name}</h2>
                            <img className={styles.modalImg} src={el.url} alt="Coffee" />
                        </div>
                        <div className={styles.options}>
                            <h4>Выберите количество:</h4>
                            <div className={styles.optionsContainer}>
                                <button className={styles.btnHandleCount}
                                    disabled={cake.count === 1}
                                    onClick={() => handleCountChange(cake.count - 1)}
                                >
                                    -
                                </button>
                                <p>{cake.count}</p>
                                <button className={styles.btnHandleCount} onClick={() => handleCountChange(cake.count + 1)}>
                                    +
                                </button>

                            </div>
                            <p>Цена: {cake.cost * cake.count}₽</p>
                            <button
                                className={styles.modalButton}
                                onClick={() => handleAddToBasket()}
                            >
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};