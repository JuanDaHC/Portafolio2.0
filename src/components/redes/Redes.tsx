import instram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import github from '../../assets/github.svg'
import styles from './redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            <a target='_blank' className={`${styles.linkedin} hover:animate-pulse animate-once`} href="https://www.linkedin.com/in/alexander-mu%C3%B1oz-4959a0255/"><img src={linkedin} alt="logo de linkedin" /></a>
            <a target='_blank' className={`${styles.github} hover:animate-pulse animate-once`} href="https://github.com/MINOTAURO18"><img src={github} alt="logo de github" /></a>
            <a target='_blank' className={`${styles.youtube} hover:animate-pulse animate-once`} href="https://www.youtube.com/@JAMY_1/videos"><img src={youtube} alt="logo de youtube" /></a>
            <a target='_blank' className={`${styles.instagram} hover:animate-pulse animate-once`} href="https://www.instagram.com/jamy_10011/"><img src={instram} alt="logo de instagram" /></a>
        </article>
    )
}

export default Redes;