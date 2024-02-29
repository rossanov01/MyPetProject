import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

export const CommentSlider = ({ comments }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {comments?.map((comment, index) => (
                    <div
                        key={comment.id}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                    >

                        <div className={styles.slideContent}>
                            <div className={styles.slideContentAvaRate}>
                                <img src={comment.url} alt={comment.name} className={styles.avatar} />
                                <div className={styles.rating}>
                                    {Array.from({ length: comment.rate }, (_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>

                            <h4>{comment.name}</h4>
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <style>
                {`
                    .slick-prev:before, .slick-next:before {
                        font-size: 50px;
                        line-height: 1;
                        opacity: 0.75;
                        color: white;
                        WebkitFontSmoothing: antialiased;
                    }
                `}
            </style>
        </div>
    );
};