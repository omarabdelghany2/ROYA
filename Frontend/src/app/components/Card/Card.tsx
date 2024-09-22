import Image from 'next/image'
import styles from './Card.module.scss'
import Link from 'next/link'
import { Server } from '@/app/utils/server';

interface Card {
  category: string;
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    category_name: string;
  }
}


const Card: React.FC<Card> = ({ category, project }) => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <Image src={`${Server.media}${project.image}`} alt={project.name} width={600} height={300} />
        </div>
        <div className={styles.bot}>
            <div className={styles.title}>{project.name}</div>
            <div className={styles.description}>{project.description}</div>
            <Link className={styles.linker} href={`/${category}/${project.id}`}>
              <button className={styles.link}>VIEW</button>
            </Link>
        </div>
    </div>
  )
}

export default Card