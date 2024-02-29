import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BusketModal } from "../UI/BusketModal/BusketModal";
import { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Navigation } from "../UI/Navigation/Navigation"
import { useSelector } from 'react-redux';

export const Header = () => {
    const total = useSelector((state) => state.coffee.total)
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <header className={styles.header}>
            <div className={styles.header_navbar}>
                <div className={styles.header_logo}>
                    <Link to="/"><img alt='Coffee' src={logo} /></Link>
                    <div>
                        <h1>React Coffee</h1>
                        <h4>Самый вкусный кофе в нашей кофейне</h4>
                    </div>
                </div>
                <div className={styles.header_NavAndBus}>
                    <Navigation />
                    <button className={styles.buttonBasket} onClick={() => setModalIsOpen(true)}>
                        {total || 0} | 🛒
                    </button>
                    <BusketModal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
                </div>
            </div>
            <div className={styles.header_mainImg}>
                <img className={styles.header_mainImg_img} title="Нажми чтобы узнать" src={"https://fotodes.ru/upload/img1345635692.jpg"} />
            </div>
            <h2>Попробуйте наш замечательный кофе вместе со сладостями ^_^</h2>
        </header>
    );
};