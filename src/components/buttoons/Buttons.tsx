import React from "react";
import styles from './buttons.module.css'

interface buttonProps {
    title: string;
    url: string;
  }
   
  const Buttons: React.FC<buttonProps> = ({ title, url }) => {
    return (
      <a href={url} className={styles.button}>
        <button className="z-20">{title}</button>
      </a>
    );
  };

export default Buttons;