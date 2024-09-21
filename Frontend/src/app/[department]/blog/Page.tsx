import Image from 'next/image'
import styles from './blog.module.scss'
import { MDXRemote } from 'next-mdx-remote/rsc'


const markdown = "**Bold text** *Italic text* ~~Strikethrough~~ **_Bold and italic_**`Inline code`"

const page = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cover}>
        <Image src={"/images/earth.jpg"} alt='blog' placeholder={"empty"}  width={900} height={300} />
      </div>
      <div className={styles.blog}>
        <div className={styles.title}>SOFTWARE</div>
        <div className={styles.description}>
          <MDXRemote source={markdown} />
        </div>
      </div>
    </section>
  )
}

export default page