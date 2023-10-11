import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./index.module.css";

function Header() {
    return (
        <div className={styles.wrapper}>
            <Link to="alcoholic" className={styles.link}>Alcoholic cocktails</Link>
            <Link to="" className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="logo"/>
            </Link>
            <Link to="non_alcoholic" className={styles.link}>Non-alcoholic cocktails</Link>
        </div>
    )
}

export default Header;