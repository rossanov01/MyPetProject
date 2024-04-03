import React, { useState } from 'react';
import styles from './Slider.module.css';

export const CommentSlider = ({ comments }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === comments.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? comments.length - 1 : currentIndex - 1);
    };

    return (
        <div className={styles.slider}>
            <button className={styles.prevBtn} onClick={prevSlide}>&#10094;</button>
            <button className={styles.nextBtn} onClick={nextSlide}>&#10095;</button>
            <div className={styles.slide}>
                <div className={styles.slideContent}>
                    <div className={styles.title}>
                        <img src={comments[currentIndex]?.url} alt={comments[currentIndex]?.name} className={styles.avatar} />
                        <div className={styles.nameRate}>
                            <h6>{comments[currentIndex]?.name}</h6>
                            <div className={styles.rating}>
                                {Array.from({ length: comments[currentIndex]?.rate }, (_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p>{comments[currentIndex]?.text}</p>
                </div>
            </div>
        </div>
    );
};

