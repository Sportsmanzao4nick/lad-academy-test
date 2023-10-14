import React, {useState, ChangeEvent} from "react";
import {Link} from "react-router-dom";
import styles from "./index.module.css";

function SearchField() {
    const [ingredient, setIngredient] = useState("");

    const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newIngredient = event.target.value;
        setIngredient(newIngredient);
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                onChange={handleIngredientChange}
                placeholder="Enter one ingredient"
            />
            <Link to={`${ingredient}`}>
                <button className={styles.button} type="submit">Search</button>
            </Link>
        </div>
    )
}

export default SearchField;