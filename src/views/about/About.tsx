import React from "react";
import styles from "./about.module.css";
import arrow from "../../assets/arrow.svg";
import pin from "../../assets/pin.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import grupo from "../../assets/alex.webp";
import AnimationTwo from "../../components/animations/animationTwo/AnimationTwo";
import Footer from "../../components/footer/Footer";

interface AboutProps {
  lightMode: boolean;
}

const About: React.FC<AboutProps> = ({lightMode}) => {
  return (
    <section className={`${styles.about}`}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">About</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.aboutMe}>
        <article className={styles.me}>
          <img
            className={`${styles.img} z-10 m-auto hover:animate-jump animate-once
`}
            src={grupo}
            alt=""
          />
          <p>
          Ximil Technologies se ha dedicado a proveer servicios relacionados con la web. Proveemos consultoría e implementación para infraestructuras basadas en la nube, y proyectos de desarrollo de operaciones, incluyendo diseño, desarrollo, aseguramiento y optimización de aplicaciones web y móviles.
          </p>
          <span className="text-primary-color">From:Juan Herrera</span>
          <div className="flex gap-3">
            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={message} alt="" />
              <h5>25</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={share} alt="" />
              <h5>83</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={pin} alt="" />
              <h5>45</h5>
            </span>
          </div>
        </article>
        <article className={styles.cards}>
          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Gerentes de Proyectos</p>
            <p className={styles.secondText}>Ingenieros certificados como PMP del PMI</p>
          </div>

          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Desarrolladores Senior</p>
            <p className={styles.secondText}>Desarrolladores con experiencia profesional de más de 10 años</p>
          </div>

          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Diseñadores gráficos</p>
            <p className={styles.secondText}>Diseñadores con más de 10 años de experiencia</p>
          </div>

          
        </article>
      </div>
      <Footer  lightMode={lightMode} />
      <AnimationTwo lightMode={lightMode} />
    </section>
  );
};

export default About;
