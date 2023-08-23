import styles from "./services.module.css";
import typescrip from "../../assets/typ.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwin from "../../assets/tailwind.svg";
import sass from "../../assets/sass.svg";
import python from "../../assets/python.svg";
import node from "../../assets/node.svg";
import mongo from "../../assets/mongo.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import arrow from "../../assets/arrow.svg";
import code from "../../assets/code.svg";
import desing from "../../assets/desing.svg";
import web from "../../assets/web.svg";


const Tecnologies = [
  {
    tecno: html,
    name: "HTML",
  },

  {
    tecno: css,
    name: "CSS",
  },

  {
    tecno: typescrip,
    name: "Typescript",
  },

  {
    tecno: sass,
    name: "SASS",
  },

  {
    tecno: tailwin,
    name: "Tailwind",
  },

  {
    tecno: react,
    name: "React",
  },

  {
    tecno: redux,
    name: "Redux",
  },

  {
    tecno: python,
    name: "Python",
  },

  {
    tecno: node,
    name: "Node",
  },

  {
    tecno: mongo,
    name: "MongoDB",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">Services</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.servicesContainer}>
        <article className={styles.tecnology}>
          <div className={`${styles.tecno}`}>
            {Tecnologies.map((tecno, index) => (
              <div className={`${styles.svg} w-14 flex flex-col justify-center items-center hover:animate-pulse animate-once`} key={index}>
                <img src={tecno.tecno} alt={tecno.name} />
                <h6>{tecno.name}</h6> 
              </div>
            ))}
          </div>
        </article>
        <article className={`${styles.cards}`}>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={code} alt="" /> <span>Development of specific solutions for your modern web applications.</span></div>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={web} alt="" /> <span>Tailored technological projects expertly adapted to your specific needs.</span></div>
          <div className={`${styles.card} ${styles.blue}`}> <img className="w-10" src={desing} alt="" /> <span>Ensuring responsive design for seamless experiences across all devices.</span></div>
        </article>
      </div>
    </section>
  );
};

export default Services;
