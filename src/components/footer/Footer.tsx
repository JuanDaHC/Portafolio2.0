import styles from './footer.module.css'

interface FooterProps {
    lightMode: boolean;
  }

const Footer: React.FC<FooterProps> = ({lightMode}) => {
    return (
        <header className={`${styles.header} ${lightMode === true ? `${styles.white}` : `${styles.dark}`}`}>
            <span className='font-bold'>Hecho Por JAMY - 2023</span>
            <span className='font-bold'>Ayer Era Tarde</span>
        </header>
    )
}

export default Footer;