import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import Modes from './components/Modes/Modes'
import Slider  from './components/Slider/Slider'

const slidesInfo = [
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/",
    link: "solutions",
    image: "/images/earth.jpg",
    id: 1
  },
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/",
    link: "solutions",
    image: "/images/earth.jpg",
    id: 2
  },
  {
    title: "software development",
    description: "is an Egyptian limited liability company has a past experience in engineered Process Automation & Instrumentation",
    path: "/",
    link: "solutions",
    image: "/images/earth.jpg",
    id: 3
  }
]

// 
const page = () => {
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
        <Slider slidesInfo={slidesInfo} />
      </div>
      <div className={styles.pattern}>
        <Image src={"/background/pattern.webp"} height={300} width={300} alt='Pattern' />
      </div>
    </main>
  )
}

export default page