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
      <article className={styles.tecno}>
        <span className="flex items-center">
          <h2 className="text-2xl text-primary-color font-bold">Tecnologies</h2>
          <img className="w-7" src={arrow} alt="" />
        </span>
        <div className="flex">
            {Tecnologies.map((tecno, index) => (
              <div className="w-14" key={index}>
                <img src={tecno.tecno} alt={tecno.name} />
                <h6>{tecno.name}</h6>
              </div>
            ))}
        </div>
      </article>
      <article className={styles.ser}></article>
    </section>
  );
};

export default Services;
