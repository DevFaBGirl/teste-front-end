import React from "react";
import logoEconverse from "../../assets/logo-econverse.svg";
import instagramIcon from "../../assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import styles from "./Footer.module.scss";

const NAV_LINKS = {
  Institucional: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  Ajuda: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  Termos: [
    "Termos e Condições",
    "Política de Privacidade",
    "Troca e Devolução",
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="/" aria-label="Econverse - Página inicial">
            <img src={logoEconverse} alt="Econverse" width={140} height={40} />
          </a>
          <p className={styles.description}>
            Siga nossas redes sociais e fique por dentro das novidades e
            promoções exclusivas.
          </p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/econverse.ag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <img src={instagramIcon} alt="Instagram" width={24} height={24} />
            </a>
            <a
              href="https://www.facebook.com/econverse.ag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <img src={facebookIcon} alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/econverse/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <img src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <nav className={styles.nav} aria-label="Links do rodapé">
          {Object.entries(NAV_LINKS).map(([category, links]) => (
            <div key={category} className={styles.navColumn}>
              <h3 className={styles.navTitle}>{category}</h3>
              <ul className={styles.navList}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.navLink}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.copyright}>
        <p>Desenvolvido com 💙 por Fabiana Balduína</p>
      </div>
    </footer>
  );
};
