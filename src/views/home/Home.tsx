import React from "react";
import styles from "./home.module.css";
import pin from '../../assets/pin.svg'
import message from '../../assets/message.svg'
import share from '../../assets/share.svg'
import Buttons from "../../components/buttoons/Buttons";
import AnimacionOne from "../../components/animations/animationOne/AnimationOne";

const Home: React.FC = () => {
  
  return (
    <section className={styles.home}>
      <article className={`${styles.full}`}>
        <h2 className="font-bold"> Ximil Technologies</h2>
        <p>
        Proveemos servicios de implementación y optimización de infraestructuras basadas en la nube de Amazon Web Services. Especialistas en aplicaciones web de alta disponibilidad, serverless, dynamodb, lamda y cloudformation.
        </p>
        <span className="text-primary-color"></span>
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
      <article className={`${styles.jamy}`}>
        <h2 className="font-bold text-center z-10">Informacion Adicional</h2>
        <Buttons url="https://docs.aws.amazon.com/?nc2=h_ql_doc_do&refid=8fa18207-f2c2-4587-81a1-f2a3648571b3" title="AMAZON" />
        <Buttons url="https://papirocloud.ximil.co/" title="Papiro Cloud"/>
      </article>
      <AnimacionOne/>
      <span className={styles.item}></span>
      <span className={styles.item2}></span>
      <span className={styles.item3}></span>
      <span className={styles.item4}></span>

      <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90 z-10"></span>
    </section>
  );
};

export default Home;
