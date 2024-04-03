import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Comments.module.css';
import { CommentItem } from '../../components/UI/CommentItem/CommentItem';
import { Pagination } from '../../components/UI/Pagination/Pagination';
import { fetchAllComments } from '../../Redux/coffee/coffeeSlice';
import { v4 as uuidv4 } from 'uuid'
import { AddCommentModal } from '../../components/UI/AddCommentModal/AddCommentModal';

export const Comments = () => {
    const dispatch = useDispatch();
    const initialComments = useSelector(state => state.coffee.comments);

    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 5;
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        dispatch(fetchAllComments());
    }, [dispatch]);

    const sortComments = (comments, sortBy) => {
        if (sortBy === 'newest') {
            return comments.slice().sort((a, b) => new Date(b.time) - new Date(a.time));
        } else if (sortBy === 'oldest') {
            return comments.slice().sort((a, b) => new Date(a.time) - new Date(b.time));
        } else if (sortBy === 'positive') {
            return comments.slice().sort((a, b) => b.rate - a.rate);
        } else if (sortBy === 'negative') {
            return comments.slice().sort((a, b) => a.rate - b.rate);
        }
    };

    const startIndex = (currentPage - 1) * limit;
    const sortedComments = initialComments ? sortComments(initialComments, sortBy) : [];
    const visibleComments = sortedComments.slice(startIndex, startIndex + limit);
    const totalComments = initialComments ? initialComments.length : 0;
    const totalPages = Math.ceil(totalComments / limit);

    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);
        setCurrentPage(1);
    };

    return (
        <div className={styles.commentsContainer}>
            <div className={styles.commentsTitle}>
                <h2>Наши отзывы</h2>
                <button className={styles.addButton} onClick={openModal}>Добавить комментарий</button>
            </div>
            <div className={styles.sortContainer}>
                <div>
                    <label><p>Сортировать по:</p></label>
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="newest">Сначала новые</option>
                        <option value="oldest">Сначала старые</option>
                        <option value="positive">Положительные сначала</option>
                        <option value="negative">Отрицательные сначала</option>
                    </select>
                </div>
            </div>
            {visibleComments.map(comment => <CommentItem key={uuidv4} comment={comment} />)}
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            {modalVisible && <AddCommentModal closeModal={closeModal} />}
        </div>
    );
};