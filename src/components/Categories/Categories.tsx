import styles from "./Categories.module.scss";

import iconTecnologia from "../../assets/Tecnologia.svg";
import iconSupermercado from "../../assets/Supermercado.svg";
import iconBebidas from "../../assets/Bebidas.svg";
import iconFerramentas from "../../assets/Ferramentas.svg";
import iconSaude from "../../assets/Saude.svg"; 
import iconEsportes from "../../assets/Esportes.svg";
import iconModa from "../../assets/Moda.svg";

interface Category {
  label: string;
  icon: string;
  active: boolean;
}

const CATEGORIES: Category[] = [
  { label: "Tecnologia", icon: iconTecnologia, active: true },
  { label: "Supermercado", icon: iconSupermercado, active: false },
  { label: "Bebidas", icon: iconBebidas, active: false },
  { label: "Ferramentas", icon: iconFerramentas, active: false },
  { label: "Saúde", icon: iconSaude, active: false },
  { label: "Esportes e Fitness", icon: iconEsportes, active: false },
  { label: "Moda", icon: iconModa, active: false },
];

export function Categories() {
  return (
    <section aria-label="Categorias em destaque" className={styles.categories}>
      <div className={styles.container}>
        {CATEGORIES.map((cat) => (
          <a
            key={cat.label}
            href="#"
            className={
              cat.active ? `${styles.card} ${styles.active}` : styles.card
            }
            aria-current={cat.active ? "true" : undefined}
          >
            <div className={styles.iconWrapper}>
              <img
                src={cat.icon}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
              />
            </div>
            <span className={styles.label}>{cat.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
