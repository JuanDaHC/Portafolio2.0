import styles from "./projects.module.css";
import arrow from "../../assets/arrow.svg";
import data from "../../data";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <span className="flex  items-center gap-2">
        <h2 className="text-2xl text-primary-color font-bold">Projects</h2>
        <img className="w-7" src={arrow} alt="flecha" />
      </span>

      <article className={styles.cards}>
        {data.map((card) => {
          return (
            <article className={styles.card} key={card.id}>
              <img className={styles.img} src={card.image[0]} />
              <h3>{card.name}</h3>
              <p>{card.descrip}</p>
              <div key={card.id}>
                {card.tecno.map((tec) => {
                  return <img src={tec} alt="" />;
                })}
              </div>
              <div>
                <a href={card.url}>URL</a>
                <a href={card.urlGithub}>GITHUB</a>
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
