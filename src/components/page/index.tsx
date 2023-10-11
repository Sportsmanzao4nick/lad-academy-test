import React from "react";
import {Data} from "./types";
import Header from "../header";
import styles from "./index.module.css";

function Page({children}: Data) {
    return (
        <div>
            <Header/>
            <div className={styles.page}>{children}</div>
        </div>
    );
}

export default Page;