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
    const modalRef = useRef();

    const handleRatingClick = (value) => {
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
        <div className={styles.modal} onClick={handleClickOutside}>
            <div className={styles.modalContent} ref={modalRef}>
                <h4>Добавить комментарий</h4>
                <input
                    type="text"
                    placeholder="Ваше имя"
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
                    <p>Поставьте нам рейтинг:</p>

                    <ul>
                        {[...Array(5)].map((_, index) => (
                            <li
                                key={index + 1}
                                className={index < rating ? styles.selectedStar : styles.star}
                                onClick={() => handleRatingClick(index + 1)}
                            >
                                ★
                            </li>
                        ))}
                    </ul>
                </div>
                {ratingError && <p className={styles.errorMessage}>*Пожалуйста, выберите рейтинг</p>}
                <button className={styles.submitButton} onClick={handleSubmit}>Отправить</button>
            </div>
        </div>
    );
};