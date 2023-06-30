import styles from "./sass/mainSass.module.css";
import { Fragment, useRef, useState } from "react";
export function Calculator() {
    const [re, setre] = useState(0);
    const inpu1 = useRef("");
    const inpu2 = useRef("");
    const perror=useRef("")
    function calculateNow(e) {
      if(inpu1.current.value.length==0||inpu2.current.value.length==0){
        perror.current.style.display="block";
        setTimeout(()=>{
            perror.current.style.display="none";
        },2000)

      }else{
        switch (e) {
            case 1:
                setre(+inpu1.current.value + +inpu2.current.value)
                inpu1.current.value = ""
                inpu2.current.value = ""
                break;
            case 2:
                setre(+inpu1.current.value - +inpu2.current.value)
                inpu1.current.value = ""
                inpu2.current.value = ""
                break;
            case 3:
                setre(+inpu1.current.value * +inpu2.current.value)
                inpu1.current.value = ""
                inpu2.current.value = ""
                break;
            case 4:
                setre(+inpu1.current.value / +inpu2.current.value)
                inpu1.current.value = ""
                inpu2.current.value = ""
                break;
        }

    }
    }
    return (
        <Fragment>
            <h1 className={styles.name}>Calculator</h1>
            <h1>{re}</h1>
            <div className={styles.calcu}>
                <input ref={inpu1} className={styles.inputs} type="number" />
                <input ref={inpu2} className={styles.inputs} type="number" />
                <button onClick={() => calculateNow(1)} className={styles.btn}>+</button>
                <button onClick={() => calculateNow(2)} className={styles.btn}>-</button>
                <button onClick={() => calculateNow(3)} className={styles.btn}>&times;</button>
                <button onClick={() => calculateNow(4)} className={styles.btn}>/</button>
                <p className={styles.hint} ref={perror}>Check Your Values</p>
                <p className={styles.my} >Designed and Developed By Sachin Chaturvedi @2023</p>
            </div>
            
        </Fragment>


    )
}