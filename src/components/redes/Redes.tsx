import instram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import styles from './redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            
            <a target='_blank' className={`${youtube} hover:animate-pulse animate-once`} href="https://www.youtube.com/@ximiltechnologies1624"><img src={youtube} alt="logo de youtube" /></a>
            <a target='_blank' className={`${instram} hover:animate-pulse animate-once`} href="https://www.instagram.com/ximiltechnologiessas/"><img src={instram} alt="logo de instagram" /></a>

        </article>
    )
}

export default Redes;