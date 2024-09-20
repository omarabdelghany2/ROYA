import Image from 'next/image'
import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <Image src="/images/earth.jpg" alt='software' width={600} height={300} />
        </div>
        <div className={styles.bot}>
            <div className={styles.title}>SOFTWARE</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deleniti impedit</div>
            <button className={styles.link}>VIEW</button>
        </div>
    </div>
  )
}

export default Card