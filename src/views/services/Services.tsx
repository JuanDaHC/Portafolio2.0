import styles from './services.module.css'
import typescrip from '../../assets/typ.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import tailwin from '../../assets/tailwind.svg'
import sass from '../../assets/sass.svg'
import python from '../../assets/python.svg'
import node from '../../assets/node.svg'
import mongo from '../../assets/mongo.svg'
import react from '../../assets/react.svg'
import redux from '../../assets/redux.svg'
import arrow from '../../assets/arrow.svg'

const tecnologies = [html, css, typescrip,react, python, mongo, redux,node, sass,tailwin]
const names = ['HTML','CSS', 'TYPESCRIP', 'REACT', 'PYTHON', 'MONGO', 'REDUX', 'NODE.JS', 'SASS', 'TAILWIND']

const Services = () => {
    return (
        <section className={styles.services}>
            <article className={styles.tecno}>
                <span className='flex items-center'>
                    <h2 className='text-2xl text-primary-color font-bold'>Tecnologies</h2>
                    <img className='w-7' src={arrow} alt="" />
                </span>
                <div className='flex'>
                    {
                        tecnologies.map((item, index) => {
                            return (
                                <div className={`${styles.tecnoItem}`} key={index}>
                                    <img className='w-14' src={item} alt="" />
                                    <span>
                                      
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className={styles.ser}>

            </article>
        </section>
    )
}

export default Services;