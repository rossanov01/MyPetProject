import { useState } from "react";
import styles from "./CoffeeOrder.module.css";
import { CoffeeItem } from "../UI/CoffeeItem/CoffeeItem";
import { useSelector } from "react-redux";


export const CoffeeOrder = () => {
    const data = useSelector(state => state.coffee.data.coffee);

    const [filterType, setFilterType] = useState("all");
    const [sortType, setSortType] = useState("increase");

    const getFilteredCoffee = () => {
        if (!data) return []
        if (filterType === "all") return data
        return data.filter(coffee => filterType === "true" ? coffee.milk === true : coffee.milk === false)
    }
    const handleSortFilteredCoffee = () => {
        const arrayCoffee = getFilteredCoffee()
        if (sortType === "increase") {
            return [...arrayCoffee].sort((a, b) => a.cost["0.2"] - b.cost["0.2"]);
        } else {
            return [...arrayCoffee].sort((a, b) => b.cost["0.2"] - a.cost["0.2"]);
        }
    };
    const getSortedAndFilteredCofee = handleSortFilteredCoffee()
    return (
        <div className={styles.CoffeeOrder}>
            <div className={styles.container}>
                <div className={styles.CoffeeOrderTitle}>
                    <h4>Кофе</h4>
                    <p>Добро пожаловать в мир настоящего волшебства, где каждая капля - это тайна вкуса, а каждый глоток - настоящее приключение. Наши бариста владеют искусством создания кофейных шедевров, превращая свежеобжаренные зерна в настоящее произведение искусства.</p>
                    <p>Наш потрясающий кофе начинается с тщательно подобранных сортов зерен, выращенных на зеленых плантациях далеких уголков мира. Каждая чаша представляет собой уникальное сочетание аромата и вкуса, созданное с любовью и профессионализмом.</p>
                    <p>Погружайтесь в атмосферу уюта и наслаждения, наш потрясающий кофе создан для того, чтобы подарить вам момент настоящего блаженства. Доверьтесь нам, и мы обеспечим вас волшебством в каждой чаше.</p>
                </div>
                <div className={styles.CoffeeOrderList}>
                    <div className={styles.OrderFilter}>
                        <div className={styles.OrderFilterItem}>
                            <h6>Отфильтровать:</h6>
                            <div>
                                <p>По составу</p>
                                <select name="milk" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                                    <option value="all">Включено всё</option>
                                    <option value="true">В составе есть молоко</option>
                                    <option value="false">В составе нет молока</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.OrderFilterItem}>
                            <h6>Отсортировать:</h6>
                            <div>
                                <p>По цене</p>
                                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                                    <option value="increase">увеличение</option>
                                    <option value="decrease">уменьшение</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        {getSortedAndFilteredCofee.map(el => <CoffeeItem key={el.id} el={el} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};