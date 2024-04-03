import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BusketModal } from "../UI/BusketModal/BusketModal";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Navigation } from "../UI/Navigation/Navigation"
import { useSelector } from 'react-redux';
import coffeeGif from "../../assets/coffeeGif.gif";
export const Header = () => {

    const total = useSelector((state) => state.coffee.total)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const closeMenuShowModal = () => {
        setIsMenuOpen(false)
        setModalIsOpen(true)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 730);
        };
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {!isSmallScreen ?
                    <div className={styles.header_navbar}>
                        <div className={styles.header_logo}>
                            <Link to="/"><img alt='Coffee' src={logo} /></Link>
                            <div>
                                <h1>React Coffee</h1>
                                <h4 className={styles.entitled}>Самый вкусный кофе в нашей кофейне</h4>
                            </div>
                        </div>
                        <div className={styles.header_NavAndBus}>
                            <Navigation />
                            <button className={styles.buttonBasket} onClick={() => setModalIsOpen(true)}>
                                {total || 0} | 🛒
                            </button>
                            <BusketModal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
                        </div>
                    </div> :
                    <div className={styles.header_navbar}>
                        <div className={styles.header_logo}>
                            <div className={styles.header_title}>
                                <Link to="/"><img alt='Coffee' src={logo} /></Link>
                                <h1>React Coffee</h1>
                            </div>


                            <div className={isMenuOpen ? styles.burgerIconActive : styles.burgerIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>☰
                            </div>
                            {isMenuOpen && (
                                <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                                    <Navigation />
                                    <button className={styles.buttonBasket} onClick={() => closeMenuShowModal()}>🛒</button>
                                </div>
                            )}


                            <BusketModal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />

                        </div>
                    </div>
                }
                <div className={styles.header_mainImg}>
                    <div className={styles.background} style={{ backgroundImage: `url(${require("../../assets/coffeeGif.gif")})` }} />
                    <h2>Самый вкусный кофе только у нас! ^_^</h2>
                </div>

            </div>
        </header>
    );
};


{/* <button className={styles.buttonBasket} onClick={() => setModalIsOpen(true)}>🛒</button> */ }