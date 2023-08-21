import styles from "./about.module.css";
import arrow from "../../assets/arrow.svg";
import pin from "../../assets/pin.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import alex from "../../assets/alex.webp";

const About = () => {
  return (
    <section className={`${styles.about}`}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">About</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.aboutMe}>
        <article className={styles.me}>
          <img
            className={`${styles.img} m-auto hover:animate-wiggle-more animate-once
`}
            src={alex}
            alt=""
          />
          <p>
            Hello, My name is John Alexander Muñoz Yepez. I love technology and
            sports, the latter is where I acquired my discipline and
            perseverance, as I believe that sports are the most effective way to
            develop these qualities.
          </p>
          <span className="text-primary-color">From:Jamy_10011</span>
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
          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>Hover Me</p>
            <p className={styles.secondText}>Lorem Ipsum</p>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>Hover Me</p>
            <p className={styles.secondText}>Lorem Ipsum</p>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>Hover Me</p>
            <p className={styles.secondText}>Lorem Ipsum</p>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <p className={styles.tip}>Hover Me</p>
            <p className={styles.secondText}>Lorem Ipsum</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
