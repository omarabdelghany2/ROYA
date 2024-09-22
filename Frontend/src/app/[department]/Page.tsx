import styles from './departments.module.scss'
import Card from '../components/Card/Card'
import { getProjects } from '../utils/api'



const  page = async ({ params }: { params: { department: string } }) => {
  const projects = await getProjects(params.department)

  return (
    <section className={styles.departments}>
      {
        projects.map(project => (
          <Card key={project.id} category={params.department} project={project} />
        ))
      }
    </section>
  )
}

export default page