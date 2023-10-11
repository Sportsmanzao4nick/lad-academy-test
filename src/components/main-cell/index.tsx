import React from "react";
import {MainData} from "./types";
import {Link} from "react-router-dom";
import styles from "./index.module.css";

function MainCell({name, link, logo, logoName}: MainData) {
    return (
        <Link className={styles.container} to={`${link}`}>
            <h2 className={styles.header}>{name}</h2>
            <img className={styles.image} src={logo} alt={logoName}/>
        </Link>
    )
}

export default MainCell;