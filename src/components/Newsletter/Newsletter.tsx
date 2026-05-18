import React, { useState } from "react";
import styles from "./Newsletter.module.scss";

export const Newsletter: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} aria-label="Newsletter">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <div className={styles.form}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Digite seu nome"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Seu nome"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Seu e-mail"
            />
            <button
              className={styles.button}
              onClick={handleSubmit}
              aria-label="Inscrever na newsletter"
            >
              INSCREVER
            </button>
          </div>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            Aceito os termos e condições
          </label>
        </div>
      </div>
    </section>
  );
};
