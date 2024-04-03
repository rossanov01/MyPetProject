import { useEffect, useState } from "react";
import styles from "./CakesOrder.module.css";
import { useSelector } from "react-redux";
import { CakeItem } from "../UI/CakeItem/CakeItem";

export const CakesOrder = () => {
    const data = useSelector(state => state.coffee.data.cakes);

    const [filteredCakes, setFilteredCakes] = useState(data || []);
    const [sortType, setSortType] = useState("increase");

    const handleSortChange = (event) => {
        const value = event.target.value;
        setSortType(value);

        const sortedData = [...filteredCakes];
        if (value === "increase") {
            sortedData.sort((a, b) => a.cost - b.cost);
        } else if (value === "decrease") {
            sortedData.sort((a, b) => b.cost - a.cost);
        }

        setFilteredCakes(sortedData);
    };

    return (
        <div className={styles.CakesOrder}>
            <div className={styles.container}>
                <div className={styles.CakesOrderTitle}>
                    <h4>Пироженные</h4>
                    <p>Наши пирожные - это настоящее воплощение вкуса и качества, которое приносит радость каждому гостю.</p>
                    <p>От классических рецептов до смелых экспериментов, каждое пирожное в нашем ассортименте вдохновлено традиционными рецептами и новыми гастрономическими течениями. Нежные бисквиты, обволакивающие кремы, свежие фрукты и ароматные специи - все это вы найдете в наших десертах.</p>
                    <p>Наши пирожные - это не просто сладость, это целая история вкуса, которая раскрывается в каждом кусочке. Они поднимают настроение и заставляют сердца биться чаще от восхищения.</p>
                </div>
                <div className={styles.CakesOrderList}>
                    <div className={styles.OrderFilter}>
                        <h6>Отсортировать:</h6>
                        По цене
                        <select value={sortType} onChange={(e) => handleSortChange(e)}>
                            <option value="increase">увеличение</option>
                            <option value="decrease">уменьшение</option>
                        </select>
                    </div>
                    <div className={styles.CakeItemList}>
                        {filteredCakes?.map(el => <CakeItem key={el.id} el={el} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};