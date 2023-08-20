import React from "react";
import styles from "./nav.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

interface NavProps {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav: React.FC<NavProps> = ({lightMode, setLightMode}) => {

  const light = () => {
    lightMode === false ? setLightMode(true) : setLightMode(false)
  }
  return (
    <header className={`${styles.menu} ${lightMode === true ? styles.white : styles.dark} `}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>JAMY</h1>
        <div className="flex gap-8 font-bold text-lg">
          <a>
            <span>H</span>ome
          </a>
          <a>
            <span>P</span>rojects
          </a>
          <a>
            <span>S</span>ervices
          </a>
          <a>
            <span>A</span>bout
          </a>
            <img onClick={light} className="w-7" src={lightMode === false ? sun : moon} alt="sun" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
