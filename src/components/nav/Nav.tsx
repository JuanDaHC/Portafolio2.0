import React from "react";
import styles from "./nav.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import home from "../../assets/home.svg";
import projects from "../../assets/projects.svg";
import services from "../../assets/services.svg";
import about from "../../assets/about.svg";

interface NavProps {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (sectionId: string) => void;
}
const Nav: React.FC<NavProps> = ({lightMode, setLightMode, scrollToSection}) => {

  const light = () => {
    lightMode === false ? setLightMode(true) : setLightMode(false)
  }
  return (
    <header className={`${styles.menu} ${lightMode === true ? styles.white : styles.dark} `}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>JAMY</h1>
        <div className={ `${styles.nave} flex gap-8 font-bold text-lg` }>
          <a onClick={() => scrollToSection('home')}>
            <span>H</span>ome
          </a>
          <a  onClick={() => scrollToSection('projects')}>
            <span>P</span>rojects
          </a>
          <a  onClick={() => scrollToSection('services')}>
            <span>S</span>ervices
          </a>
          <a onClick={() => scrollToSection('about')}>
            <span>A</span>bout
          </a>

          <a className={`${styles.mobile}`}><img className="w-6" src={home} alt="" /></a>
          <a className={`${styles.mobile}`}><img className="w-6" src={projects} alt="" /></a>
          <a className={`${styles.mobile}`}><img className="w-6" src={services} alt="" /></a>
          <a className={`${styles.mobile}`}><img className="w-6" src={about} alt="" /></a>
            <img onClick={light} className="w-7" src={lightMode === false ? sun : moon} alt="sun" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
