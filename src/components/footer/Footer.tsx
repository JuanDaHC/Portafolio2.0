import styles from './footer.module.css'

interface FooterProps {
    lightMode: boolean;
  }

const Footer: React.FC<FooterProps> = ({lightMode}) => {
    return (
        <header className={`${styles.header} ${lightMode === true ? `${styles.white}` : `${styles.dark}`}`}>
            <span className='font-bold'>Made By JAMY - 2023</span>
            <span className='font-bold'>Yesterday Was Late</span>
        </header>
    )
}

export default Footer;