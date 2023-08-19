import React from "react";
import styles from "./home.module.css";
import pin from '../../assets/pin.svg'
import message from '../../assets/message.svg'
import share from '../../assets/share.svg'
import Buttons from "../../components/buttoons/Buttons";

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <article className={styles.full}>
        <h2 className="font-bold">Full Stack Developer</h2>
        <p>
          Programmer with focus on web application development, I have skills in
          both Front-end and Back-end. however my specialty and main focus is in
          Front-end.
        </p>
        <span className="text-primary-color">From:Jamy_10011</span>
        <div className="flex gap-3">
          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={message} alt="" />
            <h5>25</h5>
          </span>

          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={share} alt="" />
            <h5>25</h5>
          </span>

          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={pin} alt="" />
            <h5>25</h5>
          </span>
        </div>
      </article>
      <article className={`${styles.jamy}`}>
        <h2 className="font-bold text-center">Alexander Muñoz</h2>
        <Buttons url="" title="GMAIL" />
        <Buttons url="" title="CV"/>
      </article>
    </section>
  );
};

export default Home;
