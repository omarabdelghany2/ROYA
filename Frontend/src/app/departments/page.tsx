import styles from './departments.module.scss'
import Card from '../components/Card/Card'

const page = () => {
  return (
    <section className={styles.departments}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default page