import React from "react";
import logoEconverse from "../../assets/logo-econverse.svg";
import styles from "./BrandShowcase.module.scss";

const BRANDS = [1, 2, 3, 4, 5];

export const BrandShowcase: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Navegue por marcas">
      <h2 className={styles.title}>Navegue por marcas</h2>
      <ul className={styles.list}>
        {BRANDS.map((id) => (
          <li key={id} className={styles.item}>
            <a href="#" className={styles.circle} aria-label="Econverse">
              <img
                src={logoEconverse}
                alt="Econverse"
                className={styles.logo}
                width={117}
                height={35}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
