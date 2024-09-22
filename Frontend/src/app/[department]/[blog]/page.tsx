import Image from 'next/image'
import styles from './blog.module.scss'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getProject } from '@/app/utils/api'
import { Server } from '@/app/utils/server'



const page = async ({ params }: { params: { department: string; blog: string } }) => {
  const project = await getProject(params.blog)

  return (
    <section className={styles.section}>
      <div className={styles.cover}>
        <Image src={`${Server.media}${project.image}`} alt={project.name} placeholder={"empty"}  width={900} height={300} />
      </div>
      <div className={styles.blog}>
        <div className={styles.title}>{project.name}</div>
        <div className={styles.description}>
          <MDXRemote source={project.description} />
        </div>
      </div>
    </section>
  )
}

export default page