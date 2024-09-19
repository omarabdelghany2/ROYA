'use client';

import styles from './Modes.module.scss'
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useTheme } from 'next-themes';


const Modes = () => {
    const { setTheme, resolvedTheme } = useTheme()

    const toggleMode = () => {
        if (resolvedTheme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }

    }
  
    return (
    <div className={`${styles.button} ${resolvedTheme === "light" ? styles.dark : styles.light}`} onClick={toggleMode}>
        <div className={styles.mode}>{ resolvedTheme === "light" ? "Dark": "Light" }</div>
        <div className={styles.icon}>{ resolvedTheme === "light" ? <FaMoon />:  <LuSun />}</div>
    </div>
  )
}

export default Modes