'use client';

import { useState } from 'react'
import styles from './Modes.module.scss'
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";


const Modes = () => {
    const [mode, setMode] = useState(true);

    const toggleMode = () => {
        setMode(!mode)
    }
  
    return (
    <div className={`${styles.button} ${mode ? styles.dark : styles.light}`} onClick={toggleMode}>
        <div className={styles.mode}>{ mode ? "Dark": "Light" }</div>
        <div className={styles.icon}>{ mode ? <FaMoon />:  <LuSun />}</div>
    </div>
  )
}

export default Modes