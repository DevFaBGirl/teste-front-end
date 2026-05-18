// src/components/Footer/Footer.tsx
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/logo-econverse.svg"
            alt="Econverse"
            width={120}
            height={36}
          />
          <p>Sua loja de tecnologia com os melhores preços e condições.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              in
            </a>
            <a href="#" aria-label="Twitter">
              t
            </a>
          </div>
        </div>

        <nav aria-label="Links institucionais">
          <h3>Institucional</h3>
          <ul>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Termos de uso</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Links úteis">
          <h3>Ajuda</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
            <li>
              <a href="#">Trocas e devoluções</a>
            </li>
          </ul>
        </nav>

        <div className={styles.contact}>
          <h3>Contato</h3>
          <address>
            <p>contato@econverse.com.br</p>
            <p>(11) 9999-9999</p>
          </address>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Econverse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
