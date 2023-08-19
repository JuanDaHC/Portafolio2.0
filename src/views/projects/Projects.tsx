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

      <article className={`${styles.cards} ${styles.containerimg}`}>
        {data.map((card) => {
          return (
            <div className={`${styles.card} ${styles.boximg}`} key={card.id}>
              <a href="#">
                <figure>
                  <img src={card.image[0]} alt="" />
                </figure>
              </a>
              
              {/* <h3>{card.name}</h3>
              <p>{card.descrip}</p>
              <div key={index} className="flex">
                {card.tecno.map((tec) => {
                  return <img src={tec} alt="" />;
                })}
              </div>
              <div>
                <a href={card.url}>URL</a>
                <a href={card.urlGithub}>GITHUB</a> 
              </div> */}
            
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
