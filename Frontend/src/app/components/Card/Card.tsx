import Image from 'next/image'
import styles from './Card.module.scss'
import Link from 'next/link'


const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <Image src="/images/earth.jpg" alt='software' width={600} height={300} />
        </div>
        <div className={styles.bot}>
            <div className={styles.title}>SOFTWARE</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deleniti impedit</div>
            <Link className={styles.linker} href={"/departments/blog"}>
              <button className={styles.link}>VIEW</button>
            </Link>
        </div>
    </div>
  )
}

export default Card