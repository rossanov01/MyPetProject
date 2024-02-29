import React, { useState, useEffect, useRef } from 'react';
import styles from './AddCommentModal.module.css';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../Redux/coffee/coffeeSlice';
import moment from 'moment';

export const AddCommentModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [nameError, setNameError] = useState(false);
    const [textError, setTextError] = useState(false);
    const [ratingError, setRatingError] = useState(false);
    const modalRef = useRef(null);

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleMouseOver = (value) => {
        setRating(value);
    };

    const getCurrentDateTime = () => {
        return moment().toISOString();
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        const handleClick = (event) => {
            handleClickOutside(event);
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [closeModal]);

    const handleSubmit = () => {
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!text) {
            setTextError(true);
        } else {
            setTextError(false);
        }
        if (!rating) {
            setRatingError(true);
        } else {
            setRatingError(false);
        }

        if (name && text && rating) {
            const currentTime = getCurrentDateTime();
            const commentData = { name, text, rating, time: currentTime, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_-kSLs9unLRzcpn8z7uf2RT8DHa27SFNNg&usqp=CAU" };
            dispatch(addComment(commentData))
                .unwrap()
                .then((data) => {
                    console.log('Комментарий успешно отправлен:', data);
                    closeModal();
                })
                .catch((error) => {
                    console.error('Ошибка при отправке комментария:', error);
                });
        }
    };

    return (
        <div className={styles.modal} ref={modalRef}>
            <div className={styles.modalContent}>
                <h3>Добавить комментарий</h3>
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className={styles.errorMessage}>*Пожалуйста, введите имя</p>}
                <textarea
                    placeholder="Текст сообщения"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {textError && <p className={styles.errorMessage}>*Пожалуйста, введите текст комментария</p>}
                <div className={styles.rating}>
                    {[...Array(10)].map((_, index) => (
                        <p
                            key={index + 1}
                            className={index < rating ? styles.selectedStar : styles.star}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onClick={() => handleRatingClick(index + 1)}
                        >
                            ★
                        </p>
                    ))}
                </div>
                {ratingError && <p className={styles.errorMessage}>*Пожалуйста, выберите рейтинг</p>}
                <button className={styles.submitButton} onClick={handleSubmit}>Отправить</button>
            </div>
        </div>
    );
};