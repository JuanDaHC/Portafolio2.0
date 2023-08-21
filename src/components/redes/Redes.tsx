import instram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import github from '../../assets/github.svg'
import styles from './redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            <a className={`${styles.linkedin} hover:animate-pulse animate-once`} href="#"><img src={linkedin} alt="logo de linkedin" /></a>
            <a className={`${styles.github} hover:animate-pulse animate-once`} href="#"><img src={github} alt="logo de github" /></a>
            <a className={`${styles.youtube} hover:animate-pulse animate-once`} href="#"><img src={youtube} alt="logo de youtube" /></a>
            <a className={`${styles.instagram} hover:animate-pulse animate-once`} href="#"><img src={instram} alt="logo de instagram" /></a>
        </article>
    )
}

export default Redes;