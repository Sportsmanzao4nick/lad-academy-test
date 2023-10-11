import React from "react";
import {CocktailPreviewData} from "./types";
import styles from "./index.module.css"

function CocktailCell({strDrink, strDrinkThumb}: CocktailPreviewData) {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{strDrink}</h3>
            <img className={styles.image} src={strDrinkThumb} alt={strDrink}/>
        </div>)
}

export default CocktailCell;