import styles from './Pagination.module.css';

export const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className={styles.pagination}>
            <ul>
                <li className={currentPage === 1 ? styles.active : ''} onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>&laquo; Назад</li>
                {currentPage > 1 && <li onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</li>}
                <li className={styles.active}>{currentPage}</li>
                {currentPage < totalPages && <li onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</li>}
                {currentPage < totalPages - 2 && <li>...</li>}
                {currentPage < totalPages - 1 && <li onClick={() => paginate(totalPages)}>{totalPages}</li>}
                <li className={currentPage === totalPages ? styles.active : ''} onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}>Вперед &raquo;</li>
            </ul>
        </div>)
}