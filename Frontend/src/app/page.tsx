import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import Modes from './components/Modes/Modes'
import Slider  from './components/Slider/Slider'
import axios from "axios"
import { getCategories } from './utils/api'


const slidesInfo = [
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/departments",
    link: "solutions",
    image: "/images/earth.jpg",
    id: 1
  },
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/departments",
    link: "solutions",
    image: "/images/board.jpg",
    id: 2
  },
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/departments",
    link: "solutions",
    image: "/images/motherboard.jpg",
    id: 3
  }
]

// 
const  page = async () => {
  let categories = await getCategories()

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