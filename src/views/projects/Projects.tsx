import styles from './projects.module.css'
import arrow from '../../assets/arrow.svg'

const Projects = () => {
    return(
        <section className={styles.projects}>
            <span className='flex  items-center gap-2'>
                <h2 className='text-2xl text-primary-color font-bold'>Projects</h2>
                <img className='w-7' src={arrow} alt="flecha" />
            </span>
            
        </section>
    )
}

export default Projects;