import styles from './projects.module.css'
import arrow from '../../assets/arrow.svg'
import data from '../../data'

const Projects = () => {
    return(
        <section className={styles.projects}>
            <span className='flex  items-center gap-2'>
                <h2 className='text-2xl text-primary-color font-bold'>Projects</h2>
                <img className='w-7' src={arrow} alt="flecha" />
            </span>

            <article>
                {
                    data.map(card => {
                        return(
                            <div key={card.id}>
                                <img src={card.image} alt="" />
                            </div>
                        )
                    })
                }
            </article>
            
        </section>
    )
}

export default Projects;