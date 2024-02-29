import React from 'react';
import styles from './CommentItem.module.css';

export const CommentItem = ({ comment }) => {
    const date = new Date(comment.time);
    const formattedTime = `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<span key={i}>&#9733;</span>);
        }
        return stars;
    };

    return (
        <div className={styles.commentItemContainer} key={comment.id}>
            <img src={comment.url} alt={comment.name} />
            <div className={styles.commentContent}>
                <h3>{comment.name}</h3>
                <p>{comment.text}</p>
                <div className={styles.starRating}>
                    {renderStars(comment.rate)}
                </div>
            </div>
            <p className={styles.commentTime}>Время написания: {formattedTime}</p>
        </div>
    );
};