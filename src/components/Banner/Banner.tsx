import React from "react";
import styles from "./Banner.module.scss";
import bannerBg from "../../assets/Rectangle 250.svg";

const Banner: React.FC = () => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${bannerBg})` }}
      aria-label="Promoção Black Friday - 50% Off nos produtos"
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Venha conhecer nossas <br /> promoções
        </h1>
        <p className={styles.subtitle}>
          <strong className={styles.highlight}>50% Off</strong> nos produtos
        </p>
        <a
          href="https://www.econverse.com.br/"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Ver produto
        </a>
      </div>
    </section>
  );
};

export default Banner;