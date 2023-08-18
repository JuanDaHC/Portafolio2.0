import React from "react";
import styles from "./nav.module.css";
import sun from "../../assets/sun.svg"

const Nav: React.FC = () => {
  return (
    <header className={styles.menu}>
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
            <span>A</span>bout
          </a>
            <img className="w-7" src={sun} alt="sun" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
