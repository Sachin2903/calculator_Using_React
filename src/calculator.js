import styles from "./sass/mainSass.module.css";
import { Fragment } from "react";
export function Calculator() {
    return (
        <Fragment>
            <h1>result</h1>
            <div className={styles.calcu}>
                <input className={styles.inputs}  type="number" />
                <input className={styles.inputs} type="number" />
                <button className={styles.btn}>+</button>
                <button className={styles.btn}>-</button>
                <button className={styles.btn}>&times;</button>
                <button className={styles.btn}>/</button>
            </div>

        </Fragment>


    )
}