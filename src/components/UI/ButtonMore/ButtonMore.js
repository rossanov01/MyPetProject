import { useState } from "react"
import styles from './ButtonMore.module.css';
export const ButtonMore = ({ text }) => {
    const [info, setInfo] = useState(false)

    return <>
        {info && <p>{text}</p>}
        <button className={styles.buttonMore} onClick={() => setInfo(!info)}>{info ? 'Свернуть' : "Узнать больше"}</button>
    </>
}