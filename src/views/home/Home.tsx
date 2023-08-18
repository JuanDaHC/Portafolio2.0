import React from "react";
import styles from "./home.module.css";
import pin from '../../assets/pin.svg'
import message from '../../assets/message.svg'
import share from '../../assets/share.svg'

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <article className={styles.full}>
        <h2>Full Stack Web Developer</h2>
        <p>
          Programmer with focus on web application development, I have skills in
          both Front-end and Back-end. however my specialty and main focus is in
          Front-end.
        </p>
        <span>From:Jamy_10011</span>
        <div>
          <span>
            <img className="w-5" src={message} alt="" />
            <h5>25</h5>
          </span>

          <span>
            <img className="w-5" src={share} alt="" />
            <h5>25</h5>
          </span>

          <span>
            <img className="w-5" src={pin} alt="" />
            <h5>25</h5>
          </span>
        </div>
      </article>
      <article className={styles.jamy}>
        <h2>John alexander muñoz Yepez</h2>
      </article>
    </section>
  );
};

export default Home;
