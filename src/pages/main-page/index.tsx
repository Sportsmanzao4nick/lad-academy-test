import React from "react";
import MainCell from "../../components/main-cell";
import alcoholic from "../../assets/svg/alcoholic.svg";
import nonAlcoholic from "../../assets/svg/non-alcoholic.svg";
import styles from "./index.module.css";

function MainPage() {
    return (
        <div>
            <h1>What will you drink today?</h1>
            <div className={styles.cells}>
                <MainCell name="Alcoholic cocktails" link="alcoholic" logo={alcoholic} logoName="alcoholic-icon"/>
                <MainCell name="Non-alcoholic cocktails" link="non_alcoholic" logo={nonAlcoholic} logoName="non-alcoholic-icon"/>
            </div>
        </div>
    )
}

export default MainPage;