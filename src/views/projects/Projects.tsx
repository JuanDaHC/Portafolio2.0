import styles from "./projects.module.css";
import arrow from "../../assets/arrow.svg";
import data from "../../data";
import github from '../../assets/github.svg'
import url from '../../assets/url.svg'


const Projects = () => {
  return (
    <section className={styles.projects}>
      <span className="flex  items-center gap-2">
        <h2 className="text-2xl text-primary-color font-bold">Projects</h2>
        <img className="w-7" src={arrow} alt="flecha" />
      </span>

      <article className={`${styles.cards}  `}>
        {data.map((card) => {
          return (
            <div className={`${styles.card}`} key={card.id}>
              <div className={styles.removewhenuse}>
                <img className={styles.img} src={card.image[0]} alt="" />
              </div>
              <span className={styles.details}>
                <h4>{card.name}</h4>
                <div className={styles.links}>
                  <a target="_blank" href={card.urlGithub}><img src={github} alt="" /></a>
                  <a target="_blank" href={card.url}><img src={url} alt="" /></a>
                </div>
              </span> 
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
