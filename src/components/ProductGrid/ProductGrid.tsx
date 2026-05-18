import { useState } from "react";
import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const TABS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];
const ITEMS_PER_PAGE = 4;

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  showTabs?: boolean;
}

function ProductGrid({
  products,
  onProductClick,
  showTabs = true,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const visibleProducts = products.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Produtos relacionados</h2>

      {showTabs ? (
        <nav className={styles.tabs} aria-label="Filtrar por categoria">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              className={
                index === activeTab
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
              onClick={() => {
                setActiveTab(index);
                setPage(0);
              }}
              aria-current={index === activeTab ? "true" : undefined}
            >
              {tab}
            </button>
          ))}
        </nav>
      ) : (
        <p className={styles.viewAll}>
          <a href="#" className={styles.viewAllLink}>
            Ver todos
          </a>
        </p>
      )}

      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowBtn}
          onClick={handlePrev}
          disabled={page === 0}
          aria-label="Produtos anteriores"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 1L1 8L9 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.grid}>
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>

        <button
          className={styles.arrowBtn}
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          aria-label="Próximos produtos"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L9 8L1 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ProductGrid;
