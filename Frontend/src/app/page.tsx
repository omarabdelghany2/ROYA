import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import Modes from './components/Modes/Modes'
import Slider  from './components/Slider/Slider'
import { getCategories } from './utils/api'


// 
const  page = async () => {
  const categories = await getCategories()

  return (
    <main className={styles.container}>
      <div className={styles.switch}>
        <Modes />
      </div>
      <div className={styles.title}>
        <div className={styles.up}>roya</div>
        <div className={styles.down}>technology</div>
      </div>
      <div className={styles.slider}>
        <Slider slidesInfo={categories} />
      </div>
      <div className={styles.pattern}>
        <Image src={"/background/pattern.webp"} height={400} width={400} alt='Pattern' />
      </div>
      <div className={styles.square}></div>
    </main>
  )
}

export default page