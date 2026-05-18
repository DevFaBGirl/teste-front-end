// src/components/Header/Header.tsx
import logo from "../../assets/logo-econverse.svg";
import iconGroup from "../../assets/Group.svg";
import iconHeart from "../../assets/Heart.svg";
import iconCart from "../../assets/ShoppingCart.svg";
import iconCrown from "../../assets/CrownSimple.svg";
import iconUser from "../../assets/UserCircle.svg";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Todas categorias", highlight: false, icon: null },
  { label: "Supermercado", highlight: false, icon: null },
  { label: "Livros", highlight: false, icon: null },
  { label: "Moda", highlight: false, icon: null },
  { label: "Lançamentos", highlight: false, icon: null },
  { label: "Ofertas do dia", highlight: true, icon: null },
  { label: "Assinatura", highlight: false, icon: iconCrown },
];

export function Header() {
  return (
    <header className={styles.header} role="banner">
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topItem}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>
          <div className={styles.topItem}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="1" y="3" width="15" height="13" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>
          <div className={styles.topItem}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={styles.mainBar}>
        <div className={styles.container}>
          <a
            href="/"
            aria-label="Econverse - Página inicial"
            className={styles.logo}
          >
            <img src={logo} alt="Econverse" height={40} />
          </a>

          <search className={styles.searchWrapper}>
            <label htmlFor="search" className={styles.srOnly}>
              Buscar produtos
            </label>
            <input
              id="search"
              type="search"
              placeholder="O que você está buscando?"
              className={styles.searchInput}
            />
            <button
              type="submit"
              aria-label="Buscar"
              className={styles.searchBtn}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </search>

          <div className={styles.actions}>
            <a href="#" aria-label="Minha lista" className={styles.actionBtn}>
              <img
                src={iconGroup}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              aria-label="Lista de desejos"
              className={styles.actionBtn}
            >
              <img
                src={iconHeart}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
              />
            </a>
            <a href="#" aria-label="Minha conta" className={styles.actionBtn}>
              <img
                src={iconUser}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
              />
            </a>
            <a
              href="#"
              aria-label="Carrinho de compras"
              className={styles.actionBtn}
            >
              <img
                src={iconCart}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Nav categorias */}
      <nav className={styles.categoryNav} aria-label="Categorias">
        <div className={styles.container}>
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href="#" className={link.highlight ? styles.highlight : ""}>
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className={styles.navIcon}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
