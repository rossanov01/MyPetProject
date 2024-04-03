import React from 'react';
import { CommentSlider } from '../UI/CommentSlider/CommentSlider';
import { useSelector } from 'react-redux';
import styles from './PeopleSay.module.css';
import { Link } from 'react-router-dom';

export const PeopleSay = () => {
    const comments = useSelector(state => state.coffee.comments);

    return (
        <div className={styles.PeopleSay}>
            <div className={styles.container}>
                <div className={styles.PeopleSayTitle}>
                    <h3>Что люди говорят о нас</h3>
                    <p>Мы ценим отзывы наших клиентов</p>
                </div>
                <CommentSlider comments={comments} />
                <Link to="/comments"><button className={styles.PeopleSayBtn}>Ещё</button></Link>
            </div>
        </div>
    );
};